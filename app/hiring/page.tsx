import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Zap, Globe, BarChart3, Database } from 'lucide-react';

// Adjusted for your personal brand aesthetic
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
        <div className="font-mono text-xs tracking-[0.4em] uppercase font-bold">Ramses_Salcedo / Systems</div>
        <a href="mailto:jobs@ramsessalcedo.com" className="text-[10px] font-mono tracking-widest uppercase hover:text-emerald-500 transition-colors">
          Direct_Inquiry 
        </a>
      </nav>

      <main>
        {/* Hero Section - Bold Statement */}
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 relative">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] text-emerald-500 tracking-[0.6em] uppercase font-bold mb-6 block">Position_Available</span>
            <h1 className="text-[clamp(3.5rem,14vw,12rem)] font-black tracking-tighter leading-[0.8] mb-12">
              MARKET <br /> <span className="text-zinc-900" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>ANALYST.</span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl md:text-3xl text-zinc-500 leading-tight mb-12 italic font-light">
                Seeking a precision specialist to navigate <span className="text-white">prediction markets</span> (Polymarket, Kalshi). Quantify binary outcomes with zero margin for error.
              </p>
              
              <div className="flex flex-col gap-2">
                 <span className="font-mono text-[10px] text-zinc-700 tracking-widest uppercase">Target_Compensation</span>
                 <div className="text-4xl md:text-6xl font-black">$180,000<span className="text-emerald-500 text-2xl font-mono">.00/yr</span></div>
                 <div className="text-sm font-mono text-emerald-500/50 mt-2">Unlimited PTO + Remote First</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Requirements - Technical Grid */}
        <section className="py-40 px-8 md:px-20 border-t border-zinc-900 bg-black">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-24">
              <div>
                <span className="font-mono text-[10px] text-zinc-600 block mb-6 uppercase tracking-widest font-bold">01_Criteria</span>
                <h3 className="text-4xl font-bold mb-6">Binary Literacy</h3>
                <p className="text-zinc-500 text-xl leading-relaxed">
                  You price the future in 0.0 to 1.0. You understand that "Unlikely" is not a measurement. You think in probability distributions.
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-zinc-600 block mb-6 uppercase tracking-widest font-bold">02_Criteria</span>
                <h3 className="text-4xl font-bold mb-6">Information Edge</h3>
                <p className="text-zinc-500 text-xl leading-relaxed">
                  You live 15 minutes ahead of the news cycle. You parse geopolitical data, legal filings, and network sentiment in real-time.
                </p>
              </div>
            </div>
            
            <div className="space-y-24 md:mt-40">
              <div>
                <span className="font-mono text-[10px] text-zinc-600 block mb-6 uppercase tracking-widest font-bold">03_Criteria</span>
                <h3 className="text-4xl font-bold mb-6">Analytical Stack</h3>
                <p className="text-zinc-500 text-xl leading-relaxed">
                  Proficiency in SQL, Python, or extreme-level Excel for hypothesis backtesting against historical market moves.
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-zinc-600 block mb-6 uppercase tracking-widest font-bold">04_Criteria</span>
                <h3 className="text-4xl font-bold mb-6">Platform Native</h3>
                <p className="text-zinc-500 text-xl leading-relaxed">
                  Native understanding of Polymarket (Polygon/USDC) and Kalshi mechanics. You understand liquidity constraints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA - Minimalist */}
        <section className="py-60 px-8 text-center border-t border-zinc-900">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter italic">Ready to price it?</h2>
            <p className="text-zinc-500 text-xl mb-16 max-w-xl mx-auto">
              We value edges over resumes. Send your thesis on a correctly priced market and your CV to the address below.
            </p>
            
            <div className="inline-block group relative">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <a 
                href="mailto:jobs@ramsessalcedo.com" 
                className="relative text-3xl md:text-5xl font-mono font-bold hover:text-emerald-500 transition-colors flex items-center gap-4"
              >
                jobs@ramsessalcedo.com
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="p-12 border-t border-zinc-950 font-mono text-[10px] text-zinc-700 flex justify-between items-center uppercase tracking-widest">
        <div>PredictAnalytica_v1.0</div>
        <div>&copy; {new Date().getFullYear()} Ramses_Salcedo</div>
      </footer>
    </div>
  );
}
