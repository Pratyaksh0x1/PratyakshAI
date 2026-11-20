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
  let isProgrammaticScrolling = false;
  let programmaticScrollTimer = null;

  const scrollToBottom = (smooth = true) => {
    if (!chatBody) return;
    isProgrammaticScrolling = true;
    if (programmaticScrollTimer) clearTimeout(programmaticScrollTimer);

    if (smooth) {
      chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
      programmaticScrollTimer = setTimeout(() => {
        isProgrammaticScrolling = false;
      }, 500);
    } else {
      chatBody.scrollTop = chatBody.scrollHeight;
      programmaticScrollTimer = setTimeout(() => {
        isProgrammaticScrolling = false;
      }, 50);
    }
  };

  const autoScrollChat = () => {
    if (!chatBody) return;
    if (!isUserScrolledUp) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  };

  if (chatBody) {
    const handleUserInteraction = () => {
      isProgrammaticScrolling = false;
      if (programmaticScrollTimer) clearTimeout(programmaticScrollTimer);
    };

    chatBody.addEventListener("wheel", handleUserInteraction, { passive: true });
    chatBody.addEventListener("touchmove", handleUserInteraction, { passive: true });
    chatBody.addEventListener("pointerdown", handleUserInteraction);

    chatBody.addEventListener("scroll", () => {
      if (isProgrammaticScrolling) return;
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
        setTimeout(() => {
          botMsg.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 80);
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

  // Global & Retro Turntable Music Player Component
  let globalAudio = document.getElementById("hero-music-audio");
  if (!globalAudio) {
    globalAudio = new Audio("assets/bg_music.mp3");
    globalAudio.loop = true;
    globalAudio.preload = "auto";
  }
  globalAudio.preload = "auto";
  window.__globalAudio = globalAudio;
  
  const retroPlayer = document.getElementById("retro-player");
  const retroPlayBtn = document.getElementById("retro-play-btn");
  const retroPlayIcon = document.getElementById("retro-play-icon");
  const vinylDiscBtn = document.getElementById("vinyl-disc-btn");
  const retroProgressBar = document.getElementById("retro-progress-bar");
  const retroProgressFill = document.getElementById("retro-progress-fill");
  const retroCurrTime = document.getElementById("retro-curr-time");
  const retroTotalTime = document.getElementById("retro-total-time");
  const retroVolumeBtn = document.getElementById("retro-volume-btn");
  const retroVolumeSlider = document.getElementById("retro-volume-slider");
  const globalMuteBtn = document.getElementById("global-mute-btn");

  // Helper functions to reliably persist mute state across all pages
  const getSavedMute = () => {
    try {
      const local = localStorage.getItem("portfolio_audio_muted");
      if (local !== null) return local === "true";
      const session = sessionStorage.getItem("portfolio_audio_muted");
      if (session !== null) return session === "true";
    } catch (e) {}
    return false;
  };

  const setSavedMute = (isMuted) => {
    try {
      localStorage.setItem("portfolio_audio_muted", isMuted ? "true" : "false");
      sessionStorage.setItem("portfolio_audio_muted", isMuted ? "true" : "false");
    } catch (e) {}
  };

  const getSavedVolume = () => {
    try {
      const val = localStorage.getItem("portfolio_audio_volume") || sessionStorage.getItem("portfolio_audio_volume") || "0.35";
      const parsed = parseFloat(val);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) return parsed;
    } catch (e) {}
    return 0.35;
  };

  const setSavedVolume = (vol) => {
    try {
      localStorage.setItem("portfolio_audio_volume", vol.toString());
      sessionStorage.setItem("portfolio_audio_volume", vol.toString());
    } catch (e) {}
  };

  // Initial volume and mute configuration
  globalAudio.muted = getSavedMute();
  globalAudio.volume = getSavedVolume();

  const savedTime = parseFloat(sessionStorage.getItem("bg_music_time") || "0");
  if (!isNaN(savedTime) && savedTime > 0) {
    try { globalAudio.currentTime = savedTime; } catch (e) {}
  }
  window.addEventListener("beforeunload", () => {
    if (globalAudio && !isNaN(globalAudio.currentTime)) {
      sessionStorage.setItem("bg_music_time", globalAudio.currentTime.toString());
    }
  });

  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0 || !isFinite(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  let timerInterval = null;
  const updateTick = () => {
    if (!globalAudio) return;
    const cur = globalAudio.currentTime;
    const dur = globalAudio.duration;
    if (retroCurrTime) retroCurrTime.innerText = formatTime(cur);
    if (dur && !isNaN(dur) && isFinite(dur)) {
      if (retroTotalTime) retroTotalTime.innerText = formatTime(dur);
      if (retroProgressFill) {
        const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
        retroProgressFill.style.width = pct + "%";
      }
    }
  };

  const startTimerLoop = () => {
    if (timerInterval) clearInterval(timerInterval);
    updateTick();
    timerInterval = setInterval(() => {
      if (!globalAudio || globalAudio.paused) {
        clearInterval(timerInterval);
        timerInterval = null;
        return;
      }
      updateTick();
    }, 100);
  };

  const updateAudioUI = () => {
    if (!globalAudio) return;
    const isPlaying = !globalAudio.paused && !globalAudio.ended;
    const isMuted = globalAudio.muted || globalAudio.volume === 0;

    // 1. Update Global Bottom-Left Mute Button (All 4 pages)
    if (globalMuteBtn) {
      const iconOn = globalMuteBtn.querySelector(".mute-svg-on");
      const iconOff = globalMuteBtn.querySelector(".mute-svg-off");
      if (isMuted) {
        globalMuteBtn.classList.add("is-muted");
        globalMuteBtn.setAttribute("title", "Unmute");
        if (iconOn) iconOn.style.display = "none";
        if (iconOff) iconOff.style.display = "block";
      } else {
        globalMuteBtn.classList.remove("is-muted");
        globalMuteBtn.setAttribute("title", "Mute");
        if (iconOn) iconOn.style.display = "block";
        if (iconOff) iconOff.style.display = "none";
      }
    }

    // 2. Turntable UI (hero section on index.html)
    if (retroPlayer) {
      if (isPlaying) {
        retroPlayer.classList.add("is-playing");
        if (retroPlayIcon) retroPlayIcon.innerText = "⏸";
        startTimerLoop();
      } else {
        retroPlayer.classList.remove("is-playing");
        if (retroPlayIcon) retroPlayIcon.innerText = "▶";
        if (timerInterval) {
          clearInterval(timerInterval);
          timerInterval = null;
        }
        updateTick();
      }
    }

    // 3. Retro Player Volume Controls
    if (retroVolumeBtn) {
      const volOn = retroVolumeBtn.querySelector(".vol-svg-on");
      const volOff = retroVolumeBtn.querySelector(".vol-svg-off");
      if (isMuted) {
        if (volOn) volOn.style.display = "none";
        if (volOff) volOff.style.display = "block";
      } else {
        if (volOn) volOn.style.display = "block";
        if (volOff) volOff.style.display = "none";
      }
    }
    if (retroVolumeSlider && document.activeElement !== retroVolumeSlider) {
      retroVolumeSlider.value = (globalAudio.volume != null && !isNaN(globalAudio.volume) ? globalAudio.volume : 0.35).toString();
    }
  };

  // Toggle Mute / Unmute function
  const toggleMute = () => {
    if (!globalAudio) return;
    if (globalAudio.muted || globalAudio.volume === 0) {
      globalAudio.muted = false;
      const vol = getSavedVolume();
      globalAudio.volume = (vol > 0 ? vol : 0.35);
      setSavedMute(false);
      setSavedVolume(globalAudio.volume);
      if (globalAudio.paused) {
        globalAudio.play().catch(console.warn);
      }
    } else {
      globalAudio.muted = true;
      setSavedMute(true);
    }
    updateAudioUI();
  };
  window.toggleMute = toggleMute;

    // Sound hint management for browser autoplay restrictions
    const showSoundHint = () => {
      if (!retroPlayer) return;
      if (document.getElementById("audio-sound-hint")) return;
      const hint = document.createElement("div");
      hint.className = "audio-sound-hint";
      hint.id = "audio-sound-hint";
      hint.innerHTML = "<span>🎵 Tap anywhere for sound</span>";
      retroPlayer.appendChild(hint);
    };

    const removeSoundHint = () => {
      const hint = document.getElementById("audio-sound-hint");
      if (hint) {
        hint.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        hint.style.opacity = "0";
        hint.style.transform = "translateX(-50%) translateY(-6px)";
        setTimeout(() => hint.remove(), 350);
      }
    };

    // Debounced Toggle Play / Pause function with Optimistic UI updates
    let playLock = false;
    const togglePlayPause = () => {
      if (!globalAudio || playLock) return;
      playLock = true;
      setTimeout(() => { playLock = false; }, 200);

      // If paused, start/resume playback
      if (globalAudio.paused) {
        const isMutedByUser = getSavedMute();
        globalAudio.muted = isMutedByUser;
        removeSoundHint();
        if (retroPlayer) retroPlayer.classList.add("is-playing");
        if (retroPlayIcon) retroPlayIcon.innerText = "⏸";

        globalAudio.play().then(() => updateAudioUI()).catch(console.warn);
      } else if (globalAudio.muted && !getSavedMute()) {
        // Tapping player unmutes if it was only muted due to browser policy
        globalAudio.muted = false;
        removeSoundHint();
        updateAudioUI();
      } else {
        // Pausing
        globalAudio.pause();
        if (retroPlayer) retroPlayer.classList.remove("is-playing");
        if (retroPlayIcon) retroPlayIcon.innerText = "▶";
        updateAudioUI();
      }
    };
    window.toggleMusicPlay = togglePlayPause;

    // Global Bottom-Left Mute Button (All 4 pages)
    if (globalMuteBtn) {
      globalMuteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMute();
      });
    }

    // Turntable controls
    if (retroPlayBtn) retroPlayBtn.addEventListener("click", (e) => { e.stopPropagation(); togglePlayPause(); });
    if (vinylDiscBtn) vinylDiscBtn.addEventListener("click", (e) => { e.stopPropagation(); togglePlayPause(); });
    if (retroVolumeBtn) retroVolumeBtn.addEventListener("click", (e) => { e.stopPropagation(); toggleMute(); });
    
    if (retroVolumeSlider) {
      retroVolumeSlider.addEventListener("input", function (e) {
        e.stopPropagation();
        const val = parseFloat(this.value);
        if (!isNaN(val)) {
          globalAudio.volume = val;
          const isZero = (val === 0);
          globalAudio.muted = isZero;
          setSavedVolume(val);
          setSavedMute(isZero);
          updateAudioUI();
        }
      });
    }

    // Tap turntable background to play/pause (excluding controls)
    if (retroPlayer) {
      retroPlayer.addEventListener("click", (e) => {
        if (e.target.closest("button") || e.target.closest("input") || e.target.closest("#retro-progress-bar")) return;
        togglePlayPause();
      });
    }

    // Audio status sync listeners
    globalAudio.addEventListener("play", updateAudioUI);
    globalAudio.addEventListener("pause", updateAudioUI);
    globalAudio.addEventListener("volumechange", updateAudioUI);
    globalAudio.addEventListener("durationchange", () => {
      if (retroTotalTime && globalAudio.duration && !isNaN(globalAudio.duration) && isFinite(globalAudio.duration)) {
        retroTotalTime.innerText = formatTime(globalAudio.duration);
      }
    });

    globalAudio.addEventListener("timeupdate", () => {
      const cur = globalAudio.currentTime;
      const dur = globalAudio.duration;
      if (retroCurrTime) retroCurrTime.innerText = formatTime(cur);
      if (dur && !isNaN(dur) && isFinite(dur)) {
        if (retroTotalTime) retroTotalTime.innerText = formatTime(dur);
        if (retroProgressFill) {
          const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
          retroProgressFill.style.width = pct + "%";
        }
      }
    });

    globalAudio.addEventListener("loadedmetadata", () => {
      if (retroTotalTime && globalAudio.duration && !isNaN(globalAudio.duration) && isFinite(globalAudio.duration)) {
        retroTotalTime.innerText = formatTime(globalAudio.duration);
      }
    });

    globalAudio.addEventListener("ended", () => {
      updateAudioUI();
      if (retroProgressFill) retroProgressFill.style.width = "0%";
      if (retroCurrTime) retroCurrTime.innerText = "0:00";
    });

    if (retroProgressBar) {
      retroProgressBar.addEventListener("click", (e) => {
        e.stopPropagation();
        const rect = retroProgressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, clickX / rect.width));
        if (globalAudio.duration && !isNaN(globalAudio.duration) && isFinite(globalAudio.duration)) {
          globalAudio.currentTime = ratio * globalAudio.duration;
        }
      });
    }

    // Autoplay execution: Try unmuted autoplay unless previously muted by user; if blocked, play muted & await interaction
    const tryAutoplay = () => {
      const isMutedByUser = getSavedMute();
      if (isMutedByUser) {
        // User explicitly muted audio on this or another page: KEEP IT MUTED!
        globalAudio.muted = true;
        const playPromise = globalAudio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            updateAudioUI();
          }).catch(() => {
            updateAudioUI();
          });
        }
        return;
      }

      // User has not muted: attempt unmuted playback
      globalAudio.muted = false;
      if (!globalAudio.volume || globalAudio.volume === 0) globalAudio.volume = getSavedVolume();
      
      const playPromise = globalAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          removeSoundHint();
          updateAudioUI();
        }).catch((err) => {
          console.log("Autoplay unmuted blocked by browser policy. Playing muted & awaiting gesture:", err);
          globalAudio.muted = true;
          globalAudio.play().then(() => {
            showSoundHint();
            updateAudioUI();
          }).catch(() => {
            showSoundHint();
            updateAudioUI();
          });
        });
      }
    };

    // Unlock sound on first user interaction anywhere (ONLY IF not explicitly muted by user)
    const gestureEvents = ["click", "pointerdown", "touchstart", "keydown"];
    const unlockOnFirstGesture = () => {
      const isMutedByUser = getSavedMute();
      if (isMutedByUser) {
        // User intentionally muted audio: DO NOT UNMUTE!
        removeSoundHint();
        gestureEvents.forEach(evt => window.removeEventListener(evt, unlockOnFirstGesture, true));
        return;
      }

      // Only unmute if it was muted solely by browser autoplay restriction
      if (globalAudio) {
        globalAudio.muted = false;
        if (!globalAudio.volume || globalAudio.volume === 0) globalAudio.volume = getSavedVolume();
        setSavedMute(false);
        if (globalAudio.paused) {
          globalAudio.play().then(() => updateAudioUI()).catch(console.warn);
        } else {
          updateAudioUI();
        }
        removeSoundHint();
      }
      gestureEvents.forEach(evt => window.removeEventListener(evt, unlockOnFirstGesture, true));
    };

    gestureEvents.forEach(evt => {
      window.addEventListener(evt, unlockOnFirstGesture, { capture: true, once: true });
    });

    // Save audio position on link clicks to preserve continuity
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href.endsWith('.html') || href === '/' || href.startsWith('#') === false)) {
        link.addEventListener('click', () => {
          if (globalAudio && !isNaN(globalAudio.currentTime)) {
            sessionStorage.setItem("bg_music_time", globalAudio.currentTime.toString());
          }
        });
      }
    });

    // Run autoplay on page load
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        updateAudioUI();
        tryAutoplay();
      });
    } else {
      updateAudioUI();
      tryAutoplay();
    }

  // ----------------------------------------------------
  // Interactive Vintage Career Tickets (Subtle 3D Tilt)
  // ----------------------------------------------------
  const ticketCards = document.querySelectorAll(".ticket-card");
  ticketCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = (x / rect.width) * 2 - 1;
      const yPct = (y / rect.height) * 2 - 1;
      card.style.transform = `perspective(1000px) rotateX(${(-yPct * 3.5).toFixed(1)}deg) rotateY(${(xPct * 3.5).toFixed(1)}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  // Ping backend on load
  fetch("https://pratyakshai-backend.onrender.com/")
    .then(res => res.ok ? setStatus("online") : setStatus("offline"))
    .catch(() => setStatus("offline"));
});
