import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      <style>
        {`
          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            padding: 100px 0 100px;
            background-image: 
              linear-gradient(to right, #020611 25%, rgba(2, 6, 17, 0.7) 50%, rgba(2, 6, 17, 0.2) 75%, rgba(2, 6, 17, 0.8) 100%),
              url('/person-img.jpeg');
            background-size: cover;
            background-position: center right;
            background-repeat: no-repeat;
            overflow: hidden;
          }

          /* Adding a subtle bottom fade to blend with the next section */
          .hero::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 150px;
            background: linear-gradient(to top, #020611, transparent);
            pointer-events: none;
            z-index: 2;
          }

          .hero-container {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0 40px 0 6%;
            z-index: 10;
            position: relative;
            margin-top: -40px; /* Shifts text and inner elements up */
          }

          .hero-content {
            max-width: 580px;
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-top {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-bottom {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }

          .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #E8D4B8;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            margin-bottom: 24px;
            background: rgba(209, 180, 140, 0.1);
            padding: 6px 16px;
            border-radius: 999px;
            border: 1px solid rgba(209, 180, 140, 0.25);
            box-shadow: 0 0 15px rgba(209, 180, 140, 0.1);
          }

          .eyebrow-dot {
            width: 6px;
            height: 6px;
            background-color: #D1B48C;
            border-radius: 50%;
            box-shadow: 0 0 8px #D1B48C;
          }

          .hero-content h1 {
            font-size: clamp(34px, 6.5vw, 76px);
            line-height: 1.05;
            letter-spacing: -0.035em;
            margin-bottom: 24px;
          }

          @media (max-width: 480px) {
            .hero-content h1 {
              font-size: clamp(28px, 10vw, 34px);
            }
          }

          .hero-content p {
            font-size: 17px;
            line-height: 1.6;
            color: rgba(226, 232, 255, 0.8);
            margin-bottom: 36px;
            max-width: 480px;
          }

          .hero-actions {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 40px;
          }

          /* Floating Glowing Tags */
          .floating-tag {
            position: absolute;
            background: rgba(2, 6, 17, 0.65);
            border: 1px solid rgba(209, 180, 140, 0.35);
            border-radius: 999px;
            padding: 10px 20px;
            font-size: 12px;
            font-weight: 600;
            color: #E8D4B8;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(209, 180, 140, 0.12);
            backdrop-filter: blur(8px);
            z-index: 5;
            white-space: nowrap;
            pointer-events: none;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }

          .tag-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }

          .tag-dot.red {
            background-color: #D1B48C;
            box-shadow: 0 0 10px #D1B48C;
          }

          /* Floating animations */
          @keyframes float-1 {
            0% { transform: translateY(0px) rotate(0deg); }
            100% { transform: translateY(-12px) rotate(1.5deg); }
          }
          @keyframes float-2 {
            0% { transform: translateY(0px) rotate(0deg); }
            100% { transform: translateY(-8px) rotate(-1deg); }
          }
          @keyframes float-3 {
            0% { transform: translateY(0px) rotate(0deg); }
            100% { transform: translateY(-15px) rotate(2deg); }
          }

          /* Positions for tags - Adjusted closer to the left content area */
          .tag-1 { top: 18%; left: 33%; animation: float-1 5s ease-in-out infinite alternate; }
          .tag-2 { top: 32%; left: 38%; animation: float-2 6s ease-in-out infinite alternate; }
          .tag-3 { top: 46%; left: 34%; animation: float-3 7s ease-in-out infinite alternate; }
          .tag-4 { top: 60%; left: 39%; animation: float-1 5.5s ease-in-out infinite alternate; }
          .tag-5 { top: 74%; left: 29%; animation: float-2 6.5s ease-in-out infinite alternate; }

          .social-proof {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .avatar-group {
            display: flex;
            align-items: center;
          }

          .avatar-group img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid #020611;
            margin-left: -8px;
            object-fit: cover;
          }

          .avatar-group img:first-child {
            margin-left: 0;
          }

          .social-proof-text {
            font-size: 13px;
            color: rgba(226, 232, 255, 0.6);
            font-weight: 500;
          }

          .social-proof-text span {
            color: #F4F7FF;
            font-weight: 600;
          }

          @media (max-width: 1024px) {
            .floating-tag {
              display: none; /* Hide floating cards on tablet/mobile to keep it clean */
            }
          }

          @media (max-width: 768px) {
            .hero {
              background-image: 
                linear-gradient(to bottom, rgba(2, 6, 17, 0.82) 20%, rgba(2, 6, 17, 0.45) 45%, rgba(2, 6, 17, 0.75) 75%, #020611 100%),
                url('/hero-mobile.jpg');
              background-position: center 10%;
              background-size: 140% auto;
              padding-top: 120px;
              padding-bottom: 40px;
              min-height: 100vh;
              justify-content: flex-start;
            }

            .hero-container {
              padding: 0 20px;
              margin-top: 0;
              flex-grow: 1;
              display: flex;
              align-items: stretch;
            }

            .hero-content {
              max-width: 100%;
              text-align: center;
              align-items: center;
              width: 100%;
              justify-content: space-between;
              min-height: calc(100vh - 160px);
            }

            .hero-top {
              align-items: center;
            }

            .hero-bottom {
              align-items: center;
              gap: 20px;
            }

            .hero-content p {
              margin-inline: auto;
              font-size: 15px;
              margin-bottom: 0;
            }

            .hero-actions {
              justify-content: center;
              width: 100%;
              margin-bottom: 0;
            }

            .social-proof {
              flex-direction: column;
              gap: 8px;
            }

            .eyebrow {
              margin-bottom: 16px;
              font-size: 10px;
              padding: 5px 12px;
            }
          }
        `}
      </style>
      <section className="hero">
        {/* Floating tags - Reduced to 5, made larger, closer to text */}
        <div className="floating-tag tag-1">
          <span className="tag-dot red"></span>
          Taux d'intérêt trop élevés
        </div>
        <div className="floating-tag tag-2">
          <span className="tag-dot red"></span>
          Crédits immobiliers
        </div>
        <div className="floating-tag tag-3">
          <span className="tag-dot red"></span>
          Dettes multiples
        </div>
        <div className="floating-tag tag-4">
          <span className="tag-dot red"></span>
          Assurances coûteuses
        </div>
        <div className="floating-tag tag-5">
          <span className="tag-dot red"></span>
          Courriers envoyés
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-top">
              <h1>Le crédit vous<br /><span>étouffe ?</span></h1>
              <p>
                Droit Habitat transforme la complexité du crédit en solutions concrètes et actionnables.
              </p>
            </div>
            <div className="hero-bottom">
              <div className="hero-actions">
                <button className="btn-cta" onClick={() => document.getElementById('chat-test')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                  Faire le test gratuit <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </button>
              </div>
              <div className="social-proof">
                <div className="avatar-group">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User 1" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User 2" />
                  <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" alt="User 3" />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="User 4" />
                </div>
                <div className="social-proof-text">
                  <span>+250 professionnels</span> nous font déjà confiance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
