import React from 'react';
import { BrainCircuit, TrendingUp, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  return (
    <>
      <style>
        {`
          .section-heading.centered {
            text-align: center;
            margin-bottom: 70px;
          }

          .section-heading p {
            margin: 16px auto 0;
            max-width: 600px;
          }

          .process-wrapper {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
            gap: 15px;
            margin-top: 50px;
          }

          .process-step {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            flex: 1;
            min-width: 0;
          }

          .step-icon-box {
            width: 64px;
            height: 64px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            background: rgba(8, 15, 31, 0.60);
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
            flex-shrink: 0;
            transition: all 0.4s ease;
          }

          /* Glowing box borders and shadows */
          .step-icon-box.glow-blue {
            border-color: rgba(37, 99, 255, 0.35);
            box-shadow: 0 0 25px rgba(37, 99, 255, 0.15), inset 0 0 12px rgba(37, 99, 255, 0.1);
            color: #6EA8FF;
          }

          .step-icon-box.glow-cyan {
            border-color: rgba(6, 182, 212, 0.35);
            box-shadow: 0 0 25px rgba(6, 182, 212, 0.15), inset 0 0 12px rgba(6, 182, 212, 0.1);
            color: #22D3EE;
          }

          .step-icon-box.glow-green {
            border-color: rgba(34, 197, 94, 0.35);
            box-shadow: 0 0 25px rgba(34, 197, 94, 0.15), inset 0 0 12px rgba(34, 197, 94, 0.1);
            color: #4ADE80;
          }

          .process-step:hover .step-icon-box.glow-blue {
            border-color: rgba(37, 99, 255, 0.6);
            box-shadow: 0 0 35px rgba(37, 99, 255, 0.3), inset 0 0 15px rgba(37, 99, 255, 0.2);
            transform: translateY(-4px);
          }

          .process-step:hover .step-icon-box.glow-cyan {
            border-color: rgba(6, 182, 212, 0.6);
            box-shadow: 0 0 35px rgba(6, 182, 212, 0.3), inset 0 0 15px rgba(6, 182, 212, 0.2);
            transform: translateY(-4px);
          }

          .process-step:hover .step-icon-box.glow-green {
            border-color: rgba(34, 197, 94, 0.6);
            box-shadow: 0 0 35px rgba(34, 197, 94, 0.3), inset 0 0 15px rgba(34, 197, 94, 0.2);
            transform: translateY(-4px);
          }

          .step-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-top: 2px;
          }

          .step-number {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 2px;
          }

          .step-number.blue { color: #6EA8FF; }
          .step-number.cyan { color: #22D3EE; }
          .step-number.green { color: #4ADE80; }

          .step-title {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 6px;
          }

          .step-desc {
            font-size: 13px;
            color: rgba(226, 232, 255, 0.65);
            line-height: 1.5;
          }

          /* Connecting Line with Arrow */
          .step-connector {
            flex-shrink: 0;
            width: 50px;
            height: 1px;
            background: linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%);
            margin: 32px 10px 0;
            position: relative;
          }

          .step-connector::after {
            content: '';
            position: absolute;
            right: 0;
            top: -3px;
            width: 7px;
            height: 7px;
            border-top: 1px solid rgba(255,255,255,0.25);
            border-right: 1px solid rgba(255,255,255,0.25);
            transform: rotate(45deg);
          }

          @media (max-width: 991px) {
            .process-wrapper {
              flex-direction: column;
              gap: 40px;
              align-items: flex-start;
              padding-left: 10px;
            }

            .process-step {
              width: 100%;
            }

            .step-connector {
              display: none;
            }
          }
        `}
      </style>
      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <h2>Votre solution en 2 minutes</h2>
            <p>Notre test gratuit analyse instantanément votre dossier et vous dit si vous pouvez récupérer vos droits. Gratuit, sans engagement, 100% en ligne.</p>
          </div>
          
          <div className="process-wrapper">
            <div className="process-step">
              <div className="step-icon-box glow-blue">
                <BrainCircuit size={32} />
              </div>
              <div className="step-info">
                <span className="step-number blue">1</span>
                <h3 className="step-title">Analyse IA 2.0</h3>
                <p className="step-desc">Notre intelligence artificielle scanne votre contrat et identifie instantanément les failles juridiques exploitables.</p>
              </div>
            </div>

            <div className="step-connector"></div>
            
            <div className="process-step">
              <div className="step-icon-box glow-cyan">
                <TrendingUp size={32} />
              </div>
              <div className="step-info">
                <span className="step-number cyan">2</span>
                <h3 className="step-title">98% Taux de réussite</h3>
                <p className="step-desc">Pour les dossiers jugés éligibles par notre système, nous constatons un taux de succès exceptionnel (+12% par rapport à la moyenne).</p>
              </div>
            </div>

            <div className="step-connector"></div>
            
            <div className="process-step">
              <div className="step-icon-box glow-green">
                <CheckCircle size={32} />
              </div>
              <div className="step-info">
                <span className="step-number green">3</span>
                <h3 className="step-title">Expert : Dossier éligible</h3>
                <p className="step-desc">Obtenez une réponse claire et ferme sur la viabilité de votre dossier avant même d'engager la moindre démarche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionSection;
