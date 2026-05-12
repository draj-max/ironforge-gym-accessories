import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Trophy } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
            alt="Bodybuilder training"
            className="w-full h-full object-cover object-center opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-black uppercase tracking-widest mb-6">
              Elite Performance Gear
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-6">
              FORGE YOUR <br />
              <span className="text-transparent stroke-text">LEGACY</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-10 max-w-lg">
              Engineered for the 1%. Professional-grade straps, belts, and wraps designed to withstand the heaviest sets of your life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="px-8 py-4 bg-yellow-400 text-black font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 group">
                Shop Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/shop" className="px-8 py-4 border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                View Athletes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center rounded-full mb-6 text-yellow-400">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Lifetime Durability</h3>
              <p className="text-zinc-400">Reinforced double-stitching and premium leather that never quits.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center rounded-full mb-6 text-yellow-400">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Instant Support</h3>
              <p className="text-zinc-400">Ergonomic designs that lock in your joints for maximum stability.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center rounded-full mb-6 text-yellow-400">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">Pro Approved</h3>
              <p className="text-zinc-400">Tested and trusted by IFBB professionals worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">The Essentials</h2>
              <div className="h-1 w-20 bg-yellow-400 mt-2"></div>
            </div>
            <Link to="/shop" className="text-yellow-400 font-bold uppercase tracking-widest text-sm hover:underline">View All</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { id: 1, name: 'Titan Lever Belt', price: '$120', img: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&fit=crop&q=80&w=600' },
              { id: 2, name: 'Iron Grip Straps', price: '$25', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600' },
              { id: 3, name: 'Apex Knee Sleeves', price: '$65', img: 'https://images.unsplash.com/photo-1591258339860-d99a9f35eeaf?auto=format&fit=crop&q=80&w=600' },
              { id: 4, name: 'Warrior Wrist Wraps', price: '$30', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600' }
            ].map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-4">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-yellow-400 text-black font-black text-center uppercase text-sm">
                    Add to Cart
                  </div>
                </div>
                <h3 className="font-bold uppercase tracking-tight">{product.name}</h3>
                <p className="text-zinc-400">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Quote */}
      <section className="py-32 bg-zinc-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <blockquote className="text-4xl md:text-5xl font-black italic uppercase leading-tight mb-8">
              "If you're not using gear that can handle the weight, you're leaving gains on the table. IronForge is the only brand I trust when I'm pushing 600lbs."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-700 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=100" alt="Athlete" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold uppercase">Marcus "The Mountain" Stone</p>
                <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest">IFBB Pro Bodybuilder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
           <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000" 
            alt="Bodybuilder"
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </div>
      </section>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </div>
  );
};

export default Home;