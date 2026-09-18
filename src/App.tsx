import React from 'react';
import { ShinobiPosterLanding } from './components/ShinobiPosterLanding';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#FFF1D6] selection:bg-[#FF6A00] selection:text-white relative">
      <main>
        {/* Master Poster Landing Layout - Faithfully matching Reference Image */}
        <ShinobiPosterLanding />
      </main>
    </div>
  );
}

