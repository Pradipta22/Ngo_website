import React from 'react';

export default function SectionHeader({ label, title, subtitle, className = '' }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4 reveal-up ${className}`}>
      {label && (
        <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-3">
          {label}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base md:text-lg text-medium font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
