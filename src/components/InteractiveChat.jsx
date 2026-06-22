import React, { useState } from 'react';
import { Bot, User, Volume2, ArrowRight } from 'lucide-react';

const InteractiveChat = () => {
  const [step, setStep] = useState(0);

  const messages = [
    { type: 'bot', text: 'Bienvenue ! Je serai votre guide pour ce test. Si vous souhaitez m\'entendre parler, veuillez activer l\'audio.' },
    { type: 'bot', text: 'Parfait. Commençons !' },
    { type: 'bot', text: 'Montant total de votre crédit (€) ?' }
  ];

  return (
    <>
      <style>
        {`
          .chat-container {
            max-width: 860px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
          }

          .chat-window {
            min-height: 520px;
            display: flex;
            flex-direction: column;
            padding: 32px;
            border-radius: 20px;
            animation: cosmic-glow 8s ease-in-out infinite alternate;
          }

          @keyframes cosmic-glow {
            0% {
              box-shadow: 
                0 25px 60px rgba(0, 0, 0, 0.45),
                0 0 30px rgba(37, 99, 255, 0.15),
                0 0 50px rgba(110, 168, 255, 0.05);
              border-color: rgba(120, 170, 255, 0.16);
            }
            50% {
              box-shadow: 
                0 35px 80px rgba(0, 0, 0, 0.6),
                0 0 50px rgba(37, 99, 255, 0.3),
                0 0 80px rgba(110, 168, 255, 0.2);
              border-color: rgba(120, 170, 255, 0.35);
            }
            100% {
              box-shadow: 
                0 25px 60px rgba(0, 0, 0, 0.45),
                0 0 30px rgba(37, 99, 255, 0.15),
                0 0 50px rgba(110, 168, 255, 0.05);
              border-color: rgba(120, 170, 255, 0.16);
            }
          }

          .chat-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border-soft);
            margin-bottom: 24px;
          }

          .chat-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 600;
            color: #fff;
          }

          .chat-audio-btn {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: var(--text-muted);
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .chat-audio-btn:hover {
            background: rgba(255,255,255,0.1);
            color: #fff;
          }

          .chat-messages {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .message {
            display: flex;
            gap: 12px;
            max-width: 80%;
          }

          .message.bot {
            align-self: flex-start;
          }

          .message.user {
            align-self: flex-end;
            flex-direction: row-reverse;
          }

          .avatar {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            display: grid;
            place-items: center;
            flex-shrink: 0;
          }

          .avatar-bot {
            background: rgba(37,99,255,0.2);
            color: var(--accent-light);
            border: 1px solid rgba(37,99,255,0.3);
          }

          .avatar-user {
            background: rgba(255,255,255,0.1);
            color: #fff;
          }

          .bubble {
            padding: 12px 16px;
            border-radius: 12px;
            font-size: 14px;
            line-height: 1.5;
          }

          .bot .bubble {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.08);
            border-top-left-radius: 4px;
            color: var(--text-main);
          }

          .user .bubble {
            background: var(--accent);
            color: #fff;
            border-top-right-radius: 4px;
          }

          .chat-input-area {
            margin-top: 24px;
            display: flex;
            gap: 12px;
          }

          .chat-input {
            flex-grow: 1;
            background: rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 8px;
            padding: 0 16px;
            color: #fff;
            font-family: inherit;
            font-size: 14px;
            outline: none;
            transition: border-color 0.2s;
          }

          .chat-input:focus {
            border-color: var(--accent);
          }

          .chat-submit {
            background: var(--accent);
            border: none;
            width: 44px;
            height: 44px;
            border-radius: 8px;
            display: grid;
            place-items: center;
            color: #fff;
            cursor: pointer;
            transition: background 0.2s;
          }

          .chat-submit:hover {
            background: var(--accent-light);
          }

          .chat-actions {
            display: flex;
            gap: 12px;
            margin-top: 16px;
            justify-content: flex-end;
          }
        `}
      </style>
      <section className="section section-glow" style={{paddingTop: '20px'}}>
        <div className="container">
          <div className="chat-container">
            <div className="glass-card chat-window">
              <div className="chat-header">
                <div className="chat-title">
                  <div className="icon-box" style={{width: '28px', height: '28px'}}>
                    <Bot size={14} />
                  </div>
                  Assistant IA
                </div>
                <button className="chat-audio-btn">
                  <Volume2 size={16} />
                </button>
              </div>

              <div className="chat-messages">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`message ${msg.type}`}>
                    <div className={`avatar ${msg.type === 'bot' ? 'avatar-bot' : 'avatar-user'}`}>
                      {msg.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                    </div>
                    <div className="bubble">
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {step === 0 ? (
                <div className="chat-actions">
                  <button className="btn-secondary" onClick={() => setStep(1)}>
                    Lire
                  </button>
                  <button className="btn-primary" onClick={() => setStep(1)}>
                    <Volume2 size={16} style={{marginRight: '8px'}} />
                    Écouter
                  </button>
                </div>
              ) : (
                <div className="chat-input-area">
                  <input type="number" className="chat-input" placeholder="Ex: 15000" />
                  <button className="chat-submit">
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractiveChat;
