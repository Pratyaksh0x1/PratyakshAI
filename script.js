document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");
  const suggestButtons = document.querySelectorAll("#chat-suggest button");
  const statusEl = document.getElementById("backend-status");

  const conversationHistory = [];
  const sessionId = "sess_" + Math.random().toString(36).substring(2, 9) + "_" + Date.now();
  const chatScrollBtn = document.getElementById("chat-scroll-btn");
  let isUserScrolledUp = false;

  const scrollToBottom = (smooth = true) => {
    if (!chatBody) return;
    if (smooth) {
      chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    } else {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  };

  const autoScrollChat = () => {
    if (!chatBody) return;
    if (!isUserScrolledUp) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  };

  if (chatBody) {
    chatBody.addEventListener("scroll", () => {
      const distanceToBottom = chatBody.scrollHeight - chatBody.scrollTop - chatBody.clientHeight;
      isUserScrolledUp = distanceToBottom > 50;
      if (chatScrollBtn) {
        if (isUserScrolledUp) {
          chatScrollBtn.classList.add("visible");
        } else {
          chatScrollBtn.classList.remove("visible");
        }
      }
    });
  }

  if (chatScrollBtn) {
    chatScrollBtn.addEventListener("click", () => {
      isUserScrolledUp = false;
      scrollToBottom(true);
      chatScrollBtn.classList.remove("visible");
    });
  }

  const scrollPageToAI = () => {
    const chatSection = document.getElementById("chat");
    if (chatSection) {
      const rect = chatSection.getBoundingClientRect();
      if (rect.top < -50 || rect.top > window.innerHeight * 0.4) {
        chatSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const appendMessage = (text, isUser = false) => {
    const div = document.createElement("div");
    div.className = "msg " + (isUser ? "user" : "bot");
    div.innerText = text;
    chatBody.appendChild(div);
    scrollToBottom(true);
    return div;
  };

  const setStatus = (text) => {
    if (statusEl) statusEl.innerText = text;
  };

  const sendMessage = async (question) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    
    isUserScrolledUp = false;
    appendMessage(trimmed, true);
    if (chatInput) chatInput.value = "";
    setStatus("typing...");
    scrollPageToAI();

    // Create bot bubble with animated typing dots
    const botMsg = document.createElement("div");
    botMsg.className = "msg bot";
    botMsg.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';
    chatBody.appendChild(botMsg);
    scrollToBottom(true);
    
    let botFullAnswer = "";
    try {
      const res = await fetch("https://pratyakshai-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          history: conversationHistory,
          session_id: sessionId,
          streaming: true,
          stream: true
        })
      });
      if (!res.ok) throw new Error("Server error " + res.status);
      
      const contentType = res.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        const data = await res.json();
        botFullAnswer = data.answer || "";
        botMsg.innerText = botFullAnswer;
        autoScrollChat();
      } else if (res.body && res.body.getReader) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let hasReceivedFirstChunk = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          if (chunk) {
            if (!hasReceivedFirstChunk) {
              botMsg.innerText = "";
              hasReceivedFirstChunk = true;
            }
            botMsg.innerText += chunk;
            botFullAnswer += chunk;
            autoScrollChat();
          }
        }

        if (!hasReceivedFirstChunk) {
          botFullAnswer = "I don't have enough information to answer that.";
          botMsg.innerText = botFullAnswer;
        }
      } else {
        botFullAnswer = await res.text();
        botMsg.innerText = botFullAnswer;
      }

      if (botFullAnswer && botFullAnswer.trim()) {
        conversationHistory.push({ role: "user", content: trimmed });
        conversationHistory.push({ role: "assistant", content: botFullAnswer.trim() });
        if (conversationHistory.length > 20) {
          conversationHistory.splice(0, conversationHistory.length - 20);
        }
      }

      setStatus("online");
    } catch (err) {
      console.error(err);
      botMsg.className = "msg bot err";
      botMsg.innerText = "Sorry, I'm having trouble connecting to my brain right now! Make sure the backend is running.";
      setStatus("offline");
    } finally {
      if (!isUserScrolledUp) {
        scrollToBottom(true);
      }
    }
  };

  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      sendMessage(chatInput.value);
    });
  }

  if (suggestButtons) {
    suggestButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        sendMessage(btn.innerText);
      });
    });
  }

  const jdForm = document.getElementById("jd-form");
  const jdInput = document.getElementById("jd-input");
  const jdResult = document.getElementById("jd-result");
  const jdSubmit = document.getElementById("jd-submit");

  if (jdForm) {
    jdForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const jd = jdInput.value.trim();
      if (!jd) return;

      jdSubmit.innerText = "Analyzing...";
      jdSubmit.disabled = true;
      jdResult.hidden = true;

      try {
        const res = await fetch("https://pratyakshai-backend.onrender.com/jd-match", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jd })
        });
        if (!res.ok) throw new Error("Server error");
        
        const data = await res.json();
        const text = data.answer || "";
        const scoreMatch = text.match(/Score:\s*(\d+)/i);
        const reasonMatch = text.match(/Reason:\s*([\s\S]+)/i);

        if (scoreMatch && reasonMatch) {
          const score = scoreMatch[1];
          const reason = reasonMatch[1].trim();
          jdResult.innerHTML = `
            <div style="padding: 20px;">
              <div style="text-align:center;">
                <div style="font-size:3.5rem; font-weight:800; color:var(--teal); line-height:1; font-family:'Baloo 2', sans-serif;">
                  ${score}%
                </div>
                <div style="font-family:'Kalam', cursive; color:var(--ink-soft); font-size:1.2rem; margin-top:5px;">
                  Match Score
                </div>
              </div>
              <div style="font-family:'Poppins', sans-serif; color:var(--ink); font-size:0.95rem; margin-top:16px; line-height:1.6; background: rgba(255,255,255,0.7); padding: 16px; border-radius: 12px; border: 1px dashed var(--ink-soft);">
                <strong>Feedback & Reason:</strong><br>${reason}
              </div>
            </div>
          `;
        } else {
          jdResult.innerHTML = `
            <div style="padding: 20px; text-align:left; white-space:pre-wrap; font-family:'Poppins', sans-serif; line-height:1.5;">
              ${text}
            </div>
          `;
        }
        jdResult.hidden = false;
        setTimeout(() => {
          jdResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 50);
      } catch (err) {
        console.error(err);
        jdResult.innerHTML = "<p style='color:red'>Couldn't connect to backend. Please ensure it is running.</p>";
        jdResult.hidden = false;
        setTimeout(() => {
          jdResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 50);
      } finally {
        jdSubmit.innerText = "Check my fit";
        jdSubmit.disabled = false;
      }
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Ping backend on load
  fetch("https://pratyakshai-backend.onrender.com/")
    .then(res => res.ok ? setStatus("online") : setStatus("offline"))
    .catch(() => setStatus("offline"));
});
