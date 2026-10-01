import React, { useState } from 'react';
import { Star, Plus, Check, Eye, MapPin, Sparkles, AlertCircle } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const [selectedCut, setSelectedCut] = useState(
    product.cuts && product.cuts.length > 0 ? product.cuts[0] : 'Standard Fillet'
  );
  const [weight, setWeight] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const isOutOfStock = product.stock <= 0;
  const isLowStock = product.stock > 0 && product.stock <= 10;

  const handleAdd = () => {
    if (isOutOfStock) return;
    onAddToCart({
      ...product,
      cut: selectedCut,
      weightAmount: weight,
      quantity: weight
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-ocean-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Section */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient overlay on bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-ocean-600/90 backdrop-blur-md text-white shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>{product.badge}</span>
            </span>
          )}

          {isOutOfStock ? (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-600 text-white shadow-sm">
              Sold Out
            </span>
          ) : isLowStock ? (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white shadow-sm flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> Only {product.stock} left
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600/90 text-white shadow-sm">
              In Stock ({product.stock} {product.unit})
            </span>
          )}
        </div>

        {/* Quick View Hover Button */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 active:scale-95"
          title="Quick View Details & Cooking Tips"
        >
          <Eye className="w-4 h-4 text-ocean-700" />
        </button>

        {/* Origin Pill */}
        <div className="absolute bottom-3 left-3 text-white text-xs flex items-center space-x-1 font-medium drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-cyan-300" />
          <span className="truncate max-w-[170px]">{product.origin}</span>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Star Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold text-ocean-600 uppercase tracking-wider text-[10px]">
              {product.category}
            </span>
            <div className="flex items-center space-x-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-ocean-600 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Customization Options */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          {/* Custom Cut Selector */}
          {product.cuts && product.cuts.length > 0 && (
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Select Cut / Preparation:
              </label>
              <select
                value={selectedCut}
                onChange={(e) => setSelectedCut(e.target.value)}
                disabled={isOutOfStock}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-ocean-500 cursor-pointer disabled:opacity-50"
              >
                {product.cuts.map((cut) => (
                  <option key={cut} value={cut}>
                    {cut} (Free Prep)
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Weight Quantity Pills */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Weight:</span>
            <div className="flex items-center space-x-1">
              {[1, 2, 3].map((qty) => (
                <button
                  key={qty}
                  type="button"
                  disabled={isOutOfStock}
                  onClick={() => setWeight(qty)}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition ${
                    weight === qty
                      ? 'bg-ocean-100 text-ocean-800 border border-ocean-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  } disabled:opacity-40`}
                >
                  {qty} {product.unit.includes('piece') ? (qty === 1 ? 'pc' : 'pcs') : 'kg'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-400 block -mb-0.5">Price:</span>
            <span className="text-xl font-extrabold text-slate-900">
              ${(product.price * weight).toFixed(2)}
            </span>
            <span className="text-xs text-slate-500 ml-1">
              (${product.price.toFixed(2)}/{product.unit})
            </span>
          </div>

          <button
            onClick={handleAdd}
            disabled={isOutOfStock}
            className={`inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl font-bold text-xs transition duration-200 shadow-sm active:scale-95 ${
              isOutOfStock
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : isAdded
                ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                : 'bg-ocean-600 hover:bg-ocean-700 text-white shadow-ocean-600/30 hover:shadow-md'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added!</span>
              </>
            ) : isOutOfStock ? (
              <span>Out of Stock</span>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
