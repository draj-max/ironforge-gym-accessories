import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, RefreshCw, ShieldCheck, Plus, Minus } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock data for the demo
  const product = {
    name: 'Titan Lever Belt',
    price: 120,
    category: 'Belts',
    description: 'The ultimate support for your heaviest lifts. Our Titan Lever Belt is crafted from 13mm thick premium cowhide leather and features a heavy-duty stainless steel lever mechanism for instant lockdown and release.',
    features: [
      '13mm Thickness for maximum support',
      'Stainless steel lever buckle',
      'Competition legal dimensions',
      'Double-stitched reinforced edges',
      'Suede interior for non-slip grip'
    ],
    images: [
      'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    ]
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-zinc-900 overflow-hidden">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-zinc-900 overflow-hidden">
                <img src={product.images[1]} alt={product.name} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="aspect-square bg-zinc-900 overflow-hidden flex items-center justify-center">
                <p className="text-zinc-500 font-bold uppercase text-xs">View More</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <nav className="flex mb-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-white">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-yellow-400">{product.name}</span>
            </nav>

            <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">128 Reviews</span>
            </div>

            <p className="text-3xl font-bold mb-8">${product.price}.00</p>
            
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-6 mb-10">
              <h3 className="font-bold uppercase tracking-widest text-sm">Key Features:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 bg-yellow-400"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-zinc-800 bg-zinc-900">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:text-yellow-400 transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:text-yellow-400 transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
              <button className="flex-1 bg-yellow-400 text-black font-black uppercase tracking-widest py-4 hover:bg-white transition-colors">
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-zinc-800">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck size={20} className="text-zinc-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RefreshCw size={20} className="text-zinc-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck size={20} className="text-zinc-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Lifetime Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;