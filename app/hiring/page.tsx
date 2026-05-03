'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Globe, 
  Zap, 
  BarChart3,
  ArrowRight,
  Database,
  PieChart,
  Clock
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-6 flex justify-between items-center pointer-events-none">
    <div className="pointer-events-auto">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></div>
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-400 group-hover:text-white transition-colors font-bold">Ramses Salcedo</span>
      </Link>
    </div>
    <div className="hidden md:flex gap-12 text-[9px] font-mono tracking-[0.3em] font-bold text-zinc-500 pointer-events-auto">
      <Link href="#requirements" className="hover:text-emerald-500 transition-colors uppercase">Requirements</Link>
      <Link href="#package" className="hover:text-emerald-500 transition-colors uppercase">The Package</Link>
      <a href="mailto:jobs@ramsessalcedo.com" className="hover:text-emerald-500 transition-colors uppercase text-white">Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center px-8 sm:px-16 md:px-24 relative overflow-hidden bg-black selection:bg-emerald-500 selection:text-black">
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    
    <div className="max-w-7xl relative z-10 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-16 bg-emerald-500" />
          <span className="font-mono text-[9px] tracking-[0.6em] text-emerald-500 uppercase font-black">Open Position // Markets</span>
        </div>
        
        <h1 className="text-[clamp(3.5rem,15vw,12rem)] font-black tracking-tighter leading-[0.75] mb-20 text-white italic">
          PRICING <br /> <span className="outline-text block" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)', color: 'transparent' }}>VOLATILITY.</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-zinc-500 max-w-xl leading-snug font-light">
              We are recruiting a <span className="text-white italic">Market Analyst</span> to architect precision in prediction environments.
            </p>
            <p className="text-sm font-mono text-zinc-600 tracking-wider">0.0 TO 1.0 // BINARY OUTCOMES // HIGH-STAKES</p>
          </div>

          <div className="flex flex-col gap-10 lg:items-end">
            <div className="flex flex-wrap gap-6">
              <div className="group">
                <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-3 font-bold group-hover:text-emerald-500 transition-colors">Compensation</div>
                <div className="text-5xl font-black text-white tracking-tighter">$180K<span className="text-emerald-500">.</span></div>
              </div>
              <div className="group">
                <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-3 font-bold group-hover:text-emerald-500 transition-colors">PTO</div>
                <div className="text-5xl font-black text-white tracking-tighter">∞</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 cursor-pointer group"
      onClick={() => document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="relative h-24 w-px bg-zinc-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-500 -translate-y-full animate-[scroll_2s_infinite]" />
      </div>
      <span className="font-mono text-[8px] tracking-[0.8em] uppercase text-zinc-700 font-bold group-hover:text-white transition-colors">Analyze_Criteria</span>
    </motion.div>
  </section>
);

const BentoPrerequisites = () => {
  const items = [
    { 
      title: "Binary Logic", 
      desc: "Expertise in pricing Yes/No outcomes. Thinking in 0.0 to 1.0.", 
      icon: <Database className="w-5 h-5" />,
      span: "md:col-span-1",
      bg: "bg-zinc-900"
    },
    { 
      title: "Information Alpha", 
      desc: "Native understanding of information propagation across networks.", 
      icon: <Globe className="w-5 h-5" />,
      span: "md:col-span-2",
      bg: "bg-zinc-900/20"
    },
    { 
      title: "Realtime Speed", 
      desc: "Living 15 minutes ahead of the global ticker.", 
      icon: <Zap className="w-5 h-5" />,
      span: "md:col-span-2",
      bg: "bg-emerald-950/10"
    },
    { 
      title: "Platform Native", 
      desc: "Deep mastery of Polymarket and Kalshi mechanics.", 
      icon: <BarChart3 className="w-5 h-5" />,
      span: "md:col-span-1",
      bg: "bg-zinc-950"
    }
  ];

  return (
    <section id="requirements" className="py-48 px-8 sm:px-24 bg-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32">
          <span className="font-mono text-[9px] text-emerald-500 uppercase tracking-[0.8em] font-black block mb-6">Phase_01 // Criteria</span>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter italic leading-none">THE<br />REQUIREMENTS<span className="text-emerald-500">.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`${item.span} ${item.bg} border border-zinc-900 p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[340px] transition-all hover:border-emerald-500/20 hover:bg-zinc-900/10 group`}
            >
              <div className="p-4 bg-black rounded-2xl w-fit border border-zinc-800 text-emerald-500 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Package = () => (
  <section id="package" className="py-48 px-8 sm:px-24 bg-zinc-950 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[180px] rounded-full translate-x-1/2 pointer-events-none" />
    <div className="max-w-5xl mx-auto border border-white/5 bg-white/[0.02] backdrop-blur-3xl rounded-[4rem] p-16 md:p-32 relative z-10 shadow-2xl">
      <div className="mb-24">
        <div className="text-[10px] font-mono text-emerald-500 mb-4 uppercase tracking-[0.6em] font-black italic">The Offer</div>
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">THE PACKAGE<span className="text-emerald-500 font-mono">_</span></h2>
      </div>
      
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 gap-8">
          <div>
            <h4 className="text-zinc-600 text-[10px] font-mono mb-4 uppercase tracking-[0.4em] font-black">Base Salary</h4>
            <p className="text-6xl md:text-8xl font-black text-white tracking-widest">$180<span className="text-emerald-500 text-3xl">K</span></p>
          </div>
          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest italic font-bold">Paid annually. Local or crypto.</p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 gap-8">
          <div>
            <h4 className="text-zinc-600 text-[10px] font-mono mb-4 uppercase tracking-[0.4em] font-black">Time Off</h4>
            <p className="text-6xl md:text-8xl font-black text-white tracking-widest uppercase italic">∞ PTO</p>
          </div>
          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest italic font-bold">Outcome based attendance.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
           {[
             { label: "Remote First", icon: <Globe className="w-5 h-5" /> },
             { label: "Hardware", icon: <Zap className="w-5 h-5" /> },
             { label: "Equity", icon: <PieChart className="w-5 h-5" /> },
             { label: "Flexible", icon: <Clock className="w-5 h-5" /> }
           ].map((item, i) => (
             <div key={i} className="flex flex-col gap-4">
                <div className="text-emerald-500 scale-125">{item.icon}</div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black">{item.label}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-64 px-8 text-center bg-black relative">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.8em] font-black mb-12 block">Submission Terminal</span>
        <h2 className="text-[clamp(3rem,10vw,8rem)] font-black text-white tracking-tighter mb-16 italic leading-none">Ready to <span className="outline-text" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>predict?</span></h2>
        
        <div className="flex flex-col items-center gap-12 justify-center">
          <a 
            href="mailto:jobs@ramsessalcedo.com"
            className="group relative flex items-center gap-6 bg-white text-black px-12 py-8 rounded-full font-black text-lg tracking-[0.3em] uppercase hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95"
          >
            jobs@ramsessalcedo.com
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
          <div className="max-w-lg">
            <p className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase leading-loose font-bold">
              We aren&apos;t looking for resumes—we&apos;re looking for edges. Show us a market you&apos;ve priced correctly and provide the thesis.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 border-t border-zinc-900 bg-black text-zinc-700 text-[9px] px-8 font-mono uppercase tracking-[0.5em] font-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="flex items-center gap-4">
        <div className="w-1 h-1 bg-zinc-800 rounded-full" />
        <span>Ramses Salcedo_Systems</span>
      </div>
      <div className="flex gap-12 font-bold mb-12 md:mb-0">
        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
        <a href="https://mirror.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mirror</a>
      </div>
      <div className="opacity-40">
        &copy; {new Date().getFullYear()} ALL_RIGHTS_RESERVED.
      </div>
    </div>
  </footer>
);

export default function HiringPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-500 selection:text-black font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <BentoPrerequisites />
        <Package />
        <CTA />
      </main>
      <Footer />
      
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
