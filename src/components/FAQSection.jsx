import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: 'Le test est-il vraiment gratuit ?',
      a: 'Oui, et il le restera.'
    },
    {
      q: 'Combien coûte une médiation ?',
      a: 'Le prix vous est révélé après le test, si vous êtes éligible.'
    },
    {
      q: 'Puis-je agir seul après le diagnostic ?',
      a: 'Absolument. Le pack de preuves est conçu pour ça.'
    },
    {
      q: 'Qu\'est-ce qui rend mon dossier éligible ?',
      a: 'Démarchage, vente à domicile, délais non respectés...'
    },
    {
      q: 'Combien de temps dure une médiation ?',
      a: 'En moyenne 3 à 6 semaines.'
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
