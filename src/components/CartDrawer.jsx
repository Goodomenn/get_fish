import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Truck } from 'lucide-react';

const FREE_SHIPPING_THRESHOLD = 75.0;
const DELIVERY_FEE = 5.99;

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discount = 0;
  let deliveryFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : DELIVERY_FEE;

  if (appliedPromo === 'FRESH10') {
    discount = subtotal * 0.1;
  } else if (appliedPromo === 'OCEANFREE') {
    deliveryFee = 0;
  }

  const total = Math.max(0, subtotal - discount + deliveryFee);
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'FRESH10') {
      setAppliedPromo('FRESH10');
      setPromoError('');
    } else if (code === 'OCEANFREE') {
      setAppliedPromo('OCEANFREE');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon. Try FRESH10 for 10% off or OCEANFREE.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-ocean-600" />
            <h2 className="text-lg font-bold text-slate-900">Your Fresh Catch Cart</h2>
            <span className="text-xs bg-ocean-100 text-ocean-800 font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="p-3.5 bg-ocean-50 border-b border-ocean-100 text-xs">
          <div className="flex items-center justify-between font-semibold text-ocean-900 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-ocean-600" />
              {amountToFreeShipping > 0
                ? `Add $${amountToFreeShipping.toFixed(2)} more for FREE Ice Box Delivery!`
                : '🎉 You unlocked FREE Sub-Zero Delivery!'}
            </span>
            <span className="text-[10px] text-ocean-700 font-bold">{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full bg-ocean-200/80 rounded-full h-2 overflow-hidden">
            <div
              className="bg-ocean-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-ocean-50 text-ocean-500 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Your basket is empty</h3>
              <p className="text-xs text-slate-500 max-w-xs">
                Browse our harbor-fresh seafood and wild catch to fill your chilled box!
              </p>
              <button
                onClick={onClose}
                className="mt-2 text-xs font-bold text-ocean-600 hover:text-ocean-700 underline"
              >
                Start Shopping Now
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.cut}`}
                className="flex items-center space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80 group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-slate-900 truncate">{item.name}</h4>
                  <div className="text-[11px] text-ocean-700 font-semibold bg-ocean-100/60 px-1.5 py-0.5 rounded inline-block mt-0.5">
                    {item.cut || 'Standard Fillet'}
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1">
                    ${(item.price * item.quantity).toFixed(2)}{' '}
                    <span className="text-[10px] text-slate-400 font-normal">
                      (${item.price.toFixed(2)}/{item.unit})
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end space-y-2">
                  <button
                    onClick={() => onRemoveItem(item.id, item.cut)}
                    className="text-slate-400 hover:text-rose-500 p-1 transition"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="flex items-center space-x-1.5 bg-white border border-slate-200 rounded-lg p-0.5 shadow-sm">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.cut, Math.max(1, item.quantity - 1))}
                      className="p-1 hover:bg-slate-100 rounded text-slate-600"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold px-1.5 text-slate-800">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.cut, item.quantity + 1)}
                      className="p-1 hover:bg-slate-100 rounded text-slate-600"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3.5">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code (FRESH10)"
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-ocean-500 uppercase"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold"
              >
                Apply
              </button>
            </form>

            {appliedPromo && (
              <p className="text-[11px] text-emerald-600 font-semibold">
                ✓ Coupon '{appliedPromo}' applied!
              </p>
            )}
            {promoError && (
              <p className="text-[11px] text-rose-500">{promoError}</p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Gel-Ice Insulated Packaging:</span>
                <span className="font-semibold text-emerald-600">FREE ($0.00)</span>
              </div>
              <div className="flex justify-between">
                <span>2-Hour Cold Chain Delivery:</span>
                <span className="font-semibold text-slate-800">
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-bold">FREE</span>
                  ) : (
                    `$${deliveryFee.toFixed(2)}`
                  )}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Special Discount (10%):</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>Estimated Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout({ subtotal, deliveryFee, discount, total });
              }}
              className="w-full py-3.5 bg-gradient-to-r from-ocean-600 to-cyan-600 hover:from-ocean-700 hover:to-cyan-700 text-white font-extrabold rounded-2xl shadow-lg shadow-ocean-600/30 flex items-center justify-center space-x-2 transition active:scale-95"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>100% Satisfaction or Immediate Replacement Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
