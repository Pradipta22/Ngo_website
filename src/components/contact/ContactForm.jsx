import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Clear toast after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white border border-border shadow-xl rounded-3xl p-8 md:p-10 relative">
      <h2 className="text-2xl md:text-3xl font-extrabold text-dark tracking-tight mb-3 font-display">
        Send Us a Message
      </h2>
      <p className="font-body text-sm text-medium leading-relaxed mb-8">
        Have a question or want to get involved? Fill out the form below and we'll get back to you as soon as possible.
      </p>

      {/* Success Toast */}
      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2 animate-fade-in">
          <span>✅</span> Message sent successfully! We will contact you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-bold text-dark uppercase tracking-wider">
              Full Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-dark outline-none focus:border-primary focus:bg-white transition-all font-body"
            />
          </div>
          
          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold text-dark uppercase tracking-wider">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-dark outline-none focus:border-primary focus:bg-white transition-all font-body"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-bold text-dark uppercase tracking-wider">
              Phone Number
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-dark outline-none focus:border-primary focus:bg-white transition-all font-body"
            />
          </div>
          
          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-xs font-bold text-dark uppercase tracking-wider">
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              required
              placeholder="Message subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-dark outline-none focus:border-primary focus:bg-white transition-all font-body"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-bold text-dark uppercase tracking-wider">
            Message
          </label>
          <textarea 
            id="message" 
            name="message" 
            required
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-dark outline-none focus:border-primary focus:bg-white transition-all font-body resize-y"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className="bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 w-full sm:w-max self-start"
        >
          {loading ? (
            <>
              {/* Spinner */}
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message →'
          )}
        </button>
      </form>
    </div>
  );
}
