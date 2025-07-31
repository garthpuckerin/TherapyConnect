import React from 'react';
import { Link } from 'react-router-dom';

// Skip to content link for accessibility
const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only absolute top-2 left-2 bg-primary-600 text-white px-4 py-2 rounded z-50"
  >
    Skip to main content
  </a>
);

const Home: React.FC = () => {
  // ...rest of component

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      text: "The therapy sessions have been life-changing. I feel more confident and equipped to handle life's challenges.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael R.',
      text: 'Professional, compassionate, and truly understanding. The online booking made it so easy to get started.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jennifer L.',
      text: "Couples therapy helped us reconnect and communicate better. We're stronger than ever now.",
      rating: 5,
    },
  ];

  return (
    <>
      <SkipToContent />
      <div id="main-content">
        {/* Hero Section */}
        <section className="section-padding" style={{ background: 'var(--gradient-bg)' }}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Your Journey to
                  <span className="text-primary-600"> Healing</span>
                  <br />
                  Starts Here
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Professional therapy services designed to support your mental health journey. Take
                  the first step towards a healthier, happier you with compassionate, evidence-based
                  care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/book"
                    className="btn-primary text-center bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200"
                  >
                    Book a Session
                  </Link>
                  <Link
                    to="/about"
                    className="btn-outline text-center border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:text-primary-700 font-bold py-3 px-8 rounded-lg transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 via-secondary-100 to-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">TC</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
                    <p className="text-primary-600 font-medium mb-4">
                      Licensed Professional Counselor
                    </p>
                    <p className="text-gray-600">
                      Over 10 years of experience helping individuals and couples navigate life's
                      challenges with compassion and expertise.
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-200 rounded-2xl transform rotate-3 blur-md opacity-80 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding" style={{ background: 'var(--gradient-bg)' }}>
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Mental Health Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Personalized therapy approaches tailored to your unique needs and goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600 md:w-6 md:h-6 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Individual Therapy</h3>
                <p className="text-gray-600">
                  One-on-one sessions focused on your personal growth, mental health, and
                  well-being.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-secondary-600 md:w-6 md:h-6 sm:w-5 sm:h-5"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Couples Therapy</h3>
                <p className="text-gray-600">
                  Strengthen your relationship with evidence-based approaches to communication and
                  connection.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600 md:w-6 md:h-6 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Online Sessions</h3>
                <p className="text-gray-600">
                  Convenient, secure virtual therapy sessions from the comfort of your own space.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="btn-primary bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding" style={{ background: 'var(--gradient-bg)' }}>
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Real stories from people who have found healing and growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="rounded-xl shadow-md bg-white/80 backdrop-blur p-6 flex flex-col items-center border border-primary-100 hover:shadow-xl transition"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Using explicit gradient to override theme */}
        <section className="section-padding bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards better mental health. Book your initial consultation today
              and start working towards a healthier, happier you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-white text-primary-600 hover:bg-gray-100 border-2 border-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Book Your Session
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
