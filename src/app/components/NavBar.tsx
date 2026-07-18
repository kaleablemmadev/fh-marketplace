'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          {/* Logo/Brand */}
          <Link href="/" className="navbar-brand" onClick={closeMobileMenu}>
            <div className="brand-icon">
              <svg className="brand-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="brand-text">fh-marketplace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-nav">
            <Link 
              href="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2" />
              </svg>
              Home
            </Link>
            <Link 
              href="/org" 
              className={`nav-link ${isActive('/org') ? 'active' : ''}`}
            >
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Organizations
            </Link>
            <Link 
              href="/people" 
              className={`nav-link ${isActive('/people') ? 'active' : ''}`}
            >
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              People
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="navbar-actions">
            <Link href="/org/new" className="btn-nav-primary">
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="btn-text">Add Organization</span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="mobile-menu-btn" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link 
              href="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2" />
              </svg>
              Home
            </Link>
            <Link 
              href="/org" 
              className={`mobile-nav-link ${isActive('/org') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Organizations
            </Link>
            <Link 
              href="/people" 
              className={`mobile-nav-link ${isActive('/people') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              People
            </Link>
            <div className="mobile-divider"></div>
            <Link 
              href="/org/new" 
              className="mobile-nav-primary"
              onClick={closeMobileMenu}
            >
              <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Organization
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .navbar-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        /* Brand */
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .navbar-brand:hover {
          transform: scale(1.02);
        }

        .brand-icon {
          width: 2.5rem;
          height: 2.5rem;
          padding: 0.375rem;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.25);
          transition: box-shadow 0.3s ease;
        }

        .navbar-brand:hover .brand-icon {
          box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.35);
        }

        .brand-svg {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }

        .brand-text {
          font-size: 1.125rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.025em;
        }

        /* Desktop Navigation */
        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0.25rem;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .nav-link:hover::after {
          width: 60%;
        }

        .nav-link.active::after {
          width: 60%;
        }

        .nav-link:hover {
          color: #0f172a;
          background: rgba(59, 130, 246, 0.05);
        }

        .nav-link.active {
          color: #2563eb;
          background: rgba(59, 130, 246, 0.08);
        }

        .nav-icon {
          width: 1.125rem;
          height: 1.125rem;
        }

        /* Navbar Actions */
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .btn-nav-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
          font-family: inherit;
          white-space: nowrap;
        }

        .btn-nav-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
        }

        .btn-nav-primary:active {
          transform: translateY(0);
        }

        .btn-nav-primary .btn-icon {
          width: 1.125rem;
          height: 1.125rem;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.75rem;
          transition: background 0.2s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(59, 130, 246, 0.05);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          width: 1.5rem;
          transition: all 0.3s ease;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: #475569;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile Navigation */
        .mobile-nav {
          display: none;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(226, 232, 240, 0.5);
        }

        .mobile-nav.open {
          display: block;
          max-height: 400px;
        }

        .mobile-nav-content {
          max-width: 80rem;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(59, 130, 246, 0.05);
          color: #0f172a;
        }

        .mobile-nav-link.active {
          background: rgba(59, 130, 246, 0.08);
          color: #2563eb;
        }

        .mobile-nav-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .mobile-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 0.5rem 0;
        }

        .mobile-nav-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
        }

        .mobile-nav-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
        }

        .mobile-nav-primary .mobile-nav-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .navbar-container {
            padding: 0.625rem 1rem;
          }

          .navbar-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .btn-nav-primary .btn-text {
            display: none;
          }

          .btn-nav-primary {
            padding: 0.5rem;
          }

          .brand-text {
            font-size: 1rem;
          }

          .brand-icon {
            width: 2.25rem;
            height: 2.25rem;
          }

          .brand-svg {
            width: 1.25rem;
            height: 1.25rem;
          }

          .mobile-nav.open {
            max-height: 500px;
          }

          .mobile-nav-content {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .navbar-container {
            padding: 0.5rem 0.75rem;
          }

          .brand-text {
            font-size: 0.875rem;
          }

          .brand-icon {
            width: 2rem;
            height: 2rem;
            padding: 0.25rem;
          }

          .mobile-nav-link {
            font-size: 0.875rem;
            padding: 0.625rem 0.875rem;
          }
        }
      `}</style>
    </>
  );
}