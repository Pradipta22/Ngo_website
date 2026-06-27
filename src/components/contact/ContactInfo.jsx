import React from 'react';

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark tracking-tight mb-3 font-display">
          Get In Touch
        </h2>
        <p className="font-body text-sm text-medium leading-relaxed">
          Have questions or want to collaborate? Reach out to us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1: Phone */}
        <div className="flex gap-4 bg-cream border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
          <span className="text-3xl select-none mt-1">📞</span>
          <div>
            <h4 className="font-display font-bold text-base text-dark mb-1">
              Phone
            </h4>
            <p className="font-body text-sm text-medium leading-relaxed">
              <a href="tel:+1XXXXXXXXXX" className="hover:text-primary transition-colors">+1 XXX XXX XXXX</a>
            </p>
            <p className="font-body text-sm text-medium leading-relaxed">
              <a href="tel:+1XXXXXXXXXX" className="hover:text-primary transition-colors">+1 XXX XXX XXXX</a>
            </p>
          </div>
        </div>

        {/* Card 2: Email */}
        <div className="flex gap-4 bg-cream border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
          <span className="text-3xl select-none mt-1">📧</span>
          <div>
            <h4 className="font-display font-bold text-base text-dark mb-1">
              Email
            </h4>
            <p className="font-body text-sm text-medium leading-relaxed">
              <a href="mailto:info@ngo.org" className="hover:text-primary transition-colors">info@ngo.org</a>
            </p>
            <p className="font-body text-sm text-medium leading-relaxed">
              <a href="mailto:support@ngo.org" className="hover:text-primary transition-colors">support@ngo.org</a>
            </p>
          </div>
        </div>

        {/* Card 3: Address */}
        <div className="flex gap-4 bg-cream border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
          <span className="text-3xl select-none mt-1">📍</span>
          <div>
            <h4 className="font-display font-bold text-base text-dark mb-1">
              Address
            </h4>
            <p className="font-body text-sm text-medium leading-relaxed">
              123 NGO Street<br />
              City, State<br />
              Country
            </p>
          </div>
        </div>

        {/* Card 4: Working Hours */}
        <div className="flex gap-4 bg-cream border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
          <span className="text-3xl select-none mt-1">🕐</span>
          <div>
            <h4 className="font-display font-bold text-base text-dark mb-1">
              Working Hours
            </h4>
            <p className="font-body text-sm text-medium leading-relaxed">
              Mon – Fri: 9:00 AM – 6:00 PM
            </p>
            <p className="font-body text-sm text-medium leading-relaxed">
              Sat: 10:00 AM – 2:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
