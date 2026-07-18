'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Organization {
  id: string | number;
  name: string;
  owner: string;
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
  updatedAt?: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function OrganizationDetailPage({ params }: PageProps) {
  const router = useRouter();
  const [org, setOrg] = useState<Organization | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    async function fetchOrganization() {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(`/api/org/${params.id}`);

        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('Organization not found');
          }
          throw new Error('Failed to load organization details');
        }

        const data: Organization = await res.json();
        setOrg(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load organization');
        setOrg(null);
      } finally {
        setIsLoading(false);
      }
    }

    if (params.id) {
      fetchOrganization();
    }
  }, [params.id]);

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this organization? This action cannot be undone.')) {
      return;
    }

    try {
      setIsDeleting(true);
      const res = await fetch(`/api/org/${params.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete organization');
      }

      router.push('/org');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete organization');
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="detail-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">የድርጅት ዝርዝርን እየጫነ ነው...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-page">
        <div className="error-container">
          <div className="error-icon">
            <svg className="error-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="error-title">Unable to load organization</h2>
          <p className="error-message">{error}</p>
          <div className="error-actions">
            <button onClick={() => window.location.reload()} className="btn-secondary">
              Try Again
            </button>
            <Link href="/org" className="btn-primary">
              ወደ ድርጅቶች ገጽ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!org) {
    return (
      <div className="detail-page">
        <div className="not-found-container">
          <div className="not-found-icon">
            <svg className="not-found-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="not-found-title">ድርጅቱ አልተገኘም</h2>
          <p className="not-found-message">እየፈለጉ ያሉት ድርጅት ወይ ተሠርዟል ወይ ሊገኝ አልቻለም</p>
          <Link href="/org" className="btn-primary">
            ወደ ድርጅቶች ገጽ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Background decoration */}
      <div className="page-background">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      <div className="detail-container">
        {/* Header */}
        <div className="detail-header">
          <div className="header-top">
            <Link href="/org" className="back-link">
              <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ወደ ድርጅቶች ገጽ
            </Link>
            <div className="header-actions">
              <Link href={`/org/${org.id}/edit`} className="btn-edit">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                አስተካክል
              </Link>
              <button onClick={handleDelete} disabled={isDeleting} className="btn-delete">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                {isDeleting ? 'እያጠፋ...' : 'አጥፋ'}
              </button>
            </div>
          </div>

          <div className="org-title-section">
            <div className="org-title-wrapper">
              <h1 className="org-title">{org.name}</h1>
              {org.verified && (
                <span className="verified-badge-large" title="Verified Organization">
                  <svg className="verified-icon-large" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified
                </span>
              )}
            </div>
            <div className="org-meta">
              <span className={`status-badge status-${org.status.toLowerCase()}`}>
                {org.status}
              </span>
              <span className="org-type-badge">{org.type}</span>
              {org.industry && (
                <span className="org-industry-badge">{org.industry}</span>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="detail-grid">
          {/* Left Column - Main Info */}
          <div className="detail-main">
            {/* Description */}
            {org.description && (
              <div className="info-card">
                <h2 className="card-title">About</h2>
                <p className="org-description">{org.description}</p>
              </div>
            )}

            {/* Contact Information */}
            <div className="info-card">
              <h2 className="card-title">Contact Information</h2>
              <div className="contact-grid">
                {org.email && (
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="contact-label">ኢ-ሜይል</p>
                      <a href={`mailto:${org.email}`} className="contact-value contact-link">
                        {org.email}
                      </a>
                    </div>
                  </div>
                )}

                {org.phone && org.phone.length > 0 && (
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="contact-label">ስልክ ቁጥር</p>
                      {org.phone.map((phoneNumber, index) => (
                        <a 
                          key={index} 
                          href={`tel:${phoneNumber}`} 
                          className="contact-value contact-link"
                        >
                          {phoneNumber}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {org.website && (
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                      </svg>
                    </div>
                    <div>
                      <p className="contact-label">ድኅረ ገጽ</p>
                      <a 
                        href={org.website.startsWith('http') ? org.website : `https://${org.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-value contact-link"
                      >
                        {org.website}
                      </a>
                    </div>
                  </div>
                )}

                {(org.locationCity || org.locationRegion) && (
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="contact-label">መገኛ ቦታ</p>
                      <p className="contact-value">
                        {[org.locationCity, org.locationRegion].filter(Boolean).join(', ')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="detail-sidebar">
            {/* Organization Info */}
            <div className="info-card">
              <h2 className="card-title">የድርጅት መረጃ</h2>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-label">የድርጅት ዐይነት</span>
                  <span className="info-value">{org.type}</span>
                </div>
                {org.industry && (
                  <div className="info-item">
                    <span className="info-label">የድርጅት ዘርፍ</span>
                    <span className="info-value">{org.industry}</span>
                  </div>
                )}
                <div className="info-item">
                  <span className="info-label">Status</span>
                  <span className={`status-badge-small status-${org.status.toLowerCase()}`}>
                    {org.status}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Verification</span>
                  <span className={`verification-badge ${org.verified ? 'verified' : 'unverified'}`}>
                    {org.verified ? (
                      <>
                        <svg className="verification-icon-small" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </>
                    ) : (
                      'Not Verified'
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="info-card">
              <h2 className="card-title">Timeline</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="timeline-label">Created</p>
                    <p className="timeline-date">
                      {new Date(org.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
                {org.updatedAt && (
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <p className="timeline-label">Last Updated</p>
                      <p className="timeline-date">
                        {new Date(org.updatedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="info-card">
              <h2 className="card-title">Quick Actions</h2>
              <div className="quick-actions">
                <Link href={`/org/${org.id}/edit`} className="quick-action-btn btn-edit-small">
                  <svg className="quick-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  ድርጅት መረጃ አስተካክል
                </Link>
                {org.website && (
                  <a 
                    href={org.website.startsWith('http') ? org.website : `https://${org.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="quick-action-btn btn-website"
                  >
                    <svg className="quick-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    ድኅረ ገጹን ይጎብኙ
                  </a>
                )}
                <button onClick={handleDelete} disabled={isDeleting} className="quick-action-btn btn-delete-small">
                  <svg className="quick-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  {isDeleting ? 'እያጠፋ...' : 'ድርጅቱን አጥፋ'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .detail-page {
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

        /* Container */
        .detail-container {
          max-width: 80rem;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Loading */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          gap: 1.5rem;
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

        /* Error & Not Found */
        .error-container,
        .not-found-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          gap: 1rem;
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .error-icon,
        .not-found-icon {
          padding: 0.75rem;
          background: #fee2e2;
          border-radius: 1rem;
          margin-bottom: 0.5rem;
        }

        .not-found-icon {
          background: #fef3c7;
        }

        .error-icon-svg {
          width: 2.5rem;
          height: 2.5rem;
          color: #dc2626;
        }

        .not-found-icon-svg {
          width: 2.5rem;
          height: 2.5rem;
          color: #f59e0b;
        }

        .error-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #991b1b;
        }

        .not-found-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #92400e;
        }

        .error-message,
        .not-found-message {
          color: #64748b;
          max-width: 28rem;
        }

        .error-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.5rem;
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

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.5rem;
          background: white;
          color: #0f172a;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        /* Header */
        .detail-header {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .back-link:hover {
          color: #3b82f6;
          gap: 0.75rem;
        }

        .back-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-edit,
        .btn-delete {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          border: none;
          font-family: inherit;
        }

        .btn-edit {
          background: #eff6ff;
          color: #2563eb;
        }

        .btn-edit:hover {
          background: #dbeafe;
          transform: translateY(-1px);
        }

        .btn-delete {
          background: #fef2f2;
          color: #dc2626;
        }

        .btn-delete:hover:not(:disabled) {
          background: #fee2e2;
          transform: translateY(-1px);
        }

        .btn-delete:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Org Title */
        .org-title-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .org-title-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .org-title {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .verified-badge-large {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.25rem 0.75rem;
          background: #dcfce7;
          color: #15803d;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .verified-icon-large {
          width: 1rem;
          height: 1rem;
        }

        .org-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.025em;
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

        .org-type-badge {
          padding: 0.25rem 0.75rem;
          background: #eff6ff;
          color: #2563eb;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .org-industry-badge {
          padding: 0.25rem 0.75rem;
          background: #f3e8ff;
          color: #7c3aed;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        /* Detail Grid */
        .detail-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Info Cards */
        .info-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #f1f5f9;
        }

        /* Description */
        .org-description {
          color: #475569;
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
        }

        /* Contact Grid */
        .contact-grid {
          display: grid;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .contact-icon-wrapper {
          padding: 0.5rem;
          background: #f1f5f9;
          border-radius: 0.5rem;
          flex-shrink: 0;
        }

        .contact-item-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #64748b;
        }

        .contact-label {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
          margin-bottom: 0.125rem;
        }

        .contact-value {
          color: #0f172a;
          word-break: break-all;
        }

        .contact-link {
          color: #3b82f6;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        /* Info List */
        .info-list {
          display: grid;
          gap: 0.75rem;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-label {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .info-value {
          font-size: 0.875rem;
          color: #0f172a;
          font-weight: 500;
        }

        .status-badge-small {
          display: inline-block;
          padding: 0.125rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        .verification-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .verification-badge.verified {
          color: #15803d;
        }

        .verification-badge.unverified {
          color: #64748b;
        }

        .verification-icon-small {
          width: 1rem;
          height: 1rem;
        }

        /* Timeline */
        .timeline {
          display: grid;
          gap: 1rem;
        }

        .timeline-item {
          display: flex;
          gap: 1rem;
          position: relative;
        }

        .timeline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 0.5rem;
          top: 1.5rem;
          bottom: -0.5rem;
          width: 2px;
          background: #e2e8f0;
        }

        .timeline-dot {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: #3b82f6;
          border: 2px solid white;
          box-shadow: 0 0 0 3px #bfdbfe;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .timeline-content {
          flex: 1;
        }

        .timeline-label {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
          margin-bottom: 0.125rem;
        }

        .timeline-date {
          font-size: 0.875rem;
          color: #0f172a;
        }

        /* Quick Actions */
        .quick-actions {
          display: grid;
          gap: 0.75rem;
        }

        .quick-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          border: none;
          font-family: inherit;
          width: 100%;
        }

        .btn-edit-small {
          background: #eff6ff;
          color: #2563eb;
        }

        .btn-edit-small:hover {
          background: #dbeafe;
          transform: translateY(-1px);
        }

        .btn-website {
          background: #f0fdf4;
          color: #15803d;
        }

        .btn-website:hover {
          background: #dcfce7;
          transform: translateY(-1px);
        }

        .btn-delete-small {
          background: #fef2f2;
          color: #dc2626;
        }

        .btn-delete-small:hover:not(:disabled) {
          background: #fee2e2;
          transform: translateY(-1px);
        }

        .btn-delete-small:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .quick-action-icon {
          width: 1.125rem;
          height: 1.125rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .detail-page {
            padding: 1rem;
          }

          .detail-header {
            padding: 1.5rem;
          }

          .header-top {
            flex-direction: column;
            align-items: stretch;
          }

          .header-actions {
            justify-content: stretch;
          }

          .header-actions .btn-edit,
          .header-actions .btn-delete {
            flex: 1;
            justify-content: center;
          }

          .org-title-section {
            flex-direction: column;
          }

          .org-title {
            font-size: 1.5rem;
          }

          .org-meta {
            width: 100%;
          }

          .info-card {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .org-title-wrapper {
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-item {
            flex-direction: column;
          }

          .error-actions {
            flex-direction: column;
          }

          .error-actions .btn-primary,
          .error-actions .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}