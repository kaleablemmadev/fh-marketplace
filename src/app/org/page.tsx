'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface Organization {
  id: string | number;
  name: string;
  type: string;
  industry?: string | null;
  locationCity?: string | null;
  locationRegion?: string | null;
  website?: string | null;
  phone: string[];
  email?: string | null;
  description?: string | null;
  status: string;
  verified: boolean;
  createdAt: string;
}

export default function OrgPage() {
  const [orgs, setOrgs] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrgs() {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch('/api/org/');

        if (!res.ok) {
          throw new Error("Failed to load organizations");
        }

        const data: Organization[] = await res.json();
        setOrgs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load organizations");
        setOrgs([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrgs();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading organizations...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">
          <svg className="error-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="error-title">Something went wrong</h2>
        <p className="error-message">{error}</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Background decoration */}
      <div className="page-background">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      <main className="main-content">
        {/* Header */}
        <section className="page-header">
          <div className="header-content">
            <div className="header-badge">
              <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="badge-text">Admin</span>
            </div>
            <div className="header-title-group">
              <h1 className="page-title">Organizations</h1>
              <p className="page-subtitle">Browse organizations submitted to the marketplace.</p>
            </div>
          </div>
          <div className="header-actions">
            <Link href="/org/new" className="btn-primary">
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Organization
            </Link>
          </div>
        </section>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon stat-icon-total">
              <svg className="stat-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="stat-content">
              <p className="stat-value">{orgs.length}</p>
              <p className="stat-label">Total Organizations</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-verified">
              <svg className="stat-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="stat-content">
              <p className="stat-value">{orgs.filter(o => o.verified).length}</p>
              <p className="stat-label">Verified</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-types">
              <svg className="stat-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div className="stat-content">
              <p className="stat-value">{new Set(orgs.map(o => o.type)).size}</p>
              <p className="stat-label">Organization Types</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-locations">
              <svg className="stat-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="stat-content">
              <p className="stat-value">{new Set(orgs.map(o => o.locationCity).filter(Boolean)).size}</p>
              <p className="stat-label">Cities</p>
            </div>
          </div>
        </div>

        {/* Organization List */}
        {orgs.length === 0 ? (
          <section className="empty-state">
            <div className="empty-content">
              <div className="empty-icon">
                <svg className="empty-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="empty-title">No organizations found</h3>
              <p className="empty-description">Get started by creating your first organization.</p>
              <Link href="/org/new" className="btn-primary btn-small">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Organization
              </Link>
            </div>
          </section>
        ) : (
          <section className="org-list-section">
            <div className="list-header">
              <p className="list-count">{orgs.length} organization{orgs.length !== 1 ? 's' : ''}</p>
              <div className="list-filters">
                <select className="filter-select" defaultValue="all">
                  <option value="all">All Types</option>
                  {Array.from(new Set(orgs.map(o => o.type))).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <select className="filter-select" defaultValue="all">
                  <option value="all">All Status</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>

            <ul className="org-grid">
              {orgs.map((org) => (
                <li key={org.id} className="org-card">
                  <div className="org-card-content">
                    <div className="org-header">
                      <div className="org-name-wrapper">
                        <h3 className="org-name">{org.name}</h3>
                        {org.verified && (
                          <span className="verified-badge" title="Verified Organization">
                            <svg className="verified-icon" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </div>
                      <span className={`status-badge status-${org.status.toLowerCase()}`}>
                        {org.status}
                      </span>
                    </div>

                    <div className="org-details">
                      <p className="org-type">{org.type}</p>
                      {org.industry && (
                        <span className="org-industry">{org.industry}</span>
                      )}
                    </div>

                    {(org.locationCity || org.locationRegion) && (
                      <div className="org-location">
                        <svg className="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>
                          {[org.locationCity, org.locationRegion].filter(Boolean).join(', ')}
                        </span>
                      </div>
                    )}

                    {org.email && (
                      <div className="org-contact">
                        <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="org-email">{org.email}</span>
                      </div>
                    )}

                    <div className="org-footer">
                      <span className="org-date">
                        Joined {new Date(org.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <Link href={`/org/${org.id}`} className="link-view">
                        View Details
                        <svg className="link-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .page-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #eef2ff 100%);
          padding: 2rem;
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
        }

        .bg-blob-1 {
          top: -10%;
          right: -5%;
          width: 30rem;
          height: 30rem;
          background: #93c5fd;
          animation: floatBlob 8s ease-in-out infinite;
        }

        .bg-blob-2 {
          bottom: -10%;
          left: -5%;
          width: 30rem;
          height: 30rem;
          background: #a5b4fc;
          animation: floatBlob 10s ease-in-out infinite reverse;
        }

        .bg-blob-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40rem;
          height: 40rem;
          background: #c4b5fd;
          opacity: 0.08;
          animation: floatBlob 12s ease-in-out infinite;
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
          position: relative;
          z-index: 1;
        }

        /* Loading */
        .loading-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          background: linear-gradient(135deg, #f8fafc, #eff6ff);
        }

        .loading-spinner {
          width: 3rem;
          height: 3rem;
          border: 4px solid #e2e8f0;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-text {
          color: #64748b;
          font-size: 1.1rem;
        }

        /* Error */
        .error-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 2rem;
          background: linear-gradient(135deg, #fef2f2, #fee2e2);
          text-align: center;
        }

        .error-icon {
          padding: 0.75rem;
          background: #fee2e2;
          border-radius: 1rem;
          margin-bottom: 0.5rem;
        }

        .error-icon-svg {
          width: 2.5rem;
          height: 2.5rem;
          color: #dc2626;
        }

        .error-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #991b1b;
        }

        .error-message {
          color: #7f1d1d;
          max-width: 28rem;
        }

        .retry-button {
          margin-top: 1rem;
          padding: 0.625rem 1.5rem;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .retry-button:hover {
          background: #b91c1c;
          transform: scale(1.02);
        }

        /* Header */
        .page-header {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .header-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .header-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .badge-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #3b82f6;
        }

        .badge-text {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
        }

        .header-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          color: #64748b;
          font-size: 1rem;
        }

        .header-actions {
          flex-shrink: 0;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
          font-family: inherit;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-small {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Stats */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 1rem;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }

        .stat-icon {
          padding: 0.75rem;
          border-radius: 0.75rem;
          flex-shrink: 0;
        }

        .stat-icon-total {
          background: rgba(59, 130, 246, 0.1);
        }

        .stat-icon-verified {
          background: rgba(34, 197, 94, 0.1);
        }

        .stat-icon-types {
          background: rgba(168, 85, 247, 0.1);
        }

        .stat-icon-locations {
          background: rgba(236, 72, 153, 0.1);
        }

        .stat-icon-svg {
          width: 1.5rem;
          height: 1.5rem;
          color: #3b82f6;
        }

        .stat-icon-verified .stat-icon-svg {
          color: #22c55e;
        }

        .stat-icon-types .stat-icon-svg {
          color: #a855f7;
        }

        .stat-icon-locations .stat-icon-svg {
          color: #ec4899;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }

        /* Empty State */
        .empty-state {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          padding: 4rem 2rem;
          text-align: center;
          border: 2px dashed rgba(148, 163, 184, 0.3);
        }

        .empty-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          max-width: 24rem;
          margin: 0 auto;
        }

        .empty-icon {
          padding: 1rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 1rem;
        }

        .empty-icon-svg {
          width: 3rem;
          height: 3rem;
          color: #3b82f6;
        }

        .empty-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
        }

        .empty-description {
          color: #64748b;
        }

        /* Organization List */
        .org-list-section {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(226, 232, 240, 0.5);
        }

        .list-count {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .list-filters {
          display: flex;
          gap: 0.75rem;
        }

        .filter-select {
          padding: 0.5rem 2rem 0.5rem 0.75rem;
          border-radius: 0.75rem;
          border: 2px solid #e2e8f0;
          background: white;
          font-size: 0.875rem;
          color: #0f172a;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.5rem center;
          background-size: 1.25rem;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .filter-select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        /* Organization Grid */
        .org-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          list-style: none;
          padding: 0;
        }

        .org-card {
          background: white;
          border-radius: 1rem;
          border: 2px solid #f1f5f9;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .org-card:hover {
          transform: translateY(-4px);
          border-color: #bfdbfe;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
        }

        .org-card-content {
          padding: 1.5rem;
        }

        .org-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .org-name-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
        }

        .org-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
          word-break: break-word;
        }

        .verified-badge {
          display: inline-flex;
          flex-shrink: 0;
          color: #22c55e;
        }

        .verified-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.025em;
          flex-shrink: 0;
        }

        .status-active {
          background: #dcfce7;
          color: #15803d;
        }

        .status-pending {
          background: #fef3c7;
          color: #92400e;
        }

        .status-inactive {
          background: #fee2e2;
          color: #991b1b;
        }

        .status-archived {
          background: #f1f5f9;
          color: #475569;
        }

        .org-details {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }

        .org-type {
          color: #475569;
          font-size: 0.875rem;
          font-weight: 500;
          margin: 0;
        }

        .org-industry {
          padding: 0.125rem 0.5rem;
          background: #f1f5f9;
          border-radius: 9999px;
          font-size: 0.75rem;
          color: #64748b;
        }

        .org-location {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .location-icon {
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .org-contact {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .contact-icon {
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .org-email {
          word-break: break-all;
        }

        .org-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.75rem;
          border-top: 2px solid #f1f5f9;
        }

        .org-date {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .link-view {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: #3b82f6;
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .link-view:hover {
          color: #1d4ed8;
          gap: 0.5rem;
        }

        .link-arrow {
          width: 1rem;
          height: 1rem;
          transition: transform 0.2s ease;
        }

        .link-view:hover .link-arrow {
          transform: translateX(3px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-container {
            padding: 1rem;
          }

          .page-header {
            padding: 1.5rem;
            flex-direction: column;
            align-items: stretch;
          }

          .header-actions {
            width: 100%;
          }

          .header-actions .btn-primary {
            width: 100%;
            justify-content: center;
          }

          .page-title {
            font-size: 1.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .org-grid {
            grid-template-columns: 1fr;
          }

          .list-header {
            flex-direction: column;
            align-items: stretch;
          }

          .list-filters {
            flex-direction: column;
          }

          .filter-select {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .org-card-content {
            padding: 1rem;
          }

          .org-header {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}