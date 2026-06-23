import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleCtaClick = () => {
    const el = document.getElementById('chat-test');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.location.href = '/#chat-test';
    }
  };

  return (
    <>
      <style>
        {`
          .navbar {
            position: fixed;
            top: 22px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: fit-content;
            max-width: calc(100% - 32px);
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 60px;
            z-index: 100;
            backdrop-filter: blur(14px);
            background: rgba(255, 255, 255, 0.5);
            /* opacity 50% */
            border: 1px solid rgba(209, 180, 140, 0.18);
            box-shadow: 0 0 0 transparent;
            border-radius: 999px;
            padding: 0 28px;
          }

          .nav-brand {
            display: flex;
            align-items: center;
          }

          .nav-brand img {
            height: 34px;
            width: auto;
            flex-shrink: 0;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 24px;
            flex-shrink: 0;
          }

          .nav-links a {
            color: rgba(7, 16, 31, 0.74);
            font-size: 14px;
            text-decoration: none;
            transition: color .25s ease;
            font-weight: 500;
          }

          .nav-links a:hover {
            color: #A78B66;
          }

          .nav-mobile-btn {
            display: none;
            background: none;
            border: none;
            color: #07101F;
            cursor: pointer;
            padding: 4px;
          }

          .mobile-menu {
            display: none;
            position: fixed;
            top: 96px;
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
            width: min(680px, calc(100% - 32px));
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(209, 180, 140, 0.2);
            border-radius: 20px;
            padding: 20px;
            z-index: 99;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease, transform 0.25s ease;
            backdrop-filter: blur(14px);
          }

          .mobile-menu.open {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(-50%) translateY(0);
          }

          .mobile-menu a {
            display: block;
            padding: 14px 16px;
            color: #07101F;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            border-radius: 12px;
            transition: background 0.2s ease, color 0.2s ease;
          }

          .mobile-menu a:hover {
            background: rgba(209, 180, 140, 0.12);
            color: #A78B66;
          }

          .mobile-menu-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: 98;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease;
          }

          .mobile-menu-overlay.open {
            opacity: 1;
            pointer-events: auto;
          }

          @media (max-width: 768px) {
            .navbar {
              height: 56px;
              padding: 0 24px;
              gap: 36px;
              top: 16px;
            }

            .nav-brand img {
              height: 28px;
            }

            .nav-links {
              gap: 18px;
            }

            .nav-links a {
              font-size: 13px;
            }

            .mobile-menu {
              top: 80px;
            }
          }

          @media (max-width: 520px) {
            .navbar {
              height: 52px;
              padding: 0 18px;
              gap: 24px;
            }

            .nav-brand img {
              height: 26px;
            }

            .nav-links {
              gap: 14px;
            }

            .nav-links a {
              font-size: 12px;
            }

            .mobile-menu {
              top: 76px;
            }
          }

          @media (max-width: 440px) {
            .nav-links {
              display: none;
            }

            .nav-mobile-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: rgba(209, 180, 140, 0.12);
            }

            .mobile-menu,
            .mobile-menu-overlay {
              display: block;
            }
          }
        `}
      </style>
      <nav className="navbar">
        <a href="/" className="nav-brand">
          <img src="/Frame 1000001360.svg" alt="DroitHabitat" />
        </a>
        
        <div className="nav-links">
          <a href="/">Accueil</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <button 
            className="btn-primary" 
            style={{ height: '36px', minHeight: '36px', padding: '0 16px', fontSize: '13px', marginLeft: '8px' }}
            onClick={handleCtaClick}
          >
            Faire le test gratuit
          </button>
        </div>

        <button className="nav-mobile-btn" onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/" onClick={closeMenu}>Accueil</a>
        <a href="/faq" onClick={closeMenu}>FAQ</a>
        <a href="/contact" onClick={closeMenu}>Contact</a>
        <button 
          className="btn-primary" 
          style={{ width: '100%', marginTop: '10px', height: '42px', minHeight: '42px' }} 
          onClick={() => { closeMenu(); handleCtaClick(); }}
        >
          Faire le test gratuit
        </button>
      </div>
    </>
  );
};

export default Navbar;
