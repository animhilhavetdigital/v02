import React from 'react';
import { Clock, AlertTriangle, FileCheck, Compass } from 'lucide-react';

const MethodSection = () => {
  return (
    <>
      <style>
        {`
          .results-section {
            padding: 100px 0;
            position: relative;
            background: #020611;
          }

          .results-container {
            width: 100%;
            max-width: 1120px;
            margin: 0 auto;
            padding: 0 20px;
            position: relative;
            z-index: 10;
          }

          .results-header {
            text-align: center;
            max-width: 720px;
            margin: 0 auto 60px;
          }

          .results-header h2 {
            font-size: clamp(32px, 4.5vw, 48px);
            margin-bottom: 20px;
            color: #D1B48C;
          }

          .results-header p {
            font-size: 16px;
            line-height: 1.65;
            color: rgba(226, 232, 255, 0.7);
          }

          .results-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            width: 100%;
          }

          .result-card {
            background: rgba(10, 18, 38, 0.45);
            border: 1px solid rgba(209, 180, 140, 0.15);
            border-radius: 20px;
            padding: 32px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            display: flex;
            gap: 20px;
            align-items: flex-start;
          }

          .result-card:hover {
            border-color: rgba(209, 180, 140, 0.4);
            transform: translateY(-4px);
            background: rgba(10, 18, 38, 0.6);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .result-card-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: rgba(209, 180, 140, 0.1);
            border: 1px solid rgba(209, 180, 140, 0.25);
            display: grid;
            place-items: center;
            color: #E8D4B8;
            flex-shrink: 0;
          }

          .result-card-content {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .result-card-title {
            font-size: 18px;
            font-weight: 600;
            color: #fff;
          }

          .result-card-desc {
            font-size: 14.5px;
            color: rgba(226, 232, 255, 0.65);
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .results-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .results-section {
              padding: 72px 0;
            }

            .result-card {
              padding: 24px;
              gap: 16px;
            }
          }
        `}
      </style>
      <section className="results-section">
        <div className="results-container">
          <div className="results-header">
            <h2>Ce que vous obtenez concrètement</h2>
            <p>Droit Habitat ne vend pas une promesse abstraite. Nous transformons une situation confuse en dossier lisible, structuré et exploitable.</p>
          </div>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-card-icon">
                <Clock size={24} />
              </div>
              <div className="result-card-content">
                <h3 className="result-card-title">Une chronologie claire</h3>
                <p className="result-card-desc">Vous comprenez enfin ce qui s'est passé, dans quel ordre, avec quels acteurs et quels documents.</p>
              </div>
            </div>

            <div className="result-card">
              <div className="result-card-icon">
                <AlertTriangle size={24} />
              </div>
              <div className="result-card-content">
                <h3 className="result-card-title">Des irrégularités potentielles identifiées</h3>
                <p className="result-card-desc">Défaut d'information, pression commerciale, vérification insuffisante, délai non respecté, documents manquants... nous faisons ressortir les points à examiner.</p>
              </div>
            </div>

            <div className="result-card">
              <div className="result-card-icon">
                <FileCheck size={24} />
              </div>
              <div className="result-card-content">
                <h3 className="result-card-title">Des preuves remises en ordre</h3>
                <p className="result-card-desc">Contrat, bon de commande, échéancier, relevés, e-mails, SMS, publicités, devis, photos : tout est trié pour redevenir exploitable.</p>
              </div>
            </div>

            <div className="result-card">
              <div className="result-card-icon">
                <Compass size={24} />
              </div>
              <div className="result-card-content">
                <h3 className="result-card-title">Un plan de suite lisible</h3>
                <p className="result-card-desc">Vous savez quoi faire ensuite : agir seul avec un dossier propre, demander une médiation ou préparer un relais avocat si nécessaire.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MethodSection;
