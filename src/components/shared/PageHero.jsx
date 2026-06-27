import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ title, backgroundImage, breadcrumbs = [] }) {
  return (
    <section 
      className="relative min-h-[300px] md:min-h-[350px] flex items-center bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-dark/85 to-dark/50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-display">
            {title}
          </h1>
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-white/70 text-sm md:text-base" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-white/40">›</span>
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
