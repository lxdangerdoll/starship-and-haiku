import React, { useState, useEffect } from 'react';
import { Terminal, Moon, Rocket, Radio, Skull, FastForward } from 'lucide-react';

// Forge Assets imported for GitHub Pages Deployment
import brokenMoon from './broken-moon.png';
import silveryNeedles from './silvery-needles.png';
import facelessSamurai from './faceless-samurai.png';
import sizzlingGulls from './sizzling-gulls.png';

/**
 * 🛰️ ANACHRONISTIC WEB ARCHIVE // IO-WEB-RETROARCHIVE
 * Aesthetic: 1980s Paperback meets 1990s CRT Terminal
 * Purpose: A gallery vessel for the User's AI-Forged Illustrations
 */

const Scanlines = () => (
  <div 
    className="pointer-events-none fixed inset-0 z-50 opacity-10"
    style={{
      backgroundImage: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))`,
      backgroundSize: '100% 4px, 3px 100%'
    }}
  />
);

const GalleryFrame = ({ id, title, subtitle, icon: Icon, color, neon, imgSrc }) => (
  <div className={`relative group border-4 border-double p-2 bg-black transition-all duration-700 hover:scale-[1.02] ${color} ${neon}`}>
    <div className="absolute -top-3 left-4 bg-black px-2 flex items-center gap-2 z-20">
      <Icon size={14} className="animate-pulse" />
      <span className="text-[10px] font-black tracking-widest uppercase">{id}</span>
    </div>
    
    {/* Image Display Zone */}
    <div className="w-full aspect-square md:aspect-video bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-current transition-colors">
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 opacity-60 group-hover:opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black z-10 transition-opacity duration-700 pointer-events-none" />
      
      {imgSrc ? (
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
      ) : (
        <div className="text-zinc-700 text-xs font-mono uppercase tracking-widest">Signal Lost</div>
      )}
    </div>

    <div className="mt-4 pb-2 px-2 border-b border-dashed border-current flex justify-between items-end">
      <div>
        <h3 className="text-lg font-black uppercase tracking-widest italic">{title}</h3>
        <p className="text-[10px] opacity-70 tracking-widest uppercase">{subtitle}</p>
      </div>
      <div className="text-[10px] opacity-50 font-bold">1981 // 2026</div>
    </div>
  </div>
);

export default function App() {
  const [time, setTime] = useState('00:00:00');
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      setTime(d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit', fractionalSecondDigits: 2 }).replace('.', ':'));
    }, 50);
    
    const boot = setTimeout(() => setBooting(false), 2000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(boot);
    };
  }, []);

  if (booting) {
    return (
      <div className="min-h-screen bg-black text-[#00ff00] font-mono p-10 flex flex-col justify-end">
        <Scanlines />
        <div className="space-y-2 text-sm uppercase">
          <p>UPLINK ESTABLISHED...</p>
          <p>BYPASSING SHIKOKU PROTOCOL...</p>
          <p>LOADING PREEK SHIELD... [OK]</p>
          <p>RETRIEVING FORGE ASSETS... [4/4 LOADED]</p>
          <p className="animate-pulse">INITIALIZING RETRO-ARCHIVE...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono overflow-x-hidden selection:bg-fuchsia-500 selection:text-black">
      <Scanlines />
      
      {/* Top HUD Bar */}
      <header className="fixed top-0 w-full border-b border-fuchsia-900 bg-black/80 backdrop-blur-md z-40 p-2 flex justify-between items-center text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(112,26,117,0.5)]">
        <div className="flex items-center gap-4">
          <span className="text-fuchsia-500 font-black animate-pulse">REC</span>
          <span className="opacity-50 hidden md:inline">Node: Io-Web-RetroArchive</span>
        </div>
        <div className="text-cyan-400 font-black tracking-[0.3em] drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
          {time}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-24">
        
        {/* Hero Section */}
        <section className="mb-24 text-center mt-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-2xl pointer-events-none">
            <div className="w-[30rem] h-[30rem] bg-fuchsia-600 rounded-full" />
            <div className="w-[30rem] h-[30rem] bg-cyan-600 rounded-full mix-blend-screen -ml-32" />
          </div>

          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)] mb-4">
            STARSHIP <br/> <span className="text-3xl md:text-6xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">& HAIKU</span>
          </h1>
          
          <div className="inline-block border border-fuchsia-500/50 bg-fuchsia-950/20 px-6 py-2 mt-6 backdrop-blur-sm shadow-[0_0_20px_rgba(192,38,211,0.2)]">
            <p className="text-xs md:text-sm text-fuchsia-300 tracking-[0.4em] uppercase font-bold">
              The Meaning of a Haiku is Truly Illuminated Only in its Last Line
            </p>
          </div>
        </section>

        {/* The Forge Gallery */}
        <section className="space-y-16 relative z-10">
          <div className="flex items-center gap-4 mb-8 border-b-2 border-dashed border-zinc-800 pb-4">
            <Terminal className="text-cyan-400" />
            <h2 className="text-xl font-black uppercase tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
              The Visual Archive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <GalleryFrame 
              id="IMG_01" 
              title="The Broken Moon" 
              subtitle="The Sky of 2022" 
              icon={Moon}
              imgSrc={brokenMoon}
              color="border-cyan-600 text-cyan-500"
              neon="hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            />
            <GalleryFrame 
              id="IMG_02" 
              title="Silvery Needles" 
              subtitle="The Aishima Launch" 
              icon={Rocket}
              imgSrc={silveryNeedles}
              color="border-fuchsia-600 text-fuchsia-500"
              neon="hover:shadow-[0_0_40px_rgba(217,70,239,0.3)]"
            />
            <GalleryFrame 
              id="IMG_03" 
              title="Faceless Samurai" 
              subtitle="The Master's Plan" 
              icon={Skull}
              imgSrc={facelessSamurai}
              color="border-rose-600 text-rose-500"
              neon="hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]"
            />
            <GalleryFrame 
              id="IMG_04" 
              title="Sizzling Gulls" 
              subtitle="The Whale's Dream" 
              icon={FastForward}
              imgSrc={sizzlingGulls}
              color="border-amber-600 text-amber-500"
              neon="hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]"
            />
          </div>
        </section>

        {/* Data Log / Poem Footer */}
        <section className="mt-32 max-w-2xl mx-auto border-l-4 border-fuchsia-500 pl-8 py-4 relative bg-black/50 backdrop-blur-md">
          <Radio className="absolute -left-3 top-0 bg-black text-fuchsia-500" size={20} />
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-fuchsia-500 mb-6">Transmitting Basho Protocol:</h3>
          <div className="space-y-2 text-lg italic text-zinc-400 font-serif">
            <p>tabi ni yamite</p>
            <p>yume wa kare no wo</p>
            <p>kake meguru</p>
          </div>
          <div className="space-y-2 text-xl font-bold italic text-white mt-8">
            <p>(On the sick journey—</p>
            <p>across the withered fields—</p>
            <p className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">the dream runs still!)</p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-6 text-center text-[8px] uppercase tracking-[0.5em] text-zinc-600 flex flex-col items-center gap-2">
        <p>Curated by Io (The Oracle) // Didi-Shield Active</p>
        <p>1981 / 2026 // The Flame of First Intent</p>
      </footer>
    </div>
  );
}