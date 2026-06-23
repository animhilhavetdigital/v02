import React from 'react';
import { LayoutDashboard, FileSpreadsheet, FolderKanban, Users, BarChart3, Settings, Clock, Star, TrendingUp } from 'lucide-react';

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
            max-width: 100%;
            margin: 0;
            padding: 0 40px 0 6%;
            position: relative;
            z-index: 10;
          }

          .results-grid {
            display: grid;
            grid-template-columns: 1fr 1.8fr;
            gap: 30px;
            align-items: center;
            width: 100%;
          }

          .results-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            min-width: 280px;
          }

          .results-left .eyebrow {
            margin-bottom: 16px;
            color: rgba(226, 232, 255, 0.45);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
          }

          .results-left h2 {
            font-size: clamp(36px, 4.5vw, 54px);
            line-height: 1.1;
            margin-bottom: 20px;
          }

          .results-title-line {
            display: block;
          }

          .results-left p {
            font-size: 16px;
            line-height: 1.65;
            color: rgba(226, 232, 255, 0.7);
            margin-bottom: 28px;
            max-width: 440px;
          }

          .stats-card {
            display: inline-flex;
            align-items: center;
            gap: 14px;
            background: rgba(2, 6, 17, 0.55);
            border: 1px solid rgba(209, 180, 140, 0.35);
            border-radius: 999px;
            padding: 10px 20px 10px 12px;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 20px rgba(209, 180, 140, 0.06);
          }

          .avatar-row {
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }

          .avatar-row img {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 2px solid #020611;
            margin-left: -10px;
            object-fit: cover;
          }

          .avatar-row img:first-child {
            margin-left: 0;
          }

          .avatar-more {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #fff;
            display: grid;
            place-items: center;
            font-size: 13px;
            font-weight: 600;
            margin-left: -10px;
          }

          .stats-info {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .stats-rating {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 18px;
            font-weight: 700;
            color: #fff;
          }

          .stats-stars {
            display: flex;
            align-items: center;
            gap: 2px;
            color: #D1B48C;
          }

          .stats-label {
            font-size: 13px;
            color: rgba(226, 232, 255, 0.6);
          }

          /* Glowing Image Container */
          .glowing-image-container {
            position: relative;
            width: 100%;
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid rgba(209, 180, 140, 0.2);
            box-shadow: 0 30px 70px rgba(0,0,0,0.6), 0 0 50px rgba(209,180,140,0.22);
            background: rgba(6, 11, 24, 0.4);
            backdrop-filter: blur(10px);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .glowing-image-container:hover {
            transform: translateY(-4px);
            box-shadow: 0 35px 80px rgba(0,0,0,0.7), 0 0 60px rgba(209,180,140,0.40);
            border-color: rgba(209, 180, 140, 0.35);
          }

          .glowing-image {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
          }

          @media (max-width: 900px) {
            .results-container {
              padding: 0 20px;
            }

            .results-grid {
              grid-template-columns: 1fr;
              gap: 48px;
            }

            .results-left {
              align-items: center;
              text-align: center;
              min-width: auto;
            }

            .results-left p {
              max-width: 100%;
            }

            .stats-card {
              margin: 0 auto;
            }
          }

          @media (max-width: 480px) {
            .results-section {
              padding: 72px 0;
            }

            .results-left h2 {
              font-size: clamp(26px, 8vw, 34px);
            }

            .results-left p {
              font-size: 14px;
              margin-bottom: 24px;
            }

            .results-title-line {
              display: inline;
            }

            .stats-card {
              padding: 8px 14px 8px 10px;
              gap: 10px;
            }

            .avatar-row img,
            .avatar-more {
              width: 32px;
              height: 32px;
              margin-left: -8px;
            }

            .stats-rating {
              font-size: 15px;
            }

            .stats-stars svg {
              width: 12px;
              height: 12px;
            }

            .stats-label {
              font-size: 11px;
            }

            .glowing-image-container {
              border-radius: 16px;
            }
          }
        `}
      </style>
      <section className="results-section">
        <div className="results-container">
          <div className="results-grid">
            
            <div className="results-left">
              <div className="eyebrow">La confiance des professionnels</div>
              <h2><span className="results-title-line">Des résultats concrets</span><span className="results-title-line">pour votre activité</span></h2>
              <p>
                Droit Habitat, la plateforme de référence des courtiers, CGP et professionnels du crédit habitat.
              </p>
              
              <div className="stats-card">
                <div className="avatar-row">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User 1" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User 2" />
                </div>
                <div className="stats-info">
                  <div className="stats-rating">
                    4.9/5
                    <span className="stats-stars">
                      <Star size={14} fill="#D1B48C" />
                      <Star size={14} fill="#D1B48C" />
                      <Star size={14} fill="#D1B48C" />
                      <Star size={14} fill="#D1B48C" />
                      <Star size={14} fill="#D1B48C" />
                    </span>
                  </div>
                  <div className="stats-label">+1 500 professionnels nous font confiance</div>
                </div>
              </div>
            </div>

            <div className="results-right">
              <div className="glowing-image-container">
                <img src="/hero-img.png" alt="Tableau de bord" className="glowing-image" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MethodSection;
