import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  subject: '',
  message: '',
  website: '',
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email us directly.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 md:p-12 rounded-[30px] md:rounded-[50px] shadow-xl border border-gray-50 text-center">
        <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-brand-navy mb-3">Inquiry Received</h3>
        <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Our trade specialists will review your requirements and respond within 12 business hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-brand-teal font-bold text-sm uppercase tracking-widest hover:text-brand-navy transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-12 rounded-[30px] md:rounded-[50px] shadow-xl border border-gray-50 space-y-5 md:space-y-6"
    >
      <div className="mb-2">
        <h3 className="text-xl md:text-2xl font-black text-brand-navy tracking-tight">Submit Your Inquiry</h3>
        <p className="text-sm text-gray-500 mt-1">All fields marked with * are required.</p>
      </div>

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all font-medium text-sm md:text-base"
            required
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Corporate Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all font-medium text-sm md:text-base"
            required
            disabled={status === 'loading'}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your organization"
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all font-medium text-sm md:text-base"
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+92 300 0000000"
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all font-medium text-sm md:text-base"
            disabled={status === 'loading'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          Subject *
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="Import inquiry, partnership, logistics..."
          className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all font-medium text-sm md:text-base"
          required
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your trade or logistics requirements..."
          rows={5}
          className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all font-medium resize-none text-sm md:text-base"
          required
          disabled={status === 'loading'}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
          <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-navy text-brand-snow py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg tracking-tight hover:bg-brand-red transition-all shadow-xl active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {status === 'loading' ? (
          <>
            <span className="loading-spinner w-5 h-5 border-2" />
            Submitting...
          </>
        ) : (
          <>
            Submit Strategic Inquiry
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
