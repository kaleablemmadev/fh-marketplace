import Link from "next/link";

export default async function Home() {
  return (
    <div className="home-page">
      {/* Background decoration */}
      <div className="page-background">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              <span className="badge-text">fh-marketplace</span>
            </div>
            
            <h1 className="hero-title">
              የፍሬ ሃይማኖት ሰ/ት/ቤት የድርጅቶች መዝገብ
            </h1>
            
            <p className="hero-description">
              የሰንበት ት/ቤት አባላት ድርጅቶችን ይገናኙ
            </p>

            <div className="hero-actions">
              <Link href="/org" className="btn-primary btn-large">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                ድርጅቶችን ይመልከቱ
              </Link>
              <Link href="/people" className="btn-secondary btn-large">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                አባላትን ይመልከቱ
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">ድርጅቶች</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">የኅብረተሰብ አባላት</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">ከተማዎች</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="illustration-circle circle-1"></div>
              <div className="illustration-circle circle-2"></div>
              <div className="illustration-circle circle-3"></div>
              <div className="illustration-icon">
                <svg className="illustration-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-card">
            <div className="welcome-icon-wrapper">
              <div className="welcome-icon">
                <svg className="welcome-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="welcome-content">
              <h2 className="welcome-title">እንኳን ወደ FH-Marketplace በደኅና መጡ</h2>
              <p className="welcome-description">
                የሰንበት ትምህርት ቤት አባላት ሥራዎችን ለተለያዩ ደንበኞች በማስተዋወቅ አባላትን በሥራው ዓለም የሚያገናኝ
              </p>
              <div className="welcome-features">
                <div className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ድርጅቶችን ያግኙ</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ችሎታ ያላቸውን ሰዎች ያግኙ</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ትዕዛዞችን ይከታተሉ</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ማኅበረሰብን እንፍጠር</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="quick-stats">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card-icon stat-icon-org">
                <svg className="stat-card-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="stat-card-content">
                <h3 className="stat-card-number">50+</h3>
                <p className="stat-card-label">Organizations</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-icon stat-icon-people">
                <svg className="stat-card-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="stat-card-content">
                <h3 className="stat-card-number">200+</h3>
                <p className="stat-card-label">Community Members</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-icon stat-icon-locations">
                <svg className="stat-card-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="stat-card-content">
                <h3 className="stat-card-number">10+</h3>
                <p className="stat-card-label">Cities</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-icon stat-icon-jobs">
                <svg className="stat-card-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="stat-card-content">
                <h3 className="stat-card-number">100+</h3>
                <p className="stat-card-label">Job Postings</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Ready to get started?</h2>
              <p className="cta-description">
                Join our community and help build the future of Ethiopia's talent marketplace.
              </p>
              <div className="cta-actions">
                <Link href="/org/new" className="btn-primary">
                  <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Organization
                </Link>
                <Link href="/people/new" className="btn-secondary">
                  <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Add Person
                </Link>
              </div>
            </div>
            <div className="cta-decoration">
              <div className="cta-shape cta-shape-1"></div>
              <div className="cta-shape cta-shape-2"></div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .home-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #eef2ff 100%);
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        /* Background */
        .page-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          animation: floatBlob 8s ease-in-out infinite;
        }

        .bg-blob-1 {
          top: -10%;
          right: -5%;
          width: 30rem;
          height: 30rem;
          background: #93c5fd;
        }

        .bg-blob-2 {
          bottom: -10%;
          left: -5%;
          width: 30rem;
          height: 30rem;
          background: #a5b4fc;
          animation-delay: 2s;
          animation-duration: 10s;
        }

        .bg-blob-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40rem;
          height: 40rem;
          background: #c4b5fd;
          opacity: 0.08;
          animation-delay: 4s;
          animation-duration: 12s;
        }

        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        /* Main Content */
        .main-content {
          max-width: 80rem;
          margin: 0 auto;
          padding: 2rem 2rem 4rem;
          position: relative;
          z-index: 1;
        }

        /* Hero Section */
        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 2rem;
          padding: 3rem;
          margin-bottom: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 1rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 9999px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(59, 130, 246, 0.15);
        }

        .badge-pulse {
          display: inline-block;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: #3b82f6;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .badge-text {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #2563eb;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .hero-description {
          font-size: 1.125rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 32rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: inherit;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #0f172a;
          border: 2px solid #e2e8f0;
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }

        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.05rem;
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 2px solid rgba(226, 232, 240, 0.5);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 2rem;
          background: #e2e8f0;
        }

        /* Hero Visual */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-illustration {
          position: relative;
          width: 20rem;
          height: 20rem;
        }

        .illustration-circle {
          position: absolute;
          border-radius: 50%;
          animation: floatCircle 6s ease-in-out infinite;
        }

        .circle-1 {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(79, 70, 229, 0.1));
          border: 2px solid rgba(59, 130, 246, 0.15);
          top: 0;
          left: 0;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 70%;
          height: 70%;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.08), rgba(168, 85, 247, 0.08));
          border: 2px solid rgba(236, 72, 153, 0.1);
          top: 15%;
          left: 15%;
          animation-delay: 1s;
        }

        .circle-3 {
          width: 40%;
          height: 40%;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(16, 185, 129, 0.08));
          border: 2px solid rgba(34, 197, 94, 0.1);
          top: 30%;
          left: 30%;
          animation-delay: 2s;
        }

        @keyframes floatCircle {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-10px, -15px) scale(1.02); }
          66% { transform: translate(10px, 10px) scale(0.98); }
        }

        .illustration-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 5rem;
          height: 5rem;
          background: linear-gradient(135deg, #3b82f6, #4f46e5);
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.3);
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -60%) scale(1.05); }
        }

        .illustration-svg {
          width: 2.5rem;
          height: 2.5rem;
          color: white;
        }

        /* Welcome Section */
        .welcome-section {
          margin-bottom: 3rem;
        }

        .welcome-card {
          display: flex;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 2rem;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .welcome-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
        }

        .welcome-icon-wrapper {
          flex-shrink: 0;
        }

        .welcome-icon {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(79, 70, 229, 0.1));
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(59, 130, 246, 0.15);
        }

        .welcome-icon-svg {
          width: 2rem;
          height: 2rem;
          color: #3b82f6;
        }

        .welcome-content {
          flex: 1;
        }

        .welcome-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .welcome-description {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .welcome-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #475569;
        }

        .feature-icon {
          width: 1rem;
          height: 1rem;
          color: #22c55e;
          flex-shrink: 0;
        }

        /* Quick Stats */
        .quick-stats {
          margin-bottom: 3rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }

        .stat-card-icon {
          padding: 0.75rem;
          border-radius: 0.75rem;
          flex-shrink: 0;
        }

        .stat-icon-org {
          background: rgba(59, 130, 246, 0.1);
        }

        .stat-icon-people {
          background: rgba(168, 85, 247, 0.1);
        }

        .stat-icon-locations {
          background: rgba(236, 72, 153, 0.1);
        }

        .stat-icon-jobs {
          background: rgba(34, 197, 94, 0.1);
        }

        .stat-card-icon-svg {
          width: 1.5rem;
          height: 1.5rem;
          color: #3b82f6;
        }

        .stat-icon-people .stat-card-icon-svg {
          color: #a855f7;
        }

        .stat-icon-locations .stat-card-icon-svg {
          color: #ec4899;
        }

        .stat-icon-jobs .stat-card-icon-svg {
          color: #22c55e;
        }

        .stat-card-content {
          display: flex;
          flex-direction: column;
        }

        .stat-card-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .stat-card-label {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          margin-bottom: 0;
        }

        .cta-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          border-radius: 2rem;
          padding: 3rem;
          box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.3);
        }

        .cta-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .cta-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-actions .btn-primary {
          background: white;
          color: #2563eb;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
        }

        .cta-actions .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .cta-actions .btn-secondary {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.25);
        }

        .cta-actions .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        .cta-decoration {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .cta-shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .cta-shape-1 {
          width: 20rem;
          height: 20rem;
          top: -10rem;
          right: -5rem;
          animation: floatShape 8s ease-in-out infinite;
        }

        .cta-shape-2 {
          width: 15rem;
          height: 15rem;
          bottom: -7rem;
          left: -5rem;
          animation: floatShape 10s ease-in-out infinite reverse;
        }

        @keyframes floatShape {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20px, 20px) scale(1.1); }
          66% { transform: translate(20px, -10px) scale(0.9); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 2rem;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-visual {
            order: -1;
          }

          .hero-illustration {
            width: 15rem;
            height: 15rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .welcome-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .welcome-features {
            justify-items: center;
          }
        }

        @media (max-width: 768px) {
          .main-content {
            padding: 1rem 1rem 3rem;
          }

          .hero-section {
            padding: 1.5rem;
            border-radius: 1.5rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-actions .btn-primary,
          .hero-actions .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .hero-stats {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .stat-divider {
            display: none;
          }

          .hero-illustration {
            width: 12rem;
            height: 12rem;
          }

          .illustration-icon {
            width: 4rem;
            height: 4rem;
          }

          .illustration-svg {
            width: 2rem;
            height: 2rem;
          }

          .welcome-card {
            padding: 1.5rem;
          }

          .welcome-features {
            grid-template-columns: 1fr;
            width: 100%;
          }

          .feature-item {
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
          }

          .stat-card {
            padding: 1rem;
          }

          .cta-card {
            padding: 2rem 1.5rem;
          }

          .cta-title {
            font-size: 1.5rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-actions .btn-primary,
          .cta-actions .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .stat-item {
            flex-direction: row;
            gap: 0.5rem;
            align-items: center;
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}