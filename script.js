document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");
  const suggestButtons = document.querySelectorAll("#chat-suggest button");
  const statusEl = document.getElementById("backend-status");

  const appendMessage = (text, isUser = false) => {
    const div = document.createElement("div");
    div.className = "msg " + (isUser ? "user" : "bot");
    div.innerText = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const setStatus = (text) => {
    if (statusEl) statusEl.innerText = text;
  };

  const sendMessage = async (question) => {
    if (!question.trim()) return;
    
    appendMessage(question, true);
    if (chatInput) chatInput.value = "";
    setStatus("typing...");
    
    try {
      const res = await fetch("https://pratyakshai-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      if (!res.ok) throw new Error("Server error");
      
      const data = await res.json();
      appendMessage(data.answer);
      setStatus("online");
    } catch (err) {
      console.error(err);
      appendMessage("Sorry, I'm having trouble connecting to my brain right now! Make sure the backend is running.");
      setStatus("offline");
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
      } catch (err) {
        console.error(err);
        jdResult.innerHTML = "<p style='color:red'>Couldn't connect to backend. Please ensure it is running.</p>";
        jdResult.hidden = false;
      } finally {
        jdSubmit.innerText = "Check my fit";
        jdSubmit.disabled = false;
      }
    });
  }

  // Ping backend on load
  fetch("https://pratyakshai-backend.onrender.com/")
    .then(res => res.ok ? setStatus("online") : setStatus("offline"))
    .catch(() => setStatus("offline"));
});
