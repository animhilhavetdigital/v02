import React, { useState } from 'react';
import { Menu, Calendar, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>
        {`
          .navbar {
            position: fixed;
            top: 22px;
            left: 50%;
            transform: translateX(-50%);
            width: min(560px, calc(100% - 32px));
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 100;
            backdrop-filter: blur(14px);
            background: rgba(2, 6, 17, 0.45);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 999px;
            padding: 0 24px;
          }

          .nav-brand {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 600;
            font-size: 20px;
            color: #fff;
            letter-spacing: 0.5px;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 26px;
          }

          .nav-links a {
            color: rgba(255,255,255,.74);
            font-size: 13px;
            text-decoration: none;
            transition: color .25s ease;
            font-weight: 500;
          }

          .nav-links a:hover {
            color: #fff;
          }

          .nav-mobile-btn {
            display: none;
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .nav-mobile-btn {
              display: flex;
              align-items: center;
            }
          }
        `}
      </style>
      <nav className="navbar">
        <a href="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.svg" alt="DroitHabitat" style={{ height: '22px', width: 'auto' }} />
        </a>
        
        <div className="nav-links">
          <a href="/">Accueil</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
