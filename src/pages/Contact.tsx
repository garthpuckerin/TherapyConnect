import React, { useState } from 'react';

// Skip to content link for accessibility
const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only absolute top-2 left-2 bg-accent text-surface px-4 py-2 rounded z-50"
  >
    Skip to main content
  </a>
);

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const isEmailValid = (email: string) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid =
    form.name.trim().length > 0 && isEmailValid(form.email) && form.message.trim().length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <>
      <SkipToContent />
      <div id="main-content">
        <section
          className="section-padding text-center"
          style={{ background: 'var(--gradient-bg)' }}
        >
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">Contact</h1>
            <p className="text-xl text-text mb-8 leading-relaxed max-w-2xl mx-auto">
              Reach out securely for questions, appointment requests, or more information. Your
              privacy is respected.
            </p>
          </div>
        </section>
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10">
              {/* Netlify/Formspree form integration */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6 max-w-2xl mx-auto"
                autoComplete="off"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={touched.name && !form.name.trim()}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="form-input"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={touched.email && !isEmailValid(form.email)}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="form-textarea"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={touched.message && !form.message.trim()}
                    aria-required="true"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-center ${!isFormValid ? 'opacity-60 cursor-not-allowed' : ''}`}
                  disabled={!isFormValid}
                  aria-disabled={!isFormValid}
                >
                  Send Message
                </button>
              </form>
              <div className="mt-12 pt-8 border-t border-gray-100 text-text text-sm max-w-2xl mx-auto">
                <p>
                  <strong>Practice Location:</strong> 123 Wellness Way, Suite 200, Your City, ST
                  12345
                </p>
                <p>
                  <strong>Service Area:</strong> In-person (Your City) & Virtual (Statewide)
                </p>
                <p>
                  <strong>Business Hours:</strong> Mon–Fri 9am–6pm
                </p>
                <p className="mt-4 text-red-700 bg-red-50 p-2 rounded">
                  <strong>Emergency:</strong> If you are experiencing a crisis or mental health
                  emergency, call 988 or go to the nearest emergency room. This form is not
                  monitored 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
