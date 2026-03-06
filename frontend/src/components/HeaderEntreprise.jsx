import { useState, useEffect } from 'react';

export default function HeaderEntreprise() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300 h-20
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200/70'
          : 'bg-white/80 backdrop-blur-md border-b border-transparent'}
      `}
    >
      <div className="h-full px-6 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <a
            href="/dashboard"
            className="
              text-2xl font-extrabold tracking-tight
              bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600
              bg-clip-text text-transparent hover:opacity-90 transition-opacity
            "
          >
            StageTrack
          </a>
          
        </div>
      </div>
    </header>
  );
}
