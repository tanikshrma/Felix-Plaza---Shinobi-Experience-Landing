import React, { useMemo } from 'react';

export const EmberParticles = ({ count = 16, className = '' }) => {
  // Generate stable deterministic particle properties
  const embers = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 100) / count + (i % 3) * 3}%`,
      size: `${3 + (i % 4) * 2}px`,
      duration: `${4 + (i % 5) * 1.5}s`,
      delay: `${(i * 0.4) % 4}s`,
      opacity: 0.4 + (i % 4) * 0.15,
      color: i % 4 === 0 ? '#FFD21F' : i % 4 === 1 ? '#FF6A00' : i % 4 === 2 ? '#F50087' : '#18D5C5',
    }));
  }, [count]);

  return (
    <div 
      aria-hidden="true" 
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {embers.map((ember) => (
        <span
          key={ember.id}
          className="absolute rounded-full animate-ember"
          style={{
            left: ember.left,
            bottom: '5%',
            width: ember.size,
            height: ember.size,
            backgroundColor: ember.color,
            boxShadow: `0 0 10px ${ember.color}, 0 0 16px ${ember.color}`,
            animationDuration: ember.duration,
            animationDelay: ember.delay,
            opacity: ember.opacity,
          }}
        />
      ))}
    </div>
  );
};
