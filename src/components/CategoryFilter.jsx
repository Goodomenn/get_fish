import React from 'react';
import { CATEGORIES } from '../data/initialData';
import { SlidersHorizontal, Check } from 'lucide-react';

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  inStockOnly,
  onToggleInStock,
  productCount
}) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-sm mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 ${
                  isSelected
                    ? 'bg-ocean-600 text-white shadow-sm shadow-ocean-600/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {cat === 'All' && '🌊 '}
                {cat === 'Fillets & Steaks' && '🥩 '}
                {cat === 'Whole Fish' && '🐟 '}
                {cat === 'Shellfish & Crustaceans' && '🦞 '}
                {cat === 'Sashimi Grade' && '🍣 '}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Right side: Sort and Filters */}
        <div className="flex items-center flex-wrap gap-3">
          {/* In Stock Toggle */}
          <label className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-2 rounded-xl transition">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onToggleInStock(e.target.checked)}
              className="rounded text-ocean-600 focus:ring-ocean-500 w-4 h-4 cursor-pointer"
            />
            <span>In Stock Only</span>
          </label>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent text-xs font-medium text-slate-800 focus:outline-none cursor-pointer py-1"
            >
              <option value="featured">Sort: Featured Catch</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated & Reviews</option>
              <option value="stock">Stock Available</option>
            </select>
          </div>

          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Showing <strong className="text-slate-800">{productCount}</strong> items
          </span>
        </div>
      </div>
    </div>
  );
}
