import React from 'react';

const TestimonialsSection = () => {
  const row1 = [
    {
      name: 'Marc Dubois',
      role: 'Client - Crédit Auto',
      text: "Grâce à Droit Habitat, j'ai pu faire analyser mon crédit auto. Ils ont détecté des irrégularités majeures et j'ai été remboursé de plus de 3 200 € !",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Sophie Lambert',
      role: 'Client - Prêt Conso',
      text: "La plateforme est d'une simplicité enfantine. En 2 minutes, le diagnostic était posé. Les experts ont ensuite pris les choses en main avec un succès total.",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Thomas Martin',
      role: 'Courtier - Partenaire',
      text: "Je recommande vivement. Taux de réussite impressionnant et accompagnement de A à Z. Mon conseiller attitré a été formidable tout au long de la procédure.",
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Camille Roussel',
      role: 'Client - Litige Banque',
      text: "Un gain de temps incroyable. J'étais noyée sous la paperasse avec ma banque. Droit Habitat a tout pris en charge et réglé la situation en un temps record.",
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
    }
  ];

  const row2 = [
    {
      name: 'Antoine Voisin',
      role: 'Client - Crédit Conso',
      text: "Enfin un service honnête, rapide et transparent. L'IA est bluffante de précision. Une vraie révolution dans la gestion des litiges financiers.",
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Elodie Perez',
      role: 'Client - Prêt Travaux',
      text: "Très sceptique au début, mais les résultats sont là : 4 500 € récupérés sur mon prêt travaux grâce à leurs analyses minutieuses. Merci !",
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Karim Bensalah',
      role: 'CGP - Partenaire',
      text: "Un service client réactif et extrêmement professionnel. Le rapport d'anomalies détaillé m'a permis de négocier sereinement face à ma banque.",
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Sarah Dupuis',
      role: 'Client - Crédit Auto',
      text: "Une équipe d'experts à l'écoute et très rigoureuse. La procédure a été rapide, transparente, et sans aucun frais caché. Je recommande !",
      avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&q=80'
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
            border: 1px solid rgba(120, 170, 255, 0.1);
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
            border-color: rgba(120, 170, 255, 0.3);
            transform: translateY(-4px) scale(1.01);
            background: rgba(10, 18, 38, 0.65);
          }

          .testimonial-text {
            font-size: 14px;
            line-height: 1.65;
            color: rgba(226, 232, 255, 0.8);
            margin-bottom: 24px;
          }

          .testimonial-user {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .testimonial-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(120, 170, 255, 0.25);
          }

          .user-info {
            display: flex;
            flex-direction: column;
          }

          .user-name {
            font-size: 14px;
            font-weight: 600;
            color: #fff;
          }

          .user-role {
            font-size: 11px;
            color: rgba(226, 232, 255, 0.45);
            margin-top: 1px;
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
          }
        `}
      </style>
      <section className="testimonials-section section-glow">
        <div className="container">
          <div className="section-heading centered">
            <h2>Ce Que Disent Nos Clients</h2>
            <p>Découvrez comment nos clients transforment leur situation grâce à des solutions avancées.</p>
          </div>
        </div>

        <div className="marquee-container">
          {/* Row 1: Scrolling Left */}
          <div className="marquee-track scroll-left">
            {/* Render items twice for seamless infinite loop */}
            {[...row1, ...row1].map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-text">"{t.text}"</div>
                <div className="testimonial-user">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div className="user-info">
                    <span className="user-name">{t.name}</span>
                    <span className="user-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="marquee-track scroll-right">
            {[...row2, ...row2].map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-text">"{t.text}"</div>
                <div className="testimonial-user">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div className="user-info">
                    <span className="user-name">{t.name}</span>
                    <span className="user-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
