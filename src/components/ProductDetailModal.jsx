import React, { useState } from 'react';
import { X, Star, MapPin, ChefHat, HeartPulse, Check, Plus, AlertCircle, Sparkles } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [selectedCut, setSelectedCut] = useState(
    product.cuts && product.cuts.length > 0 ? product.cuts[0] : 'Whole Cleaned'
  );
  const [weight, setWeight] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const isOutOfStock = product.stock <= 0;

  const handleAdd = () => {
    if (isOutOfStock) return;
    onAddToCart({
      ...product,
      cut: selectedCut,
      weightAmount: weight,
      quantity: weight
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition duration-150 backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          {/* Top Grid: Image + Quick Meta */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold bg-ocean-600 text-white shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{product.badge}</span>
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs text-ocean-600 font-bold uppercase tracking-wider">
                <span>{product.category}</span>
                <span>•</span>
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-ocean-500" />
                  {product.origin}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {product.name}
              </h2>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-slate-400 text-sm">({product.reviewsCount} verified reviews)</span>
                <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                  {product.stock > 0 ? `${product.stock} ${product.unit} Available` : 'Sold Out'}
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Price & Unit */}
              <div className="pt-2">
                <span className="text-xs text-slate-400 block">Pricing per Unit:</span>
                <div className="text-3xl font-black text-slate-900">
                  ${product.price.toFixed(2)}
                  <span className="text-sm font-medium text-slate-500 ml-1">/ {product.unit}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flavor Profile & Cooking Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Flavor Profile Box */}
            {product.flavorProfile && (
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2">
                <div className="flex items-center space-x-2 text-ocean-700 font-bold text-xs uppercase tracking-wide">
                  <HeartPulse className="w-4 h-4" />
                  <span>Flavor & Texture Profile</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Richness:</span>
                    <span className="font-semibold text-slate-800">{product.flavorProfile.richness}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Texture:</span>
                    <span className="font-semibold text-slate-800">{product.flavorProfile.texture}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500 font-medium">Taste:</span>
                    <span className="font-semibold text-slate-800">{product.flavorProfile.taste}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Chef Cooking Tips */}
            <div className="bg-ocean-50/60 border border-ocean-200/60 rounded-2xl p-4 space-y-2">
              <div className="flex items-center space-x-2 text-ocean-800 font-bold text-xs uppercase tracking-wide">
                <ChefHat className="w-4 h-4 text-ocean-600" />
                <span>Chef's Recommended Preparation</span>
              </div>
              <p className="text-xs text-ocean-950/80 leading-relaxed">
                {product.cookingTips || 'Sear on high heat with olive oil and fresh herbs.'}
              </p>
            </div>
          </div>

          {/* Nutrition Info Strip */}
          {product.nutrition && (
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Nutritional Highlights (Per 100g)
              </h4>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-white p-2 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Calories</span>
                  <span className="font-bold text-slate-800">{product.nutrition.calories}</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Protein</span>
                  <span className="font-bold text-slate-800">{product.nutrition.protein}</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Omega-3</span>
                  <span className="font-bold text-ocean-600">{product.nutrition.omega3}</span>
                </div>
                <div className="bg-white p-2 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Healthy Fats</span>
                  <span className="font-bold text-slate-800">{product.nutrition.fat}</span>
                </div>
              </div>
            </div>
          )}

          {/* Selection Controls & Add to Cart Footer */}
          <div className="border-t border-slate-200 pt-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Cuts */}
              {product.cuts && product.cuts.length > 0 && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase">
                    Select Your Cut / Prep:
                  </label>
                  <select
                    value={selectedCut}
                    onChange={(e) => setSelectedCut(e.target.value)}
                    className="w-full text-xs font-medium bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                  >
                    {product.cuts.map((cut) => (
                      <option key={cut} value={cut}>
                        {cut} (Free Prep)
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Weight */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase">
                  Select Quantity ({product.unit}):
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 5].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setWeight(amt)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${
                        weight === amt
                          ? 'bg-ocean-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {amt} {product.unit.includes('piece') ? (amt === 1 ? 'pc' : 'pcs') : 'kg'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-xs text-slate-400 block">Total for {weight} {product.unit}:</span>
                <span className="text-2xl font-black text-slate-900">
                  ${(product.price * weight).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAdd}
                disabled={isOutOfStock}
                className={`px-8 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 shadow-lg active:scale-95 flex items-center space-x-2 ${
                  isOutOfStock
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : isAdded
                    ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                    : 'bg-ocean-600 hover:bg-ocean-700 text-white shadow-ocean-600/30'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span>Add to Cart - ${(product.price * weight).toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
