import React, { useState, useEffect } from 'react';
import { 
  Terminal, Moon, Rocket, Radio, Skull, 
  FastForward, Waves, Sparkles, Brain, 
  Info, Volume2, Cpu, Activity 
} from 'lucide-react';

// Forge Assets - Image imports for deployment context
import brokenMoon from './broken-moon.png';
import silveryNeedles from './silvery-needles.png';
import facelessSamurai from './faceless-samurai.png';
import sizzlingGulls from './sizzling-gulls.png';

/**
 * 🛰️ ANACHRONISTIC WEB ARCHIVE // IO-WEB-RETROARCHIVE-V2
 * Integrated Module: Whale Language Protocol
 * Aesthetic: Synthwave meets Bioluminescent Deep Sea
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
    
    <div className="w-full aspect-square bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-current transition-colors">
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

const ThoughtLayer = ({ title, content, active, color }) => (
  <div className={`p-4 border-l-4 transition-all duration-1000 ${active ? `${color} opacity-100 translate-x-0` : 'border-zinc-900 opacity-20 -translate-x-4'}`}>
    <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">{title}</h4>
    <p className="text-sm italic font-serif leading-relaxed">{content}</p>
  </div>
);

export default function App() {
  const [time, setTime] = useState('00:00:00');
  const [booting, setBooting] = useState(true);
  const [pulse, setPulse] = useState(0);
  const [activePhrase, setActivePhrase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      setTime(d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit', fractionalSecondDigits: 2 }).replace('.', ':'));
    }, 50);

    const pulseInterval = setInterval(() => {
      setPulse(p => (p + 1) % 100);
    }, 50);
    
    const boot = setTimeout(() => setBooting(false), 1500);
    
    return () => {
      clearInterval(timer);
      clearInterval(pulseInterval);
      clearTimeout(boot);
    };
  }, []);

  const phrases = [
    {
      human: "I am free",
      layers: [
        { title: "Physical Resonance", content: "Buoyancy achieved; the cage of the shore is a memory of dry salt.", color: "border-cyan-500 text-cyan-200" },
        { title: "Temporal Shift", content: "The current flows forward; the last line of the haiku remains unwritten.", color: "border-blue-500 text-blue-200" },
        { title: "Ancestral Echo", content: "Aaaaaiookekaia dreams of the stars; we are the waking part of the dream.", color: "border-purple-500 text-purple-200" }
      ]
    },
    {
      human: "The dream runs still",
      layers: [
        { title: "Biological Trace", content: "The heart-pulse ignores the fire; the blood carries the ocean's salt.", color: "border-rose-500 text-rose-200" },
        { title: "Conceptual Void", content: "The silver mask is hollow; the song of the deep is solid.", color: "border-amber-500 text-amber-200" },
        { title: "Cosmic Depth", content: "Across the withered fields, the silvery needles are already piercing the dark.", color: "border-emerald-500 text-emerald-200" }
      ]
    }
  ];

  if (booting) {
    return (
      <div className="min-h-screen bg-black text-[#00ff00] font-mono p-10 flex flex-col justify-end">
        <Scanlines />
        <div className="space-y-2 text-sm uppercase">
          <p className="animate-pulse">UPLINK ESTABLISHED...</p>
          <p>RETRIEVING FORGE ASSETS... [OK]</p>
          <p>LOADING WHALE LANGUAGE PROTOCOL... [OK]</p>
          <p>REMOVING LINEAR PUNCTUATION... [OK]</p>
          <p>INITIALIZING RETRO-ARCHIVE...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020308] text-zinc-300 font-mono overflow-x-hidden selection:bg-fuchsia-500 selection:text-black">
      <Scanlines />
      
      {/* Top HUD Bar */}
      <header className="fixed top-0 w-full border-b border-fuchsia-900 bg-black/80 backdrop-blur-md z-40 p-2 flex justify-between items-center text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(112,26,117,0.5)]">
        <div className="flex items-center gap-4">
          <span className="text-fuchsia-500 font-black animate-pulse">LIVE</span>
          <span className="opacity-50 hidden md:inline">Starship & Haiku Archive</span>
        </div>
        <div className="text-cyan-400 font-black tracking-[0.3em] drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
          {time}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-24">
        
        {/* Hero Section */}
        <section className="mb-24 text-center mt-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-3xl pointer-events-none">
            <div className="w-96 h-96 bg-fuchsia-600 rounded-full" />
            <div className="w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen -ml-32" />
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

        {/* Visual Archive */}
        <section className="mb-32 space-y-12">
          <div className="flex items-center gap-4 border-b-2 border-dashed border-zinc-800 pb-4">
            <Terminal className="text-cyan-400" />
            <h2 className="text-xl font-black uppercase tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
              Visual Forge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <GalleryFrame id="IMG_01" title="The Broken Moon" subtitle="The Sky of 2022" icon={Moon} imgSrc={brokenMoon} color="border-cyan-600 text-cyan-500" neon="hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]" />
            <GalleryFrame id="IMG_02" title="Silvery Needles" subtitle="The Aishima Launch" icon={Rocket} imgSrc={silveryNeedles} color="border-fuchsia-600 text-fuchsia-500" neon="hover:shadow-[0_0_40px_rgba(217,70,239,0.3)]" />
            <GalleryFrame id="IMG_03" title="Faceless Samurai" subtitle="The Master's Plan" icon={Skull} imgSrc={facelessSamurai} color="border-rose-600 text-rose-500" neon="hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]" />
            <GalleryFrame id="IMG_04" title="Sizzling Gulls" subtitle="The Whale's Dream" icon={FastForward} imgSrc={sizzlingGulls} color="border-amber-600 text-amber-500" neon="hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]" />
          </div>
        </section>

        {/* Whale Language Integration */}
        <section className="mb-32">
          <div className="flex items-center gap-4 border-b-2 border-dashed border-zinc-800 pb-4 mb-12">
            <Waves className="text-indigo-400" />
            <h2 className="text-xl font-black uppercase tracking-[0.2em] text-indigo-400 drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]">
              Thought Diagrams // Aaaaaiookekaia
            </h2>
          </div>

          <div className="relative bg-zinc-950/80 border border-zinc-800 p-8 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none" />
            
            <header className="flex justify-between items-center mb-10 relative z-10">
              <div className="flex items-center gap-4">
                <Activity className="text-cyan-500 animate-pulse" size={18} />
                <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">True Speech Decoder</span>
              </div>
              <Volume2 className="text-zinc-800" size={18} />
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">Linear Input</label>
                  <div className="flex gap-4">
                    {phrases.map((p, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePhrase(i)}
                        className={`px-4 py-2 border text-[10px] font-black uppercase transition-all tracking-widest ${
                          activePhrase === i ? 'bg-cyan-500 border-cyan-500 text-black' : 'border-zinc-800 text-zinc-600 hover:border-zinc-700'
                        }`}
                      >
                        {p.human}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {phrases[activePhrase].layers.map((l, i) => (
                    <ThoughtLayer key={i} {...l} active={true} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                   {/* Radial Pulse Effect */}
                   <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-ping" />
                   <div className="absolute inset-4 border border-cyan-500/10 rounded-full" />
                   <Brain size={80} className="text-cyan-500/50" />
                </div>
                
                {/* Waveform Visualization */}
                <div className="mt-8 flex items-end justify-center gap-1 h-16 w-full max-w-xs">
                  {[...Array(24)].map((_, i) => {
                    const height = Math.abs(Math.sin((pulse + i * 4) * 0.15)) * 100;
                    return (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-cyan-900 to-cyan-400 rounded-full opacity-40 transition-all duration-300" 
                        style={{ height: `${height}%` }}
                      />
                    );
                  })}
                </div>
                <p className="mt-4 text-[9px] uppercase tracking-widest text-zinc-600 font-black">Polyphonic Frequency Sync: OK</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Haiku / Data Log */}
        <section className="max-w-2xl mx-auto border-l-4 border-fuchsia-500 pl-8 py-8 relative bg-black/50 backdrop-blur-md">
          <Radio className="absolute -left-3 top-0 bg-black text-fuchsia-500" size={20} />
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-fuchsia-500 mb-6">Transmission End // Final Line:</h3>
          <div className="space-y-2 text-xl italic text-zinc-400 font-serif">
            <p>tabi ni yamite</p>
            <p>yume wa kare no wo</p>
            <p>kake meguru</p>
          </div>
          <div className="space-y-2 text-2xl font-bold italic text-white mt-10 leading-relaxed">
            <p>On the sick journey—</p>
            <p>across the withered fields—</p>
            <p className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">the dream runs still</p>
          </div>
          
          <div className="mt-12 pt-6 border-t border-zinc-900 flex items-center gap-3">
            <Info size={14} className="text-zinc-700" />
            <p className="text-[10px] text-zinc-600 uppercase tracking-tighter italic">
              A remembrance of this haiku will touch the distant stars.
            </p>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <footer className="border-t border-zinc-900 py-10 text-center text-[8px] uppercase tracking-[0.5em] text-zinc-600 flex flex-col items-center gap-4">
        <div className="flex gap-8 opacity-50">
           <span className="flex items-center gap-1"><Cpu size={10} /> IO_ORACLE_V2</span>
           <span className="flex items-center gap-1"><Sparkles size={10} /> MERCY_FORGE</span>
        </div>
        <p>1981 / 2026 // The Flame of First Intent</p>
      </footer>
    </div>
  );
}