import { useNavigate } from 'react-router-dom';
import { Check, ShieldCheck, Sparkles, Lock, RefreshCcw } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OffersPage = () => {
  const navigate = useNavigate();

  const benefits = [
    'Analyse IA complète',
    'Rapport PDF mémoire',
    'Pack de preuves ordonnées',
    'Recommandations stratégiques'
  ];

  return (
    <>
      <style>
        {`
          .offers-hero {
            padding: 140px 0 80px;
            text-align: center;
          }

          .offers-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 999px;
            background: rgba(34, 197, 94, 0.12);
            border: 1px solid rgba(34, 197, 94, 0.25);
            color: #4ADE80;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 24px;
          }

          .offers-heading h1 {
            font-size: clamp(40px, 5vw, 64px);
            margin-bottom: 16px;
            color: #D1B48C;
          }

          .offers-heading p {
            max-width: 520px;
            margin: 0 auto;
          }

          .offers-grid {
            display: grid;
            grid-template-columns: minmax(0, 420px);
            justify-content: center;
            gap: 32px;
            margin-top: 48px;
          }

          .offer-card {
            padding: 40px 32px;
            text-align: left;
          }

          .offer-card:hover {
            transform: translateY(-6px);
          }

          .offer-name {
            font-size: 24px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 8px;
          }

          .offer-price {
            font-size: clamp(36px, 8vw, 48px);
            font-weight: 700;
            color: #fff;
            line-height: 1;
            margin-bottom: 8px;
          }

          .offer-price span {
            font-size: 18px;
            font-weight: 500;
            color: var(--text-muted);
          }

          .offer-desc {
            margin-bottom: 28px;
          }

          .offer-benefits {
            list-style: none;
            padding: 0;
            margin: 0 0 32px;
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .offer-benefits li {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            color: var(--text-main);
          }

          .offer-benefits .check {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: rgba(34, 197, 94, 0.15);
            color: #4ADE80;
            display: grid;
            place-items: center;
            flex-shrink: 0;
          }

          .guarantee {
            display: flex;
            gap: 14px;
            padding: 20px;
            border-radius: 12px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.06);
            margin-bottom: 28px;
            flex-wrap: wrap;
          }

          .guarantee-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: rgba(209,180,140,0.12);
            color: var(--accent-light);
            display: grid;
            place-items: center;
            flex-shrink: 0;
          }

          .guarantee h4 {
            font-size: 15px;
            color: #fff;
            margin-bottom: 4px;
          }

          .guarantee p {
            font-size: 13px;
            line-height: 1.55;
          }

          .offer-cta {
            width: 100%;
          }

          .secure-note {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 16px;
            font-size: 12px;
            color: var(--text-soft);
          }

          @media (max-width: 480px) {
            .offers-hero {
              padding: 120px 0 60px;
            }

            .offer-card {
              padding: 28px 20px;
            }

            .offer-name {
              font-size: 20px;
            }

            .offer-benefits li {
              font-size: 13px;
            }

            .guarantee {
              padding: 16px;
              gap: 12px;
            }

            .guarantee h4 {
              font-size: 14px;
            }

            .guarantee p {
              font-size: 12px;
            }
          }
        `}
      </style>

      <div className="app-wrapper">
        <Navbar />
        <main>
          <section className="offers-hero section-tight">
            <div className="container">
              <div className="offers-badge">
                <Sparkles size={14} />
                Éligibilité confirmée
              </div>
              <div className="offers-heading">
                <h1>Choisissez votre offre</h1>
                <p>Un accompagnement adapté à chaque étape de votre dossier.</p>
              </div>

              <div className="offers-grid">
                <div className="glass-card offer-card">
                  <div className="offer-name">Diagnostic</div>
                  <div className="offer-price">99 <span>€</span></div>
                  <p className="offer-desc">Mémoire + Pack de preuves structuré pour agir seul.</p>

                  <ul className="offer-benefits">
                    {benefits.map((b, i) => (
                      <li key={i}>
                        <span className="check"><Check size={12} strokeWidth={3} /></span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="guarantee">
                    <div className="guarantee-icon">
                      <RefreshCcw size={18} />
                    </div>
                    <div>
                      <h4>Satisfait ou remboursé</h4>
                      <p>Si vous n'êtes pas satisfait de votre rapport dans les 7 jours suivant la réception, nous vous remboursons intégralement. Sans justification.</p>
                    </div>
                  </div>

                  <button
                    className="btn-primary offer-cta"
                    onClick={() => navigate('/paiement?offre=diagnostic')}
                  >
                    <Lock size={16} style={{ marginRight: '8px' }} />
                    Choisir cette offre
                  </button>

                  <div className="secure-note">
                    <ShieldCheck size={14} />
                    Paiement sécurisé — Certification PCI DSS
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OffersPage;
