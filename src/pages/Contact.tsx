import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import SEO from '../components/SEO';
import { submitForm, isValidEmail, sanitizeInput } from '../utils/formSubmission';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(
    null,
  );

  const isFormValid =
    form.name.trim().length > 0 && isValidEmail(form.email) && form.message.trim().length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: sanitizeInput(value) }));
    // Clear submit result when user starts typing again
    if (submitResult) {
      setSubmitResult(null);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await submitForm('contact', {
        name: form.name,
        email: form.email,
        message: form.message,
      });

      setSubmitResult(result);

      if (result.success) {
        // Reset form on success
        setForm({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with our therapy practice. Secure contact form for questions, appointment requests, and more information about our services."
        keywords="contact therapist, therapy appointment, mental health contact, secure contact form"
      />
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
              {/* Contact form with submission handling */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6 max-w-2xl mx-auto"
                autoComplete="off"
                onSubmit={handleSubmit}
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
                    aria-describedby={touched.name && !form.name.trim() ? 'name-error' : undefined}
                    aria-required="true"
                  />
                  {touched.name && !form.name.trim() && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      Name is required
                    </p>
                  )}
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
                    aria-invalid={touched.email && !isValidEmail(form.email)}
                    aria-describedby={
                      touched.email && !isValidEmail(form.email) ? 'email-error' : undefined
                    }
                    aria-required="true"
                  />
                  {touched.email && !isValidEmail(form.email) && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      Please enter a valid email address
                    </p>
                  )}
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
                    aria-describedby={
                      touched.message && !form.message.trim() ? 'message-error' : undefined
                    }
                    aria-required="true"
                  ></textarea>
                  {touched.message && !form.message.trim() && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                      Message is required
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-center flex items-center justify-center ${!isFormValid || isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                  disabled={!isFormValid || isSubmitting}
                  aria-disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2 text-white" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Submit result feedback */}
                {submitResult && (
                  <div
                    className={`p-4 rounded-lg text-center ${
                      submitResult.success
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {submitResult.message}
                  </div>
                )}
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
