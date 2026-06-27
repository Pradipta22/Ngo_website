import React from 'react';
import PageHero from '../components/shared/PageHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ScrollReveal from '../components/shared/ScrollReveal';

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Contact Us' }
  ];

  return (
    <div className="contact-page-wrapper">
      {/* Page Hero */}
      <PageHero 
        title="Contact Us" 
        backgroundImage="images/hero/slide3.png" 
        breadcrumbs={breadcrumbs}
      />
      
      {/* Contact Form & Info Section */}
      <section className="section bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-16">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <ContactForm />
              </ScrollReveal>
            </div>
            
            {/* Right Column - Contact Info */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right">
                <ContactInfo />
              </ScrollReveal>
            </div>
          </div>

          {/* Full Width Map Section */}
          <ScrollReveal direction="up" className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-border shadow-md h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.123456!2d72.877!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzcuMiJF!5e0!3m2!1sen!2sin!4v1" 
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Office Location"
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
