import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Wine, Sparkles } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedOrder
}) {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState('Table Service');
  const [tableNumber, setTableNumber] = useState('Table 14 (Terrace)');
  const [guestNotes, setGuestNotes] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const serviceCharge = Math.round(subtotal * 0.1 * 100) / 100;
  const total = subtotal + (orderType === 'Table Service' ? serviceCharge : 0);

  const handleCheckout = () => {
    onProceedOrder({
      orderType,
      tableNumber: orderType === 'Table Service' ? tableNumber : 'Takeaway Order',
      notes: guestNotes,
      subtotal,
      serviceCharge,
      total,
      items: cartItems
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#091b2c] border-l border-gold-500/30 h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-[#061421]">
          <div>
            <span className="font-serif italic text-gold-300 text-xs block">
              seafood + wine order
            </span>
            <h2 className="font-serif text-xl font-bold uppercase text-white tracking-wide">
              YOUR RESTAURANT TICKET
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Type Toggle */}
        <div className="p-4 bg-[#071728] border-b border-slate-800 flex items-center space-x-2 text-xs">
          <button
            type="button"
            onClick={() => setOrderType('Table Service')}
            className={`flex-1 py-2 rounded-xl font-serif uppercase tracking-wider text-[11px] transition ${
              orderType === 'Table Service'
                ? 'bg-gold-500/20 text-gold-300 border border-gold-400/50'
                : 'text-slate-400 hover:text-white bg-slate-850'
            }`}
          >
            Dine-In Table Service
          </button>
          <button
            type="button"
            onClick={() => setOrderType('Luxury Takeaway')}
            className={`flex-1 py-2 rounded-xl font-serif uppercase tracking-wider text-[11px] transition ${
              orderType === 'Luxury Takeaway'
                ? 'bg-gold-500/20 text-gold-300 border border-gold-400/50'
                : 'text-slate-400 hover:text-white bg-slate-850'
            }`}
          >
            Chilled Takeaway
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#061421] border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl text-white">Your ticket is currently empty</h3>
              <p className="text-xs text-slate-400 max-w-xs font-light">
                Select your preferred fish dishes, fresh oysters, or sommelier wines from our menu.
              </p>
              <button
                onClick={onClose}
                className="font-serif uppercase text-xs tracking-widest text-gold-400 hover:text-gold-200 underline underline-offset-4"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 p-3.5 bg-[#061421] rounded-2xl border border-slate-800"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover border border-slate-700 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-medium text-white truncate">{item.name}</h4>
                  <div className="font-serif text-gold-300 font-bold text-sm mt-0.5">
                    {item.price * item.quantity} $
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end space-y-1.5">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-slate-500 hover:text-rose-400 p-1 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center space-x-1.5 bg-slate-850 border border-slate-700 rounded-lg p-0.5">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-1 text-slate-400 hover:text-white"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-serif font-bold px-1.5 text-white">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-slate-400 hover:text-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Order Placement */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-slate-800 bg-[#061421] space-y-4 text-xs">
            {orderType === 'Table Service' ? (
              <div>
                <label className="font-serif text-slate-300 block mb-1 uppercase tracking-wider text-[10px]">
                  Table Seating / Location
                </label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="e.g. Table 14 or Terrace Table 3"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white font-medium"
                />
              </div>
            ) : (
              <div>
                <label className="font-serif text-slate-300 block mb-1 uppercase tracking-wider text-[10px]">
                  Special Preparation Notes
                </label>
                <input
                  type="text"
                  value={guestNotes}
                  onChange={(e) => setGuestNotes(e.target.value)}
                  placeholder="e.g. Extra lemons, wine bucket with crushed ice"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white font-medium"
                />
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-slate-400 pt-1 border-t border-slate-800">
              <div className="flex justify-between">
                <span>Food & Wine Subtotal:</span>
                <span className="font-serif font-bold text-slate-200">{subtotal.toFixed(2)} $</span>
              </div>
              {orderType === 'Table Service' && (
                <div className="flex justify-between">
                  <span>Maitre & Sommelier Service (10%):</span>
                  <span className="font-serif text-gold-300">{serviceCharge.toFixed(2)} $</span>
                </div>
              )}
              <div className="flex justify-between text-base font-serif font-bold text-white pt-2 border-t border-slate-800">
                <span>Total Ticket:</span>
                <span className="text-gold-300 text-xl">{total.toFixed(2)} $</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif font-bold tracking-[0.2em] uppercase text-xs rounded-xl shadow-lg transition active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Transmit Order to Kitchen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
