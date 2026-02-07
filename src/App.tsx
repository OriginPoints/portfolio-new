import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    // Disable DevTools shortcuts & Zoom
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') e.preventDefault();
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && (['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key))) e.preventDefault();
      // Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) e.preventDefault();

      // Prevent Zoom (Ctrl + +, Ctrl + -, Ctrl + 0)
      if (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
      }
    };

    // Disable Ctrl + Scroll Zoom
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false }); // passive: false needed to preventDefault

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      className="container"
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        minHeight: '100vh', fontFamily: "'Outfit', sans-serif", color: '#e2e8f0'
      }}
    >
      {/* Logo Section */}
      <div className="logo-container" style={{ marginBottom: '1rem' }}>
        <img
          src="https://i.ibb.co/LdrsqLwW/OPtext.png" alt="OP Logo"
          style={{ width: '80px', height: 'auto', filter: 'brightness(1.5) drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
        />
      </div>

      {/* Subtext */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.9rem', color: '#e2e8f0', letterSpacing: '0.5px', margin: 0 }}>
          designer, editor, programmer, 3D compositor
        </p>
      </div>

      {/* Skills Icons - Static */}
      <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', alignItems: 'center' }}>
        <SkillImage src="https://i.ibb.co/qY4W81PL/512px-Adobe-Photoshop-CC-icon-svg.png" alt="Photoshop" scale={0.8} />
        <SkillImage src="https://i.ibb.co/gM624zKn/ae.png" alt="After Effects" scale={1.2} />
        <SkillImage src="https://i.ibb.co/Txw0j6c7/icons8-cinema-4d-100.png" alt="Cinema 4D" scale={.85} />
        <SkillImage src="https://i.ibb.co/m5Qft1zd/quixel.png" alt="Quixel" scale={.8} />
      </div>
    </div>
  );
};

const SkillImage = ({ src, alt, scale = 1 }: { src: string, alt: string, scale?: number }) => (
  <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px' }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        transform: `scale(${scale})`
      }}
    />
  </div>
);

export default App;