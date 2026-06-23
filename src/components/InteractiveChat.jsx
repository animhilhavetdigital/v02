import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, User, Volume2, ArrowRight, Loader2, X, RotateCcw, Sparkles } from 'lucide-react';

const questions = [
  {
    id: 'montant',
    type: 'number',
    text: 'Montant total de votre crédit (€) ?',
    placeholder: 'Ex: 15000'
  },
  {
    id: 'nombre',
    type: 'choice',
    text: 'Nombre de crédits conso litigieux',
    options: ['1 crédit', '2 crédits', '3 crédits ou plus']
  },
  { id: 'q3', type: 'yesno', text: 'Un intermédiaire ou démarcheur était-il présent lors de la vente ?' },
  { id: 'q4', type: 'yesno', text: 'Le contrat a-t-il été signé chez vous (à domicile) ?' },
  { id: 'q5', type: 'yesno', text: 'Ont-ils respecté le délai de rétractation ?' },
  { id: 'q6', type: 'yesno', text: 'Les prélèvements ont-ils déjà commencé ?' },
  { id: 'q7', type: 'yesno', text: 'Avez-vous déjà reçu des courriers de relance ?' },
  { id: 'q8', type: 'yesno', text: 'Avez-vous reçu une mise en demeure ?' },
  { id: 'q9', type: 'yesno', text: 'Êtes-vous menacé(e) de fichage Banque de France (FICP) ou avez-vous déjà été fiché(e) ?' },
  { id: 'q10', type: 'yesno', text: 'Êtes-vous en retard de paiement actuellement ?' },
  { id: 'q11', type: 'yesno', text: 'L\'organisme a-t-il vérifié votre solvabilité réelle ?' },
  { id: 'q12', type: 'yesno', text: 'A-t-il vérifié vos revenus et vos charges ?' },
  { id: 'q13', type: 'yesno', text: 'Y a-t-il des absences d\'information claire (coût total, taux, risques) ?' },
  { id: 'q14', type: 'yesno', text: 'A-t-il vérifié tous les éléments sans exception (justificatifs, situation pro, charges, relevés) ?' },
  { id: 'q15', type: 'yesno', text: 'L\'organisme a-t-il consulté le FICP et vérifié vos crédits en cours ?' },
  { id: 'q16', type: 'yesno', text: 'L\'organisme avait-il connaissance de vos antécédents de fichage ou incidents bancaires ?' }
];

const welcomeMessages = [
  { type: 'bot', text: 'Bienvenue ! Je serai votre guide pour ce test. Si vous souhaitez m\'entendre parler, veuillez activer l\'audio.' }
];

const InteractiveChat = () => {
  const navigate = useNavigate();
  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState(welcomeMessages);
  const [phase, setPhase] = useState('welcome'); // welcome | question | analyzing | result
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [score, setScore] = useState(0);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, phase, questionIndex]);

  const addMessage = (msg) => {
    setMessages(prev => [...prev, msg]);
  };

  const startTest = (withAudio) => {
    setAudioEnabled(withAudio);
    addMessage({ type: 'bot', text: 'Parfait. Commençons !' });
    setTimeout(() => {
      addMessage({ type: 'bot', text: questions[0].text });
      setPhase('question');
    }, 400);
  };

  const handleAnswer = (value) => {
    const current = questions[questionIndex];
    const displayValue = value.toString();
    addMessage({ type: 'user', text: displayValue });

    const nextAnswers = { ...answers, [current.id]: value };
    setAnswers(nextAnswers);

    if (questionIndex < questions.length - 1) {
      const nextIndex = questionIndex + 1;
      setQuestionIndex(nextIndex);
      setTimeout(() => {
        addMessage({ type: 'bot', text: questions[nextIndex].text });
      }, 400);
    } else {
      setPhase('analyzing');
      const finalScore = calculateScore(nextAnswers);
      setScore(finalScore);
      setTimeout(() => {
        setPhase('result');
      }, 2000);
    }
  };

  const calculateScore = (allAnswers) => {
    let s = 0;
    const montant = parseFloat(allAnswers.montant);
    if (!isNaN(montant) && montant > 0) s += 1;

    const nombre = allAnswers.nombre;
    if (nombre === '3 crédits ou plus') s += 2;
    else if (nombre === '2 crédits') s += 1;

    // Pour les questions binaires, "Oui" est considéré comme un élément favorable/irrégularité
    for (let i = 2; i < questions.length; i++) {
      if (allAnswers[questions[i].id] === 'Oui') s += 1;
    }

    return s;
  };

  const handleNumberSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value || isNaN(value) || Number(value) <= 0) return;
    setInputValue('');
    handleAnswer(value);
  };

  const resetChat = () => {
    setMessages(welcomeMessages);
    setPhase('welcome');
    setQuestionIndex(0);
    setAnswers({});
    setInputValue('');
    setScore(0);
  };

  const currentQuestion = questions[questionIndex];
  const isEligible = score >= 5;

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
            background: linear-gradient(180deg, rgba(10, 18, 38, 0.60), rgba(5, 10, 22, 0.50));
          }

          @keyframes cosmic-glow {
            0% {
              box-shadow: 
                0 25px 60px rgba(0, 0, 0, 0.45),
                0 0 30px rgba(209, 180, 140, 0.12),
                0 0 50px rgba(232, 212, 184, 0.05);
              border-color: rgba(209, 180, 140, 0.16);
            }
            50% {
              box-shadow: 
                0 35px 80px rgba(0, 0, 0, 0.6),
                0 0 50px rgba(209, 180, 140, 0.25),
                0 0 80px rgba(232, 212, 184, 0.15);
              border-color: rgba(209, 180, 140, 0.35);
            }
            100% {
              box-shadow: 
                0 25px 60px rgba(0, 0, 0, 0.45),
                0 0 30px rgba(209, 180, 140, 0.12),
                0 0 50px rgba(232, 212, 184, 0.05);
              border-color: rgba(209, 180, 140, 0.16);
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

          .chat-audio-btn.active {
            background: rgba(209,180,140,0.16);
            border-color: rgba(209,180,140,0.4);
            color: var(--accent-light);
          }

          .chat-messages {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 16px;
            overflow-y: auto;
            max-height: 460px;
            padding-right: 8px;
          }

          .message {
            display: flex;
            gap: 12px;
            max-width: 80%;
            animation: fadeIn 0.3s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
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
            background: rgba(209,180,140,0.16);
            color: var(--accent-light);
            border: 1px solid rgba(209,180,140,0.3);
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
            background: rgba(232, 212, 184, 0.92);
            border: 1px solid rgba(209, 180, 140, 0.5);
            border-radius: 999px;
            padding: 0 20px;
            color: #07101F;
            font-family: inherit;
            font-size: 14px;
            font-weight: 500;
            outline: none;
            transition: all 0.2s ease;
          }

          .chat-input::placeholder {
            color: rgba(7, 16, 31, 0.5);
          }

          .chat-input:focus {
            background: #E8D4B8;
            border-color: #D1B48C;
            box-shadow: 0 0 18px rgba(209, 180, 140, 0.25);
          }

          .chat-submit {
            background: rgba(232, 212, 184, 0.92);
            border: 1px solid rgba(209, 180, 140, 0.5);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: #07101F;
            cursor: pointer;
            transition: all 0.2s ease;
            flex-shrink: 0;
          }

          .chat-submit:hover {
            background: #E8D4B8;
            border-color: #D1B48C;
            box-shadow: 0 0 18px rgba(209, 180, 140, 0.25);
          }

          .chat-submit:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .chat-actions {
            display: flex;
            gap: 12px;
            margin-top: 16px;
            justify-content: flex-end;
            flex-wrap: wrap;
          }

          .chat-options {
            display: flex;
            gap: 10px;
            margin-top: 16px;
            justify-content: flex-end;
            flex-wrap: wrap;
          }

          .option-btn {
            background: rgba(2, 6, 17, 0.45);
            border: 1px solid rgba(209, 180, 140, 0.35);
            color: #E8D4B8;
            padding: 10px 22px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .option-btn:hover {
            background: rgba(209,180,140,0.12);
            border-color: rgba(209,180,140,0.65);
          }

          .analysis-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            flex-grow: 1;
            text-align: center;
            padding: 40px 0;
          }

          .analysis-state h3 {
            font-family: 'Poppins', sans-serif;
            font-size: clamp(22px, 5vw, 32px);
            color: #D1B48C;
          }

          .analysis-state p {
            color: var(--text-muted);
          }

          .result-state {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 20px;
            padding: 40px 0;
          }

          .result-icon {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            margin-bottom: 8px;
          }

          .result-icon.success {
            background: rgba(34, 197, 94, 0.12);
            border: 1px solid rgba(34, 197, 94, 0.25);
            color: #4ADE80;
          }

          .result-icon.fail {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: var(--text-muted);
          }

          .result-state h3 {
            font-family: 'Poppins', sans-serif;
            font-size: clamp(24px, 5.5vw, 36px);
            color: #D1B48C;
          }

          .result-state p {
            max-width: 460px;
          }

          .result-actions {
            display: flex;
            gap: 12px;
            margin-top: 12px;
            flex-wrap: wrap;
            justify-content: center;
          }

          @media (max-width: 768px) {
            .chat-window {
              padding: 24px;
              min-height: 460px;
            }

            .chat-messages {
              max-height: 380px;
            }

            .message {
              max-width: 90%;
            }
          }

          @media (max-width: 480px) {
            .chat-window {
              padding: 20px;
              min-height: 420px;
              border-radius: 16px;
            }

            .chat-messages {
              max-height: 340px;
              gap: 12px;
            }

            .bubble {
              font-size: 13px;
              padding: 10px 14px;
            }

            .chat-input-area {
              margin-top: 16px;
            }

            .chat-options {
              gap: 8px;
            }

            .option-btn {
              padding: 9px 16px;
              font-size: 12px;
            }

            .chat-actions {
              gap: 10px;
            }

            .result-state p,
            .analysis-state p {
              font-size: 13px;
            }

            .result-actions {
              flex-direction: column;
              width: 100%;
            }

            .result-actions .btn-secondary,
            .result-actions .btn-primary {
              width: 100%;
            }
          }
        `}
      </style>
      <section id="chat-test" className="section section-glow" style={{paddingTop: '20px'}}>
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
                <button
                  className={`chat-audio-btn ${audioEnabled ? 'active' : ''}`}
                  onClick={() => setAudioEnabled(v => !v)}
                  title={audioEnabled ? 'Désactiver l\'audio' : 'Activer l\'audio'}
                >
                  <Volume2 size={16} />
                </button>
              </div>

              <div className="chat-messages" ref={messagesContainerRef}>
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

                {phase === 'analyzing' && (
                  <div className="analysis-state">
                    <Loader2 size={48} className="spin" style={{ animation: 'spin 1.2s linear infinite', color: 'var(--accent-light)' }} />
                    <h3>Analyse en cours...</h3>
                    <p>Nous évaluons vos réponses sur 16 critères juridiques.</p>
                  </div>
                )}

                {phase === 'result' && (
                  <div className="result-state">
                    <div className={`result-icon ${isEligible ? 'success' : 'fail'}`}>
                      {isEligible ? <Sparkles size={32} /> : <X size={32} />}
                    </div>
                    <h3>{isEligible ? 'Bonne nouvelle, vous êtes éligible !' : 'Pas de levier d\'action évident'}</h3>
                    <p>
                      {isEligible
                        ? `Votre dossier présente ${score} éléments favorables sur 16 critères. Nous recommandons une action rapide.`
                        : `D'après vos réponses (${score}/16), nous ne détectons pas suffisamment d'irrégularités pour engager une démarche.`}
                    </p>
                    <div className="result-actions">
                      <button className="btn-secondary" onClick={resetChat}>
                        <RotateCcw size={16} style={{marginRight: '8px'}} />
                        {isEligible ? 'Recommencer' : 'Recommencer le test'}
                      </button>
                      {isEligible && (
                        <button className="btn-primary" onClick={() => navigate('/offres')}>
                          Voir les offres
                        </button>
                      )}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {phase === 'welcome' && (
                <div className="chat-actions">
                  <button className="btn-secondary" onClick={() => startTest(false)}>
                    Lire
                  </button>
                  <button className="btn-primary" onClick={() => startTest(true)}>
                    <Volume2 size={16} style={{marginRight: '8px'}} />
                    Écouter
                  </button>
                </div>
              )}

              {phase === 'question' && currentQuestion && (
                <>
                  {currentQuestion.type === 'number' && (
                    <form className="chat-input-area" onSubmit={handleNumberSubmit}>
                      <input
                        type="number"
                        className="chat-input"
                        placeholder={currentQuestion.placeholder}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="chat-submit"
                        disabled={!inputValue || isNaN(inputValue) || Number(inputValue) <= 0}
                      >
                        <ArrowRight size={18} />
                      </button>
                    </form>
                  )}

                  {currentQuestion.type === 'choice' && (
                    <div className="chat-options">
                      {currentQuestion.options.map(opt => (
                        <button key={opt} className="option-btn" onClick={() => handleAnswer(opt)}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {currentQuestion.type === 'yesno' && (
                    <div className="chat-options">
                      <button className="option-btn" onClick={() => handleAnswer('Oui')}>Oui</button>
                      <button className="option-btn" onClick={() => handleAnswer('Non')}>Non</button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractiveChat;
