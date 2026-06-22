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

          .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #6EA8FF;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            margin-bottom: 24px;
            background: rgba(37, 99, 255, 0.1);
            padding: 6px 16px;
            border-radius: 999px;
            border: 1px solid rgba(37, 99, 255, 0.2);
            box-shadow: 0 0 15px rgba(37, 99, 255, 0.1);
          }

          .eyebrow-dot {
            width: 6px;
            height: 6px;
            background-color: #2563FF;
            border-radius: 50%;
            box-shadow: 0 0 8px #2563FF;
          }

          .hero-content h1 {
            font-size: clamp(48px, 6.5vw, 76px);
            line-height: 1.0;
            letter-spacing: -0.035em;
            margin-bottom: 24px;
            font-family: 'Cormorant Garamond', serif;
            color: #F4F7FF;
          }

          .hero-content h1 span {
            color: #6EA8FF;
            background: linear-gradient(135deg, #6EA8FF 0%, #2563FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
            background: rgba(10, 18, 38, 0.75);
            border: 1px solid rgba(255, 75, 75, 0.25);
            border-radius: 10px;
            padding: 10px 18px;
            font-size: 13px;
            font-weight: 600;
            color: #F4F7FF;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 75, 75, 0.2);
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
            background-color: #FF4B4B;
            box-shadow: 0 0 10px #FF4B4B;
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
                linear-gradient(to bottom, rgba(2, 6, 17, 0.95) 40%, rgba(2, 6, 17, 0.8) 70%, #020611 100%),
                url('/person-img.jpeg');
              background-position: center top;
              padding-top: 120px;
              min-height: auto;
            }

            .hero-container {
              padding: 0 20px;
              margin-top: 0;
            }

            .hero-content {
              max-width: 100%;
              text-align: center;
              align-items: center;
            }

            .hero-content p {
              margin-inline: auto;
            }

            .hero-actions {
              justify-content: center;
              width: 100%;
            }

            .social-proof {
              flex-direction: column;
              gap: 8px;
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
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Nouvelle génération
            </div>
            <h1>Le crédit vous<br /><span>étouffe ?</span></h1>
            <p>
              Droit Habitat transforme la complexité du crédit en solutions concrètes et actionnables.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                Obtenir mon rapport automatisé <ArrowRight size={16} style={{ marginLeft: '8px' }} />
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
      </section>
    </>
  );
};

export default HeroSection;
