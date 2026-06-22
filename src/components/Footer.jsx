import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>
        {`
          .cta-section {
            padding: 100px 0;
            text-align: center;
            position: relative;
          }

          .cta-content {
            max-width: 600px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

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
            font-family: 'Cormorant Garamond', serif;
            font-size: 24px;
            font-weight: 600;
            color: #fff;
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
            .footer-grid {
              grid-template-columns: 1fr;
            }
            .footer-bottom {
              flex-direction: column;
              gap: 16px;
              text-align: center;
            }
          }
        `}
      </style>

      {/* CTA Section */}
      <section className="cta-section section-glow">
        <div className="container">
          <div className="cta-content">
            <h2 style={{marginBottom: '32px'}}>Prêt à savoir si votre dossier vaut le coup ?</h2>
            <button className="btn-primary" onClick={scrollToTop}>
              Faire le test gratuit — ça prend 2 min
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="/" className="footer-brand" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '16px' }}>
                <img src="/logo.svg" alt="DroitHabitat" style={{ height: '30px', width: 'auto' }} />
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
                <a href="#">LinkedIn</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
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
