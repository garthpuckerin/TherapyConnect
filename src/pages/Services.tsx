import React from 'react';

// Skip to content link for accessibility
const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only absolute top-2 left-2 bg-accent text-surface px-4 py-2 rounded z-50"
  >
    Skip to main content
  </a>
);

const Services: React.FC = () => {
  return (
    <>
      <SkipToContent />
      <div id="main-content">
        <section className="section-padding" style={{ background: 'var(--gradient-bg)' }}>
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">Our Services</h1>
            <p className="text-xl text-text mb-8 leading-relaxed max-w-2xl">
              {'Compassionate, evidence-based therapy for individuals and couples.'}
              <br />
              {'In-person and virtual sessions available.'}
            </p>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card text-center">
                <h2 className="text-2xl font-semibold text-secondary mb-4">Individual Therapy</h2>
                <p className="text-text mb-4">
                  One-on-one sessions focused on your unique needs, personal growth, and mental
                  well-being. Explore challenges, develop coping strategies, and work toward your
                  goals in a supportive environment.
                </p>
                <ul className="list-disc pl-6 text-text-secondary mb-4 text-left">
                  <li>Anxiety & Depression</li>
                  <li>Life Transitions</li>
                  <li>Self-Esteem</li>
                  <li>Trauma & PTSD</li>
                </ul>
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold">Available:</span> In-person or virtually
                </p>
              </div>

              <div className="card text-center">
                <h2 className="text-2xl font-semibold text-secondary mb-4">Couples Therapy</h2>
                <p className="text-text mb-4">
                  Strengthen your relationship, improve communication, and resolve conflicts with
                  professional guidance. Sessions are tailored to the unique dynamics and goals of
                  each couple.
                </p>
                <ul className="list-disc pl-6 text-text-secondary mb-4 text-left">
                  <li>Communication Skills</li>
                  <li>Conflict Resolution</li>
                  <li>Reconnection & Intimacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-text mb-2">Session Information</h3>
                <ul className="list-disc pl-6 text-text mb-4 text-left inline-block">
                  <li>Sessions are 50 minutes</li>
                  <li>Offered in-person (Your City office) or virtually (secure video platform)</li>
                  <li>Flexible scheduling, including evenings</li>
                  <li>Confidential and HIPAA-compliant</li>
                </ul>
              </div>

              <div className="card text-center">
                <h3 className="text-xl font-semibold text-text mb-2">Rates & Insurance</h3>
                <p className="text-text mb-4">
                  Please contact for current rates. Sliding scale available for those in need.
                  Superbills provided for out-of-network reimbursement.
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold">Note:</span> Insurance not accepted directly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
