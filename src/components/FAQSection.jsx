import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: 'Le test est-il vraiment gratuit ?',
      a: 'Oui. Le test sert à vérifier si votre situation semble entrer dans le périmètre Droit Habitat et quelle voie peut être envisagée ensuite.'
    },
    {
      q: 'Êtes-vous avocats ?',
      a: "Non. Droit Habitat n'est pas un cabinet d'avocats. Notre rôle est de qualifier, structurer et préparer le dossier. Si une intervention avocat devient nécessaire, un relais peut être organisé avec un avocat partenaire."
    },
    {
      q: 'Garantissez-vous l\'annulation du crédit ?',
      a: 'Non. Nous ne garantissons pas l\'annulation d\'un crédit. Nous faisons ressortir les irrégularités potentielles, structurons les preuves et préparons un dossier exploitable pour agir par la bonne voie.'
    },
    {
      q: 'Que se passe-t-il si mon dossier est incomplet ?',
      a: 'Nous identifions les pièces manquantes et vous demandons les compléments utiles. Plus le dossier est complet, plus l\'analyse peut être exploitable.'
    },
    {
      q: 'Que contient l\'offre à 99 EUR ?',
      a: 'L\'offre 1 comprend l\'analyse du dossier après signature, la chronologie structurée, les irrégularités potentielles, un mémoire structuré, un dossier PDF exploitable et un courrier prêt à envoyer.'
    },
    {
      q: 'Que se passe-t-il s\'il n\'y a pas matière à agir ?',
      a: 'Vous recevez une explication claire des limites identifiées à ce stade, ainsi que les éléments manquants ou les raisons pour lesquelles le dossier ne semble pas exploitable.'
    }
  ];

  return (
    <>
      <style>
        {`
          .faq-container {
            max-width: 720px;
            margin: 40px auto 0;
          }

          .accordion-item {
            border-bottom: 1px solid rgba(255,255,255,.12);
            padding: 24px 0;
          }

          .accordion-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            color: #fff;
            font-weight: 500;
            cursor: pointer;
            background: transparent;
            border: none;
            width: 100%;
            text-align: left;
            padding: 0;
          }

          .accordion-icon {
            color: var(--text-muted);
            transition: color 0.2s;
          }

          .accordion-title:hover .accordion-icon {
            color: #fff;
          }

          .accordion-content {
            color: var(--text-muted);
            font-size: 15px;
            margin-top: 16px;
            line-height: 1.6;
            display: none;
          }

          .accordion-content.open {
            display: block;
            animation: fadeIn 0.3s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 480px) {
            .accordion-item {
              padding: 18px 0;
            }

            .accordion-title {
              font-size: 14px;
              gap: 16px;
            }

            .accordion-content {
              font-size: 13px;
            }
          }
        `}
      </style>
      <section className="section section-tight">
        <div className="container">
          <div className="section-heading centered">
            <h2>Questions fréquentes</h2>
          </div>

          <div className="faq-container">
            {faqs.map((faq, idx) => (
              <div key={idx} className="accordion-item">
                <button 
                  className="accordion-title" 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                >
                  {faq.q}
                  <span className="accordion-icon">
                    {openIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div className={`accordion-content ${openIdx === idx ? 'open' : ''}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
