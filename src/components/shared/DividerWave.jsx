import React from 'react';

export default function DividerWave({ type }) {
  // Types: 'white-cream', 'cream-white', 'white-alt', 'alt-white'
  
  let fill = '#FFFFFF';
  let path = '';
  
  if (type === 'white-cream') {
    fill = '#FAF8F5'; // cream
    path = 'M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z';
  } else if (type === 'cream-white') {
    fill = '#FFFFFF'; // white
    path = 'M0,64L120,53.3C240,43,480,21,720,21.3C960,21,1200,43,1320,53.3L1440,64L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z';
  } else if (type === 'white-alt') {
    fill = '#F4F0EA'; // alt (deep cream)
    path = 'M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z';
  } else if (type === 'alt-white') {
    fill = '#FFFFFF'; // white
    path = 'M0,64L120,53.3C240,43,480,21,720,21.3C960,21,1200,43,1320,53.3L1440,64L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z';
  }

  return (
    <div 
      className="relative w-full overflow-hidden pointer-events-none z-10" 
      style={{ height: '60px', marginTop: '-59px' }}
    >
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none" 
        className="w-full h-full block"
      >
        <path fill={fill} d={path}></path>
      </svg>
    </div>
  );
}
