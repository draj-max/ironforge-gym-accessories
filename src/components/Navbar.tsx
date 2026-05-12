import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
              IRON<span className="text-yellow-400">FORGE</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-400 transition-colors">Shop</Link>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-400 transition-colors">Collections</Link>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-400 transition-colors">Athletes</Link>
          </div>

          <div className="flex items-center space-x-5">
            <button className="p-2 hover:text-yellow-400 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/shop" className="p-2 hover:text-yellow-400 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </Link>
            <button className="md:hidden p-2">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;