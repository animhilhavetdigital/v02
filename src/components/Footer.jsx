import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import CTASection from './CTASection';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>
        {`
          .footer {
            border-top: 1px solid rgba(255,255,255,0.06);
            padding: 80px 0 40px;
            background: #020611;
          }

          .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 60px;
            margin-bottom: 80px;
          }

          .footer-brand {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 600;
            color: #D1B48C;
            margin-bottom: 16px;
            display: block;
          }

          .footer-tagline {
            color: var(--text-muted);
            font-size: 14px;
            line-height: 1.6;
            max-width: 300px;
          }

          .footer-col h4 {
            color: #fff;
            font-weight: 600;
            margin-bottom: 24px;
            font-size: 15px;
          }

          .footer-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .footer-links a {
            color: var(--text-muted);
            font-size: 14px;
            transition: color 0.2s;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .footer-links a:hover {
            color: #fff;
          }

          .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 32px;
            border-top: 1px solid rgba(255,255,255,0.06);
            color: var(--text-soft);
            font-size: 13px;
          }

          @media (max-width: 900px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 40px;
            }
          }

          @media (max-width: 600px) {
            .footer {
              padding: 60px 0 32px;
            }

            .footer-grid {
              grid-template-columns: 1fr;
              gap: 32px;
              text-align: center;
            }

            .footer-brand {
              display: inline-flex;
              margin-bottom: 12px;
            }

            .footer-tagline {
              max-width: 100%;
              font-size: 13px;
            }

            .footer-col h4 {
              margin-bottom: 16px;
            }

            .footer-links a {
              justify-content: center;
            }

            .footer-bottom {
              flex-direction: column;
              gap: 16px;
              text-align: center;
            }
          }
        `}
      </style>

      <CTASection />

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="/" className="footer-brand" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '16px' }}>
                <img src="/Frame 1000001360.svg" alt="DroitHabitat" style={{ height: '30px', width: 'auto' }} />
              </a>
              <p className="footer-tagline">
                La solution experte pour analyser et agir sur vos litiges de crédit à la consommation.
              </p>
            </div>
            
            <div className="footer-col">
              <h4>Liens utiles</h4>
              <div className="footer-links">
                <a href="/">Comment ça marche</a>
                <a href="/faq">FAQ</a>
                <a href="/contact">Contact</a>
                <a href="/legal">Mentions légales</a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Nous contacter</h4>
              <div className="footer-links">
                <a href="mailto:contact@droithabitat.fr">
                  <Mail size={16} /> contact@droithabitat.fr
                </a>
                <a href="tel:+33123456789">
                  <Phone size={16} /> +33 1 23 45 67 89
                </a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Suivez-nous</h4>
              <div className="footer-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} DroitHabitat. Tous droits réservés.</div>
            <button 
              onClick={scrollToTop} 
              style={{background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'}}
            >
              Retour en haut <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
