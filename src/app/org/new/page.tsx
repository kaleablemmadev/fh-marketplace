'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewOrganizationForm() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [owner, setOwner] = useState('');
  const [industry, setIndustry] = useState('');
  const [locationCity, setLocationCity] = useState('');
  const [locationRegion, setLocationRegion] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError('');
    setIsSaving(true);

    try {
      const res = await fetch('/api/org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          owner,
          type,
          industry: industry || null,
          locationCity,
          locationRegion: locationRegion || null,
          website: website || null,
          email: email || null,
          phone,
          description: description || null,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          (data && typeof data.error === 'string' ? data.error : 'Failed to save organization')
        );
      }

      router.push('/org');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save organization');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <>
      <div className="form-container">
        {/* Decorative background elements */}
        <div className="background-decoration">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="form-card">
          {/* Header */}
          <div className="form-header">
            <div className="header-badge">
              <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="badge-text">ዐዲስ ድርጅት</span>
            </div>
            <h1 className="form-title">ዐዲስ ድርጅቱን ይመዝግቡ</h1>
            <p className="form-subtitle">
              በፍሬ ሃይማኖት ሰ/ት/ቤት የሚያገለግሉ ተማሪዎች የሚሰሩባቸውን ድርጅቶች በሌሎች አባላት እንዲታወቅና ለሥራም የአባላት ቀዳሚ ምርጫ እንዲሆኑ በሰ/ት/ቤቱ የተዘጋጀ መመዝገቢያ
            </p>
          </div>

          <form onSubmit={handleSubmit} className="form-grid">
            {/* Name */}
            <div className="field-full">
              <label htmlFor="name" className="field-label">
                የድርጅቱ ስም <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="የድርጅቱን ሙሉ ስም ያስገቡ"
                  required
                  className="form-input"
                />
              </div>
            </div>

            {/* Owner */}
            <div className="field-half">
              <label htmlFor="owner" className="field-label">
                የድርጅቱ ባለቤት ስም
              </label>
              <div className="input-wrapper">
                <input
                  id="owner"
                  type="text"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder="የባለቤት ስም"
                  className="form-input"
                />
              </div>
            </div>

            {/* Type */}
            <div className="field-half">
              <label htmlFor="type" className="field-label">
                የድርጅቱ ዐይነት
              </label>
              <div className="input-wrapper">
                <input
                  id="type"
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="e.g. NGO፣ የበጎ አድራጎት ድርጅት፣ መደበኛ ድርጅት"
                  className="form-input"
                />
              </div>
            </div>

            {/* Industry */}
            <div className="field-half">
              <label htmlFor="industry" className="field-label">
                የድርጅቱ ዘርፍ
              </label>
              <div className="input-wrapper">
                <input
                  id="industry"
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="ዘርፍ ያስገቡ"
                  className="form-input"
                />
              </div>
            </div>

            {/* City */}
            <div className="field-half">
              <label htmlFor="locationCity" className="field-label">
                ከተማ <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  id="locationCity"
                  type="text"
                  value={locationCity}
                  onChange={(e) => setLocationCity(e.target.value)}
                  placeholder="የከተማ ስም"
                  required
                  className="form-input"
                />
              </div>
            </div>

            {/* Region */}
            <div className="field-half">
              <label htmlFor="locationRegion" className="field-label">
                አድራሻ
              </label>
              <div className="input-wrapper">
                <input
                  id="locationRegion"
                  type="text"
                  value={locationRegion}
                  onChange={(e) => setLocationRegion(e.target.value)}
                  placeholder="የተብራራ አድራሻ መረጃ ያስገቡ"
                  className="form-input"
                />
              </div>
            </div>

            {/* Website */}
            <div className="field-half">
              <label htmlFor="website" className="field-label">
                ድኅረ ገጽ (ካለዎት)
              </label>
              <div className="input-wrapper">
                <input
                  id="website"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://your-site.org"
                  className="form-input"
                />
              </div>
            </div>

            {/* Email */}
            <div className="field-half">
              <label htmlFor="email" className="field-label">
                ኢ-ሜይል (ካለዎት)
              </label>
              <div className="input-wrapper">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="org@example.com"
                  className="form-input"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="field-full">
              <label htmlFor="phone" className="field-label">
                ስልክ ቁጥር <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+251911223344 ወይም 0911223344"
                  required
                  className="form-input"
                />
              </div>
            </div>

            {/* Description */}
            <div className="field-full">
              <label htmlFor="description" className="field-label">
                ማብራሪያ
              </label>
              <div className="input-wrapper">
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="ስለድርጅትዎ ለሰዎች ማብራሪያን ይስጡ"
                  rows={4}
                  className="form-textarea"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="field-full actions">
              {error && (
                <div className="error-message">
                  <div className="error-icon">
                    <svg className="error-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="error-text">{error}</p>
                </div>
              )}

              <div className="button-group">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="btn-primary"
                >
                  <span className="btn-content">
                    {isSaving ? (
                      <>
                        <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        እየመዘገበ...
                      </>
                    ) : (
                      <>
                        <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        ድርጅቶን ይመዝግቡ
                      </>
                    )}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => router.back()}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>

          <div className="form-footer">
            <p className="footer-text">
              <span className="required">*</span> ያላቸው በሙሉ ግዴታ ናቸው።
            </p>
          </div>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .form-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #eef2ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        /* Background Decoration */
        .background-decoration {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          animation: blob 7s infinite;
        }

        .blob-1 {
          top: -5rem;
          right: -5rem;
          width: 24rem;
          height: 24rem;
          background: #93c5fd;
          mix-blend-mode: multiply;
        }

        .blob-2 {
          bottom: -5rem;
          left: -5rem;
          width: 24rem;
          height: 24rem;
          background: #a5b4fc;
          mix-blend-mode: multiply;
          animation-delay: 2s;
        }

        .blob-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24rem;
          height: 24rem;
          background: #c4b5fd;
          mix-blend-mode: multiply;
          opacity: 0.1;
          animation-delay: 4s;
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        /* Form Card */
        .form-card {
          width: 100%;
          max-width: 48rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          transition: all 0.3s ease;
        }

        .form-card:hover {
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
        }

        /* Header */
        .form-header {
          margin-bottom: 2rem;
        }

        .header-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .badge-icon {
          width: 1.5rem;
          height: 1.5rem;
          padding: 0.375rem;
          background: linear-gradient(135deg, #3b82f6, #4f46e5);
          border-radius: 0.75rem;
          color: white;
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
        }

        .badge-text {
          display: inline-block;
          padding: 0.25rem 1rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(79, 70, 229, 0.1));
          color: #1d4ed8;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .form-title {
          font-size: 1.875rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 32rem;
        }

        /* Form Grid */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .field-full {
          grid-column: 1 / -1;
        }

        .field-half {
          grid-column: span 1;
        }

        /* Form Fields */
        .field-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #334155;
          margin-bottom: 0.375rem;
        }

        .required {
          color: #ef4444;
        }

        .input-wrapper {
          position: relative;
        }

        .input-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.2));
          border-radius: 0.75rem;
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .input-wrapper:hover::before {
          opacity: 1;
        }

        .form-input,
        .form-textarea {
          position: relative;
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 2px solid #e2e8f0;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(4px);
          font-size: 0.95rem;
          color: #0f172a;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #94a3b8;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
          background: rgba(255, 255, 255, 0.7);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        /* Actions */
        .actions {
          padding-top: 1rem;
          border-top: 2px solid rgba(226, 232, 240, 0.5);
        }

        .error-message {
          width: 100%;
          padding: 1rem;
          background: rgba(254, 242, 242, 0.8);
          backdrop-filter: blur(4px);
          border-radius: 0.75rem;
          border: 2px solid #fecaca;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          animation: shake 0.5s ease-in-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }

        .error-icon {
          padding: 0.25rem;
          background: #fee2e2;
          border-radius: 0.5rem;
          flex-shrink: 0;
        }

        .error-icon-svg {
          width: 1.25rem;
          height: 1.25rem;
          color: #dc2626;
        }

        .error-text {
          font-size: 0.875rem;
          color: #991b1b;
          font-weight: 500;
          margin: 0;
        }

        .button-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          width: 100%;
        }

        .btn-primary {
          position: relative;
          flex: 1;
          min-width: 200px;
          overflow: hidden;
          padding: 0.875rem 1.5rem;
          border-radius: 0.75rem;
          border: none;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
          font-family: inherit;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4);
        }

        .btn-primary:active:not(:disabled) {
          transform: translateY(0);
        }

        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-primary:hover:not(:disabled)::before {
          opacity: 1;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .btn-primary:hover:not(:disabled)::after {
          transform: translateY(0);
        }

        .btn-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .spinner {
          width: 1.25rem;
          height: 1.25rem;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .spinner-circle {
          opacity: 0.25;
        }

        .spinner-path {
          opacity: 0.75;
        }

        .btn-secondary {
          padding: 0.875rem 1.5rem;
          border-radius: 0.75rem;
          border: 2px solid #e2e8f0;
          background: transparent;
          color: #475569;
          font-weight: 500;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        /* Footer */
        .form-footer {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 2px solid rgba(226, 232, 240, 0.5);
        }

        .footer-text {
          font-size: 0.75rem;
          color: #94a3b8;
          text-align: center;
          margin: 0;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .form-card {
            padding: 1.5rem;
          }

          .form-title {
            font-size: 1.5rem;
          }

          .button-group {
            flex-direction: column;
          }

          .btn-primary {
            min-width: unset;
            width: 100%;
          }

          .btn-secondary {
            width: 100%;
          }

          .blob-1,
          .blob-2,
          .blob-3 {
            width: 16rem;
            height: 16rem;
          }
        }

        @media (max-width: 480px) {
          .form-card {
            padding: 1rem;
            border-radius: 1rem;
          }

          .form-grid {
            gap: 1rem;
          }

          .form-input,
          .form-textarea {
            padding: 0.625rem 0.875rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </>
  );
}