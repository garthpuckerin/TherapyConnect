import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Skip to content link for accessibility
const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only absolute top-2 left-2 bg-accent text-surface px-4 py-2 rounded z-50"
  >
    Skip to main content
  </a>
);

const About: React.FC = () => {
  const credentials = [
    'Licensed Professional Counselor (LPC)',
    "Master's in Clinical Psychology - University of California",
    'Certified in Cognitive Behavioral Therapy (CBT)',
    'Certified in Emotionally Focused Therapy (EFT)',
    'Member of American Counseling Association (ACA)',
    '10+ years of clinical experience',
  ];

  const specializations = [
    'Anxiety and Depression',
    'Relationship Issues',
    'Trauma and PTSD',
    'Life Transitions',
    'Stress Management',
    'Self-Esteem and Confidence',
  ];

  return (
    <>
      <SEO
        title="About Dr. Sarah Johnson"
        description="Meet Dr. Sarah Johnson, Licensed Professional Counselor with over 10 years of experience in individual and couples therapy. Compassionate, evidence-based care."
        keywords="Dr. Sarah Johnson, therapist, counselor, LPC, licensed professional counselor, therapy experience, credentials"
      />
      <SkipToContent />
      <div id="main-content">
        {/* Hero Section */}
        <section className="section-padding" style={{ background: 'var(--gradient-bg)' }}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
                  Meet Dr. Sarah Johnson
                </h1>
                <p className="text-xl text-text mb-8 leading-relaxed">
                  A compassionate and experienced therapist dedicated to helping you navigate
                  life&apos;s challenges and discover your path to healing and growth.
                </p>
                <Link
                  to="/book"
                  className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200"
                >
                  Schedule a Consultation
                </Link>
              </div>
              <div className="relative">
                <div className="bg-surface rounded-2xl shadow-xl p-8">
                  <div
                    className="w-64 h-64 rounded-full mx-auto flex items-center justify-center shadow-lg"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--color-accent) 0%, var(--color-surface-secondary) 100%)',
                    }}
                  >
                    <span className="text-surface text-6xl font-bold">SJ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">
                My Story & Approach
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-text mb-6 leading-relaxed">
                  Welcome! I&apos;m Dr. Sarah Johnson, a Licensed Professional Counselor with over a
                  decade of experience helping individuals and couples overcome life&apos;s
                  challenges. My journey into therapy began with my own personal experiences of
                  growth and healing, which sparked a deep passion for supporting others on their
                  mental health journeys.
                </p>

                <p className="text-text mb-6 leading-relaxed">
                  I believe that every person has the inherent capacity for healing and growth. My
                  role is to provide a safe, non-judgmental space where you can explore your
                  thoughts, feelings, and experiences while developing the tools and insights needed
                  to create positive change in your life.
                </p>

                <p className="text-text mb-8 leading-relaxed">
                  My therapeutic approach is integrative, drawing from evidence-based practices
                  including Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy (EFT),
                  and mindfulness-based interventions. I tailor my approach to meet your unique
                  needs, ensuring that our work together feels authentic and meaningful to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Specializations */}
        <section className="section-padding" style={{ background: 'var(--gradient-bg)' }}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Credentials */}
              <div className="border-2 border-primary-600 rounded-lg p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center">
                  Credentials & Education
                </h3>
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-text rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-text">{credential}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className="border-2 border-primary-600 rounded-lg p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center">
                  Areas of Specialization
                </h3>
                <div className="space-y-4">
                  {specializations.map((specialization, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-text rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-text">{specialization}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                My Therapeutic Philosophy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="card text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Compassionate Care</h4>
                  <p className="text-text-secondary">
                    Every session is approached with empathy, understanding, and genuine care for
                    your well-being.
                  </p>
                </div>

                <div className="card text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-secondary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-text mb-4">Evidence-Based</h4>
                  <p className="text-text-secondary">
                    Utilizing proven therapeutic techniques and approaches backed by scientific
                    research.
                  </p>
                </div>

                <div className="card text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-text mb-4">Client-Centered</h4>
                  <p className="text-text-secondary">
                    Your goals, values, and experiences guide our therapeutic work together.
                  </p>
                </div>
              </div>
              <p className="text-text mt-12 mb-8 leading-relaxed max-w-3xl mx-auto">
                When I&apos;m not in session with clients, you can find me hiking local trails,
                practicing yoga, reading the latest research in psychology, or spending quality time
                with my family. I believe in the importance of work-life balance and self-care,
                principles I bring into my practice and encourage in my clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                <Link
                  to="/book"
                  className="px-6 py-3 text-center font-medium bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 text-center font-medium bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
