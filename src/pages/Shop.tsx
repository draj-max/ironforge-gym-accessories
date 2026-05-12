import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';

const products = [
  { id: 1, name: 'Titan Lever Belt', category: 'Belts', price: 120, img: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Iron Grip Straps', category: 'Accessories', price: 25, img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Apex Knee Sleeves', category: 'Support', price: 65, img: 'https://images.unsplash.com/photo-1591258339860-d99a9f35eeaf?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Warrior Wrist Wraps', category: 'Support', price: 30, img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Steel Shaker 750ml', category: 'Hydration', price: 35, img: 'https://images.unsplash.com/photo-1593091417440-d1cb034982ff?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Chalk Block Pack', category: 'Accessories', price: 15, img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600' },
  { id: 7, name: 'Elite Lifting Shoes', category: 'Footwear', price: 180, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600' },
  { id: 8, name: 'Duffel Bag Pro', category: 'Bags', price: 85, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600' },
];

const Shop: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter">Shop All Gear</h1>
            <p className="text-zinc-400 mt-2">Equipping the world's strongest athletes.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 font-bold uppercase text-xs tracking-widest">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 font-bold uppercase text-xs tracking-widest">
              Sort By <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-4">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">{product.category}</span>
                </div>
              </div>
              <h3 className="font-bold uppercase tracking-tight">{product.name}</h3>
              <p className="text-zinc-400">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;