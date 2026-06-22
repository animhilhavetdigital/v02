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
            color: #fff;
            font-family: 'Cormorant Garamond', serif;
          }

          .results-left p {
            font-size: 16px;
            line-height: 1.65;
            color: rgba(226, 232, 255, 0.7);
            margin-bottom: 28px;
            max-width: 440px;
          }

          .stats-card {
            background: rgba(10, 18, 38, 0.5);
            border: 1px solid rgba(120, 170, 255, 0.1);
            border-radius: 16px;
            padding: 24px;
            width: 100%;
            max-width: 340px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
          }

          .stats-card h3 {
            font-size: 36px;
            font-weight: 700;
            color: #fff;
            margin-bottom: 4px;
            font-family: 'Inter', sans-serif;
          }

          .stats-card p {
            font-size: 14px;
            color: rgba(226, 232, 255, 0.5);
            margin-bottom: 14px;
          }

          .avatar-row {
            display: flex;
            align-items: center;
          }

          .avatar-row img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid #020611;
            margin-left: -8px;
            object-fit: cover;
          }

          .avatar-row img:first-child {
            margin-left: 0;
          }

          .avatar-more {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #fff;
            display: grid;
            place-items: center;
            font-size: 13px;
            font-weight: 600;
            margin-left: -8px;
          }

          /* Glowing Image Container */
          .glowing-image-container {
            position: relative;
            width: 100%;
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid rgba(120, 170, 255, 0.2);
            box-shadow: 0 30px 70px rgba(0,0,0,0.6), 0 0 50px rgba(37,99,255,0.25);
            background: rgba(6, 11, 24, 0.4);
            backdrop-filter: blur(10px);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .glowing-image-container:hover {
            transform: translateY(-4px);
            box-shadow: 0 35px 80px rgba(0,0,0,0.7), 0 0 60px rgba(37,99,255,0.45);
            border-color: rgba(120, 170, 255, 0.35);
          }

          .glowing-image {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
          }
        `}
      </style>
      <section className="results-section">
        <div className="results-container">
          <div className="results-grid">
            
            <div className="results-left">
              <div className="eyebrow">La confiance des professionnels</div>
              <h2>Des résultats concrets<br />pour votre activité</h2>
              <p>
                Droit Habitat, la plateforme de référence des courtiers, CGP et professionnels du crédit habitat.
              </p>
              
              <div className="stats-card">
                <h3>+1 500</h3>
                <p>professionnels nous font confiance</p>
                <div className="avatar-row">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User 1" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User 2" />
                  <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" alt="User 3" />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="User 4" />
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="User 5" />
                  <div className="avatar-more">+</div>
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
