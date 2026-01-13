import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { LuCircle, LuChevronRight } from 'react-icons/lu';
import { Reveal } from '@/components/motion/Reveal';
import { SignatureInteraction } from '@/components/effects/SignatureInteraction';

// --- Styles & Constants ---
// Mapping CSS variables to constants for usage in inline styles or Tailwind classes
const COLORS = {
  bgDeep: '#050505',
  bgPanel: '#0F0F0F',
  textMain: '#EAEAEA',
  textMuted: '#888888',
  accent: '#FF5F1F',
  border: '#2A2A2A',
};

const FONTS = {
  head: '"Inter", sans-serif',
  mono: '"JetBrains Mono", monospace',
};

export default function Index() {
  // --- Hero Mouse Parallax Logic ---
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: clientX / innerWidth,
      y: clientY / innerHeight,
    });
  };

  // --- Render ---
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#050505] text-[#EAEAEA] font-sans overflow-x-hidden">
      {/* Global Styles for Fonts & Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@400;500&display=swap');
        
        :root {
          --ease: cubic-bezier(0.23, 1, 0.32, 1);
        }

        body {
          background-color: ${COLORS.bgDeep};
          -webkit-font-smoothing: antialiased;
        }

        .font-mono-custom {
          font-family: ${FONTS.mono};
        }

        @keyframes pulse {
          0% { opacity: 1; box-shadow: 0 0 0 0 rgba(255, 95, 31, 0.4); }
          70% { opacity: 0.7; box-shadow: 0 0 0 10px rgba(255, 95, 31, 0); }
          100% { opacity: 1; box-shadow: 0 0 0 0 rgba(255, 95, 31, 0); }
        }

        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }

        /* Custom Scrollbar for Webkit */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${COLORS.bgDeep};
        }
        ::-webkit-scrollbar-thumb {
          background: ${COLORS.border};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${COLORS.accent};
        }
      `}</style>

      {/* --- RAIL NAVIGATION --- */}
      <aside className="w-full md:w-[280px] md:h-screen md:fixed left-0 top-0 border-b md:border-b-0 md:border-r border-[#2A2A2A] p-6 md:p-8 flex flex-row md:flex-col justify-between bg-[#050505]/80 backdrop-blur-md z-50">
        <div className="font-extrabold tracking-tighter text-2xl flex items-center gap-3">
          <div className="w-2 h-2 bg-[#FF5F1F] rounded-full animate-pulse-custom"></div>
          <span className="font-mono-custom">CORE / OS</span>
        </div>

        <ul className="hidden md:flex flex-col gap-6 list-none font-mono-custom text-xs uppercase tracking-wider">
          {['Platform', 'Telemetry', 'Solutions', 'Docs'].map((item) => (
            <li key={item} className="relative group pl-0 hover:pl-3 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <a href="#" className="flex items-center text-[#EAEAEA] hover:text-[#FF5F1F] transition-colors duration-300">
                <span className="absolute left-[-15px] opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 text-[#FF5F1F]">
                  <LuChevronRight size={12} />
                </span>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex flex-col gap-2 pt-6 border-t border-[#2A2A2A] text-[#888888] font-mono-custom text-xs uppercase tracking-wider">
          <span>Sys: Online</span>
          <span>Lat: 12ms</span>
          <span>Ver: 4.0.2</span>
        </div>

        {/* Mobile Menu Icon Placeholder (if needed, but not in original HTML) */}
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="w-full md:ml-[280px] relative">
        
        {/* HERO SECTION */}
        <header 
          ref={heroRef}
          onMouseMove={handleMouseMove}
          className="relative min-h-[90vh] flex flex-col justify-center p-6 md:p-24 border-b border-[#2A2A2A] overflow-hidden"
        >
          {/* Dynamic Background */}
          <div 
            className="absolute inset-0 z-[-1]"
            style={{
              background: `radial-gradient(circle at ${80 + (mousePos.x * 5)}% ${20 + (mousePos.y * 5)}%, #1a1a1a 0%, transparent 60%)`
            }}
          />

          <Reveal width="100%">
            <div className="flex gap-8 mb-8 text-[#FF5F1F] font-mono-custom text-xs uppercase tracking-wider">
              <span>// System Override</span>
              <span>// Network_Ready</span>
            </div>
          </Reveal>

          <Reveal width="100%">
            <h1 className="text-5xl md:text-8xl font-extrabold leading-[0.95] tracking-tighter mb-8 max-w-[900px]">
              ABSOLUTE<br/>INFRASTRUCTURE<br/>VISIBILITY.
            </h1>
          </Reveal>

          <Reveal width="100%">
            <p className="text-[#888888] max-w-[500px] mb-12 leading-relaxed">
              Eliminate the darkness in your stack. Core/OS provides real-time telemetry, granular observability, and predictive heuristics for mission-critical architecture.
            </p>
          </Reveal>

          <Reveal width="100%">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#EAEAEA] text-[#050505] font-mono-custom font-medium uppercase tracking-wider hover:bg-[#FF5F1F] hover:-translate-y-0.5 transition-all duration-200"
            >
              Initialize Demo
            </a>
          </Reveal>
        </header>

        {/* SCROLLING MARQUEE */}
        <section className="border-b border-[#2A2A2A] py-4 bg-[#0F0F0F] overflow-hidden">
          <SignatureInteraction type="marquee" speed={20} className="font-mono-custom text-xs uppercase tracking-wider">
             <div className="flex gap-12 items-center">
                <span className="text-[#888888] flex items-center gap-2">
                  <LuCircle className="w-2 h-2 fill-[#FF5F1F] text-[#FF5F1F]" /> INGESTING: 40TB/S
                </span>
                <span className="text-[#888888]">// NODE_77: STABLE</span>
                <span className="text-[#888888]">// LATENCY: &lt; 10MS</span>
                <span className="text-[#888888] flex items-center gap-2">
                  <LuCircle className="w-2 h-2 fill-[#FF5F1F] text-[#FF5F1F]" /> THREAT DETECTED: 0
                </span>
                <span className="text-[#888888]">// UPTIME: 99.999%</span>
                <span className="text-[#888888]">// DEPLOY: SUCCESS</span>
                {/* Duplicated for seamless loop within the flex container if needed, but SignatureInteraction handles duplication */}
             </div>
          </SignatureInteraction>
        </section>

        {/* GRID FEATURE SYSTEM */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[#2A2A2A]">
          {[ 
            {
              id: "01",
              title: "Observe",
              head: "Full-Stack Clarity",
              desc: "Trace requests from edge to database with zero sampling. See every packet, every error, every time.",
              img: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1000&auto=format&fit=crop"
            },
            {
              id: "02",
              title: "Analyze",
              head: "Predictive Logic",
              desc: "Our heuristic engine identifies bottlenecks before they become outages. Fix the future, today.",
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
            },
            {
              id: "03",
              title: "Control",
              head: "Auto-Remediation",
              desc: "Script responses to common anomalies. Let the system heal itself while you sleep.",
              img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1000&auto=format&fit=crop"
            },
            {
              id: "04",
              title: "Secure",
              head: "Perimeter Defense",
              desc: "Real-time anomaly detection flags intruders instantly. Lock down vectors in milliseconds.",
              img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1000&auto=format&fit=crop"
            }
          ].map((item, idx) => (
            <div 
              key={item.id} 
              className={`
                relative p-16 min-h-[400px] flex flex-col justify-between group transition-colors duration-400 hover:bg-[#0A0A0A]
                border-b border-[#2A2A2A] border-r md:border-r
                ${idx % 2 === 1 ? 'md:border-r-0' : ''}
              `}
            >
              {/* Crosshair Effects */}
              <div className="absolute w-2.5 h-2.5 border border-transparent transition-all duration-300 group-hover:top-4 group-hover:left-4 group-hover:border-t-[#FF5F1F] group-hover:border-l-[#FF5F1F]" />
              <div className="absolute w-2.5 h-2.5 border border-transparent transition-all duration-300 group-hover:bottom-4 group-hover:right-4 group-hover:border-b-[#FF5F1F] group-hover:border-r-[#FF5F1F]" />

              <Reveal width="100%">
                <div className="mb-8">
                  <span className="font-mono-custom text-xs uppercase tracking-wider text-[#FF5F1F]">{item.id}. {item.title}</span>
                </div>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-[200px] object-cover grayscale contrast-125 mix-blend-luminosity transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100"
                />
                <div className="mt-8">
                  <h3 className="text-3xl mb-4 tracking-tight font-semibold">{item.head}</h3>
                  <p className="text-[#888888] leading-relaxed max-w-[300px]">{item.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </section>

        {/* THERMAL SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[#2A2A2A]">
          <div className="relative h-[300px] md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-[#2A2A2A] bg-gradient-to-br from-[#2c1a15] to-[#1a1a1a]">
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
              alt="Thermal Visual" 
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
          </div>
          
          <div className="p-6 md:p-24 flex flex-col justify-center">
            <Reveal width="100%">
              <span className="font-mono-custom text-xs uppercase tracking-wider text-[#FF5F1F] block mb-4">// LOAD CAPACITY</span>
              <h3 className="text-4xl md:text-[2.5rem] mb-8 tracking-tighter font-semibold">Handling the heat.</h3>
              <p className="text-[#888888] mb-8 leading-relaxed">
                Your infrastructure generates massive heat maps of data. Core/OS visualizes load distribution in warm, intuitive gradients so you know exactly where the pressure lies.
              </p>
              
              <div className="flex flex-col">
                {[ 
                  { label: 'Max Throughput', val: '450 GB/s' },
                  { label: 'Retention', val: '365 Days' },
                  { label: 'Query Speed', val: '0.04ms' }
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between py-6 border-b border-[#2A2A2A] font-mono-custom text-xs uppercase tracking-wider">
                    <span className="text-[#888888]">{stat.label}</span>
                    <span className="text-[#dca786] font-semibold">{stat.val}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="p-6 md:p-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <Reveal width="100%">
            <div className="mb-4 font-extrabold tracking-tighter text-2xl font-mono-custom">CORE / OS</div>
            <p className="text-[#888888] max-w-[300px]">The standard for enterprise observability.</p>
          </Reveal>
          
          <Reveal width="100%">
            <div className="flex flex-col items-start md:items-end">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">READY TO DEPLOY?</h2>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#EAEAEA] text-[#050505] font-mono-custom font-medium uppercase tracking-wider hover:bg-[#FF5F1F] hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Free Trial
              </a>
            </div>
          </Reveal>
        </footer>

      </main>
    </div>
  );
}
