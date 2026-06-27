import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function ScrollReveal({ 
  children, 
  direction = 'up', // 'up', 'left', 'right', 'scale'
  delay = 0,        // 0, 1, 2, 3, 4, 5
  className = '' 
}) {
  const ref = useScrollReveal();
  
  const revealClass = `reveal-${direction}`;
  const delayClass = delay > 0 ? `delay-${delay}` : '';
  
  // Since we might want to wrap custom elements or keep layout clean,
  // we render a div that has the ref and classes.
  return (
    <div 
      ref={ref} 
      className={`${revealClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
