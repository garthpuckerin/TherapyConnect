import { useState } from 'react';

// Skip to content link for accessibility
const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only absolute top-2 left-2 bg-accent text-surface px-4 py-2 rounded z-50"
  >
    Skip to main content
  </a>
);

const Book: React.FC = () => {
  // Booking form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    datetime: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  // Validate form
  const isFormValid =
    form.name.trim() !== '' &&
    form.email.trim() !== '' &&
    form.sessionType.trim() !== '' &&
    form.datetime.trim() !== '' &&
    form.message.trim() !== '';

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSuccess(false);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSuccess(true);
    setForm({
      name: '',
      email: '',
      phone: '',
      sessionType: '',
      datetime: '',
      message: '',
    });
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
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">Book a Session</h1>
            <p className="text-xl text-text mb-8 leading-relaxed max-w-2xl mx-auto">
              Schedule your session at a time that works for you. All appointments are confidential
              and secure.
            </p>
          </div>
        </section>
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10">
              <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
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
                    aria-required="true"
                    aria-invalid={!form.name.trim()}
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
                    className="form-input"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!form.email.trim()}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="sessionType" className="block text-sm font-medium text-text mb-1">
                    Session Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="sessionType"
                    name="sessionType"
                    className="form-input"
                    value={form.sessionType}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!form.sessionType.trim()}
                  >
                    <option value="">Select...</option>
                    <option value="Individual">Individual Therapy</option>
                    <option value="Couples">Couples Therapy</option>
                    <option value="Family">Family Therapy</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="datetime" className="block text-sm font-medium text-text mb-1">
                    Preferred Date & Time <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="datetime"
                    name="datetime"
                    type="datetime-local"
                    className="form-input"
                    value={form.datetime}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!form.datetime.trim()}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!form.message.trim()}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 text-center ${!isFormValid ? 'opacity-60 cursor-not-allowed' : ''}`}
                  disabled={!isFormValid}
                  aria-disabled={!isFormValid}
                >
                  Submit Booking Request
                </button>
                {success && (
                  <div className="text-success text-center mt-4">
                    Your booking request has been sent!
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Book;
