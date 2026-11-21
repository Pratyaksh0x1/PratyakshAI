import React, { useState, useEffect, useRef } from 'react';
import './ReceiptPrinter.css';

export interface ReceiptLine {
  type: 'title' | 'text' | 'row' | 'divider' | 'double-divider' | 'barcode' | 'space' | 'link' | 'badge';
  content?: string;
  left?: string;
  right?: string;
  url?: string;
  icon?: string;
  primary?: boolean;
}

export interface ReceiptPrinterProps {
  title?: string;
  subtitle?: string;
  printerModel?: string;
  lines?: ReceiptLine[];
  autoplay?: boolean;
  tearable?: boolean;
  onTear?: () => void;
  onPrinted?: () => void;
}

// Subtle Web Audio sound synthesizer for realistic mechanical thermal printing & paper tear
class ReceiptSoundFX {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // Thermal stepper motor buzz on print/feed
  playFeedSound() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      
      // Motor pulse
      for (let i = 0; i < 4; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140 + i * 20, now + i * 0.12);
        gain.gain.setValueAtTime(0.04, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.08);
      }
    } catch {
      // Audio not permitted without interaction, silently continue
    }
  }

  // Crisp paper rip sound on tear
  playTearSound() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      
      // White noise buffer for paper tear
      const bufferSize = this.ctx.sampleRate * 0.18;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2200, now);
      filter.Q.setValueAtTime(1.8, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
    } catch {
      // Gracefully silent
    }
  }
}

const soundFX = new ReceiptSoundFX();

export const defaultReceiptLines: ReceiptLine[] = [
  { type: 'title', content: 'PRATYAKSH TOMAR' },
  { type: 'text', content: 'SOFTWARE ENGINEER • AI AGENTS' },
  { type: 'text', content: 'Ghaziabad, India' },
  { type: 'divider' },
  { type: 'row', left: 'ROLE', right: 'Software Engineer' },
  { type: 'row', left: 'FOCUS', right: 'AI Agents & Systems' },
  { type: 'row', left: 'LANGUAGES', right: 'C++, TS, Python' },
  { type: 'row', left: 'STATUS', right: 'Open to Roles' },
  { type: 'divider' },
  { type: 'text', content: '>>> PREFER A REAL CONVERSATION? <<<' },
  { type: 'space' },
  { 
    type: 'link', 
    left: '✉ Email me', 
    right: 'pratyakshtomar2000@gmail.com', 
    url: 'mailto:Pratyakshtomar2000@gmail.com',
    primary: true 
  },
  { 
    type: 'link', 
    left: '⚡ GitHub', 
    right: 'Pratyaksh0x1', 
    url: 'https://github.com/Pratyaksh0x1' 
  },
  { 
    type: 'link', 
    left: '💼 LinkedIn', 
    right: 'pratyaksh-tomar', 
    url: 'https://www.linkedin.com/in/pratyaksh-tomar-112bb6337' 
  },
  { 
    type: 'link', 
    left: '🧠 LeetCode', 
    right: 'PratyakshTomar', 
    url: 'https://leetcode.com/u/PratyakshTomar/' 
  },
  { 
    type: 'link', 
    left: '🚀 Code360', 
    right: 'Pratyaksh', 
    url: 'https://www.naukri.com/code360/profile/575f3b5a-e2ca-4e24-bbee-205f68c7de95' 
  },
  { type: 'divider' },
  { type: 'row', left: 'CANDIDATE FIT', right: '100%' },
  { type: 'row', left: 'INTERVIEW READY', right: 'YES' },
  { type: 'double-divider' },
  { type: 'barcode', content: 'PT-2026-SWE-HIRE-ME' },
  { type: 'text', content: '✂️ Cut, taped & glued — 2026' }
];

export const ReceiptPrinter: React.FC<ReceiptPrinterProps> = ({
  title = 'Prefer a real conversation?',
  subtitle = "The AI is fun, but I'm happy to talk directly too.",
  printerModel = 'THERMAL POS-80',
  lines = defaultReceiptLines,
  autoplay = true,
  tearable = true,
  onTear,
  onPrinted
}) => {
  const [status, setStatus] = useState<'printing' | 'ready' | 'torn'>('printing');
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const receiptRef = useRef<HTMLDivElement>(null);

  // Trigger print extrusion on mount or feed
  const triggerPrint = () => {
    setStatus('printing');
    setDragY(0);
    soundFX.playFeedSound();
    
    setTimeout(() => {
      setStatus('ready');
      if (onPrinted) onPrinted();
    }, 1200);
  };

  useEffect(() => {
    if (autoplay) {
      triggerPrint();
    } else {
      setStatus('ready');
    }
  }, []);

  // Handle Tear Off Action
  const handleTearOff = () => {
    if (status === 'torn') return;
    setStatus('torn');
    setDragY(0);
    soundFX.playTearSound();
    if (onTear) onTear();
  };

  // Drag to tear interaction
  const onMouseDown = (e: React.MouseEvent) => {
    if (!tearable || status === 'torn') return;
    setIsDragging(true);
    dragStartY.current = e.clientY;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = Math.max(0, e.clientY - dragStartY.current);
    setDragY(diff);
    if (diff > 90) {
      setIsDragging(false);
      handleTearOff();
    }
  };

  const onMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (dragY > 60) {
        handleTearOff();
      } else {
        setDragY(0);
      }
    }
  };

  // Touch drag support for mobile devices
  const onTouchStart = (e: React.TouchEvent) => {
    if (!tearable || status === 'torn') return;
    setIsDragging(true);
    dragStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = Math.max(0, e.touches[0].clientY - dragStartY.current);
    setDragY(diff);
    if (diff > 80) {
      setIsDragging(false);
      handleTearOff();
    }
  };

  const onTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      if (dragY > 50) {
        handleTearOff();
      } else {
        setDragY(0);
      }
    }
  };

  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const formattedTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div 
      className="receipt-printer-root"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {/* Printer Header Intro (matching original resume contact card text) */}
      <div style={{ textAlign: 'center', marginBottom: '22px' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 800, margin: '0 0 8px 0', color: 'var(--ink, #1f2024)' }}>
          {title}
        </h2>
        <p style={{ fontFamily: 'Kalam, cursive', fontSize: '1.15rem', color: 'var(--ink-soft, #5a5c62)', margin: '0 auto', maxWidth: '42ch' }}>
          {subtitle}
        </p>
      </div>

      {/* Physical Thermal Printer Housing */}
      <div className="printer-enclosure">
        <div className="printer-top-bar">
          <div className="printer-brand">
            <span className={`printer-led ${status}`}></span>
            <span>{printerModel}</span>
          </div>

          <div className="printer-controls">
            <button 
              type="button" 
              className="printer-feed-btn"
              onClick={triggerPrint}
              title="Feed paper roll / Print fresh receipt"
            >
              FEED / PRINT
            </button>
          </div>
        </div>

        {/* Paper Ejection Slot */}
        <div className="printer-slot-wrap">
          <div className="printer-cutter-teeth"></div>
        </div>
      </div>

      {/* Extruded Thermal Receipt Paper */}
      <div className="receipt-paper-stage">
        <div 
          ref={receiptRef}
          className={`receipt-paper ${status === 'printing' ? 'anim-printing' : ''} ${status === 'torn' ? 'torn-off' : ''}`}
          style={{
            transform: status === 'torn' 
              ? 'translateY(35px) rotate(2.5deg)' 
              : `translateY(${dragY}px) rotate(${dragY * 0.04}deg)`
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Top Jagged Serrated Cut Edge */}
          <div className="receipt-serrated-top"></div>

          {/* Receipt Content Header */}
          <div className="receipt-header">
            <div className="receipt-meta" style={{ marginBottom: '4px' }}>
              *** RESUME RECEIPT TICKET ***
            </div>
            <h3 className="receipt-store-title">PRATYAKSH TOMAR</h3>
            <div className="receipt-meta">
              {formattedDate} • {formattedTime} • TERMINAL #01
            </div>
          </div>

          <hr className="receipt-divider" />

          {/* Render lines */}
          {lines.map((line, idx) => {
            if (line.type === 'title') {
              return null; // Handled in header
            }
            if (line.type === 'text') {
              return (
                <div key={idx} className="receipt-meta" style={{ textAlign: 'center', margin: '4px 0' }}>
                  {line.content}
                </div>
              );
            }
            if (line.type === 'row') {
              const isTotal = line.left?.includes('FIT') || line.left?.includes('TOTAL');
              return (
                <div key={idx} className={`receipt-row ${isTotal ? 'receipt-row-total' : ''}`}>
                  <span className="receipt-row-label">{line.left}</span>
                  <span className="receipt-row-value">{line.right}</span>
                </div>
              );
            }
            if (line.type === 'divider') {
              return <hr key={idx} className="receipt-divider" />;
            }
            if (line.type === 'double-divider') {
              return <hr key={idx} className="receipt-divider-double" />;
            }
            if (line.type === 'space') {
              return <div key={idx} style={{ height: '6px' }}></div>;
            }
            if (line.type === 'link') {
              return (
                <a
                  key={idx}
                  href={line.url}
                  target={line.url?.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`receipt-action-link ${line.primary ? 'primary-action' : ''}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>{line.left}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '0.68rem', opacity: 0.85 }}>{line.right}</span>
                    <span className="receipt-link-arrow">↗</span>
                  </span>
                </a>
              );
            }
            if (line.type === 'barcode') {
              return (
                <div key={idx} className="receipt-barcode-wrap">
                  <svg className="receipt-barcode-svg" viewBox="0 0 240 40" preserveAspectRatio="none">
                    <rect x="0" y="0" width="3" height="40" fill="currentColor"/>
                    <rect x="5" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="10" y="0" width="6" height="40" fill="currentColor"/>
                    <rect x="19" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="24" y="0" width="4" height="40" fill="currentColor"/>
                    <rect x="31" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="36" y="0" width="7" height="40" fill="currentColor"/>
                    <rect x="46" y="0" width="3" height="40" fill="currentColor"/>
                    <rect x="52" y="0" width="5" height="40" fill="currentColor"/>
                    <rect x="60" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="65" y="0" width="4" height="40" fill="currentColor"/>
                    <rect x="72" y="0" width="6" height="40" fill="currentColor"/>
                    <rect x="81" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="86" y="0" width="4" height="40" fill="currentColor"/>
                    <rect x="93" y="0" width="3" height="40" fill="currentColor"/>
                    <rect x="99" y="0" width="8" height="40" fill="currentColor"/>
                    <rect x="110" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="115" y="0" width="5" height="40" fill="currentColor"/>
                    <rect x="123" y="0" width="3" height="40" fill="currentColor"/>
                    <rect x="129" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="134" y="0" width="6" height="40" fill="currentColor"/>
                    <rect x="143" y="0" width="3" height="40" fill="currentColor"/>
                    <rect x="149" y="0" width="4" height="40" fill="currentColor"/>
                    <rect x="156" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="161" y="0" width="7" height="40" fill="currentColor"/>
                    <rect x="171" y="0" width="3" height="40" fill="currentColor"/>
                    <rect x="177" y="0" width="5" height="40" fill="currentColor"/>
                    <rect x="185" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="190" y="0" width="4" height="40" fill="currentColor"/>
                    <rect x="197" y="0" width="6" height="40" fill="currentColor"/>
                    <rect x="206" y="0" width="2" height="40" fill="currentColor"/>
                    <rect x="211" y="0" width="5" height="40" fill="currentColor"/>
                    <rect x="219" y="0" width="3" height="40" fill="currentColor"/>
                    <rect x="225" y="0" width="4" height="40" fill="currentColor"/>
                    <rect x="232" y="0" width="3" height="40" fill="currentColor"/>
                    <rect x="238" y="0" width="2" height="40" fill="currentColor"/>
                  </svg>
                  <div className="receipt-barcode-num">{line.content}</div>
                </div>
              );
            }
            return null;
          })}

          <div className="receipt-footer-msg">
            Thank you for visiting! Please keep this receipt.
          </div>

          {/* Interactive Tear Handle / Button */}
          {status !== 'torn' ? (
            <div 
              className="receipt-tear-handle"
              onClick={handleTearOff}
              title="Click or drag down to tear receipt"
            >
              <span>✂</span>
              <span>PULL OR CLICK TO TEAR RECEIPT</span>
            </div>
          ) : (
            <div className="receipt-tear-handle" style={{ background: '#dcfce7', borderColor: '#22c55e', color: '#16a34a' }}>
              <span>✓</span>
              <span>RECEIPT TORN &amp; SAVED</span>
            </div>
          )}

          {/* Bottom Jagged Serrated Cut Edge */}
          <div className="receipt-serrated-bottom"></div>
        </div>

        {/* Action Button to Print Again when Torn */}
        {status === 'torn' && (
          <div className="receipt-reprint-wrap">
            <button 
              type="button" 
              className="receipt-reprint-btn"
              onClick={triggerPrint}
            >
              <span>🖨️</span>
              <span>PRINT NEW RECEIPT</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReceiptPrinter;
