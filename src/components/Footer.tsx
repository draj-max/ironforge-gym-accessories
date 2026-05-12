import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 mb-6">
              IRON<span className="text-yellow-400">FORGE</span>
            </Link>
            <p className="text-zinc-400 mb-6">
              Premium bodybuilding accessories for those who demand the best. Built for strength, designed for longevity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-500 hover:text-yellow-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-yellow-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-yellow-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-yellow-400 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Lifting Belts</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Wrist Wraps</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Apparel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-zinc-400 mb-4">Join the elite. Get training tips and early access to drops.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-zinc-900 border border-zinc-800 px-4 py-2 w-full focus:outline-none focus:border-yellow-400"
              />
              <button className="bg-yellow-400 text-black px-4 py-2 font-bold uppercase text-xs">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            © 2024 IRONFORGE PERFORMANCE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;