import React from 'react';

const TestimonialsSection = () => {
  const row1 = [
    {
      text: "Je pensais surtout qu'il était trop tard. J'avais besoin de comprendre ce que j'avais signé et quoi faire ensuite.",
      author: "Retour utilisateur"
    },
    {
      text: "Grâce à Droit Habitat, j'ai pu faire analyser mon crédit conso. Ils ont détecté des irrégularités majeures !",
      author: "Retour utilisateur"
    },
    {
      text: "La plateforme est d'une simplicité enfantine. En 2 minutes, le diagnostic était posé.",
      author: "Retour utilisateur"
    },
    {
      text: "Je ne cherchais pas une promesse miracle. Je voulais un dossier clair, des preuves en ordre et une direction.",
      author: "Retour utilisateur"
    }
  ];

  const row2 = [
    {
      text: "Entre le vendeur, l'organisme de crédit, les courriers et les prélèvements, je ne savais plus où regarder. Le dossier a remis de l'ordre.",
      author: "Retour utilisateur"
    },
    {
      text: "Enfin un service honnête, rapide et transparent. L'IA est bluffante de précision.",
      author: "Retour utilisateur"
    },
    {
      text: "Un gain de temps incroyable. J'étais noyée sous la paperasse avec ma banque.",
      author: "Retour utilisateur"
    },
    {
      text: "Une équipe d'experts à l'écoute et très rigoureuse. La procédure a été rapide et transparente.",
      author: "Retour utilisateur"
    }
  ];

  return (
    <>
      <style>
        {`
          .testimonials-section {
            padding: 100px 0;
            position: relative;
            background: #020611;
            overflow: hidden;
          }

          .marquee-container {
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-top: 60px;
            padding: 10px 0;
          }

          .marquee-track {
            display: flex;
            width: max-content;
            gap: 24px;
          }

          .marquee-track.scroll-left {
            animation: scroll-left 38s linear infinite;
          }

          .marquee-track.scroll-right {
            animation: scroll-right 38s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .testimonial-card {
            width: 380px;
            background: rgba(10, 18, 38, 0.45);
            border: 1px solid rgba(209, 180, 140, 0.15);
            border-radius: 20px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(10px);
            flex-shrink: 0;
            transition: all 0.3s ease;
          }

          .testimonial-card:hover {
            border-color: rgba(209, 180, 140, 0.4);
            transform: translateY(-4px) scale(1.01);
            background: rgba(10, 18, 38, 0.6);
          }

          .testimonial-text {
            font-size: 14.5px;
            line-height: 1.65;
            color: rgba(226, 232, 255, 0.85);
            font-style: italic;
            margin-bottom: 20px;
          }

          .testimonial-author {
            font-size: 11.5px;
            font-weight: 600;
            color: #D1B48C;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .confidence-line {
            text-align: center;
            font-size: 14.5px;
            color: rgba(226, 232, 255, 0.7);
            font-weight: 500;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            padding-top: 30px;
            margin-top: 60px;
            letter-spacing: 0.02em;
          }

          .confidence-line span {
            color: #D1B48C;
            font-weight: 600;
          }

          /* Left and Right blur overlays to fade out marquee edges */
          .marquee-container::before,
          .marquee-container::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 150px;
            z-index: 10;
            pointer-events: none;
          }

          .marquee-container::before {
            left: 0;
            background: linear-gradient(to right, #020611, transparent);
          }

          .marquee-container::after {
            right: 0;
            background: linear-gradient(to left, #020611, transparent);
          }

          @media (max-width: 768px) {
            .marquee-container::before,
            .marquee-container::after {
              width: 50px;
            }

            .testimonial-card {
              width: 320px;
              padding: 22px;
            }

            .testimonial-text {
              font-size: 13px;
            }

            .testimonials-section {
              padding: 72px 0;
            }
          }

          @media (max-width: 480px) {
            .testimonial-card {
              width: 280px;
              padding: 20px;
              border-radius: 16px;
            }

            .testimonial-text {
              font-size: 12px;
              margin-bottom: 18px;
            }

            .testimonial-author {
              font-size: 10px;
            }
          }
        `}
      </style>
      <section className="testimonials-section section-glow">
        <div className="container">
          <div className="section-heading centered">
            <h2>Vous n'êtes pas seul à vivre ça</h2>
            <p style={{ maxWidth: '720px', margin: '16px auto 0' }}>
              La plupart des personnes qui arrivent ici ne cherchent pas un grand discours. Elles veulent comprendre ce qu'elles ont signé, ce qui est encore possible et comment arrêter de subir seules.
            </p>
          </div>
        </div>

        <div className="marquee-container">
          {/* Row 1: Scrolling Left */}
          <div className="marquee-track scroll-left">
            {[...row1, ...row1].map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-text">"{t.text}"</div>
                <div className="testimonial-author">{t.author}</div>
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="marquee-track scroll-right">
            {[...row2, ...row2].map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-text">"{t.text}"</div>
                <div className="testimonial-author">{t.author}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="confidence-line">
            <span>Clarté, méthode, cadre et orientation.</span> Pas de promesse excessive.
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
