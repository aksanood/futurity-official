import React, { useState } from 'react';
import { inquiriesService } from '@/services/inquiriesService';
import { toast } from '@/hooks/use-toast';

interface ContactFormProps {
  source?: string;
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ source = 'homepage', onSuccess }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'From Homepage',
    message: 'From Homepage',
    source,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await inquiriesService.createInquiry(form);
      toast({ title: 'Thank you!', description: 'We received your inquiry and will be in touch soon.' });
      setForm({ ...form, name: '', email: '', phone: '' });
      if (onSuccess) onSuccess();
    } catch (err) {
      toast({ title: 'Submission failed', description: 'Please try again or contact us directly.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-futurity-blue mb-1">Grow Your Business</h2>
      <p className="text-gray-700 mb-2">by partnering with Futurity.</p>
      <div className="w-16 h-1 bg-futurity-blue mb-4" style={{ height: '5px', borderRadius: '2px' }}></div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="hidden" name="subject" value="From Homepage" />
        <input type="hidden" name="message" value="From Homepage" />
        <input type="hidden" name="source" value={source} />
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {/* Person SVG */}
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4Z"/></svg>
          </span>
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-futurity-orange placeholder-gray-500" />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {/* Mail SVG */}
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="none"/><path d="M22 6.5V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.5M22 6.5 12 13 2 6.5"/></svg>
          </span>
          <input type="email" name="email" placeholder="Email address" value={form.email} onChange={handleChange} required className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-futurity-orange placeholder-gray-500" />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {/* Call SVG */}
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.92a2 2 0 0 1 .88-1.65l3.12-2.08a2 2 0 0 1 2.24 0l2.12 1.41a2 2 0 0 0 2.24 0l2.12-1.41a2 2 0 0 1 2.24 0l3.12 2.08a2 2 0 0 1 .88 1.65Z"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </span>
          <input type="tel" name="phone" placeholder="Telephone number" value={form.phone} onChange={handleChange} className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-futurity-orange placeholder-gray-500" />
        </div>
        <button type="submit" disabled={loading} className="mt-2 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg text-lg transition-colors disabled:opacity-60">
          {loading ? 'Submitting...' : (<><span>Get your free proposal</span>
          {/* Arrow SVG */}
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></>)}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
