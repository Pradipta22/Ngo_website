import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function TeamSection({ id, label, title, subtitle, members = [], bgClass = 'bg-white' }) {
  // Helper to extract initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2);
  };

  return (
    <section className={`section py-24 ${bgClass}`} id={id}>
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label={label}
            title={title}
            subtitle={subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {members.map((member, idx) => (
            <ScrollReveal 
              key={idx} 
              direction="scale" 
              delay={idx + 1}
              className="h-full"
            >
              <div className="bg-white border border-border shadow-sm rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-center">
                {/* Avatar Placeholder with Custom Gradient */}
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-display font-black text-2xl shadow-inner select-none"
                     style={{ background: member.gradient }}>
                  {getInitials(member.name)}
                </div>
                
                {/* Info */}
                <h3 className="font-display font-bold text-lg text-dark mb-1">
                  {member.name}
                </h3>
                <div className="font-body text-xs font-bold text-primary uppercase tracking-wider mb-4">
                  {member.role}
                </div>
                <p className="font-body text-xs sm:text-sm text-medium leading-relaxed flex-grow text-center">
                  {member.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
