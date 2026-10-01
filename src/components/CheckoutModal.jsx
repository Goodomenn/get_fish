import React, { useState } from 'react';
import { X, CheckCircle, Truck, Clock, ShieldCheck, CreditCard, DollarSign, Smartphone } from 'lucide-react';
import { apiService } from '../services/apiService';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  orderTotals,
  onOrderCompleted
}) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    timeSlot: 'Today, 2:00 PM - 4:00 PM',
    paymentMethod: 'Credit Card'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdOrder, setCreatedOrder] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill out your Name, Phone Number, and Delivery Address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const orderPayload = {
        customer: {
          name: formData.name,
          email: formData.email || `${formData.name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
          phone: formData.phone,
          address: formData.address,
          notes: formData.notes
        },
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          cut: item.cut,
          price: item.price,
          quantity: item.quantity,
          unit: item.unit
        })),
        subtotal: orderTotals.subtotal,
        deliveryFee: orderTotals.deliveryFee,
        discount: orderTotals.discount,
        total: orderTotals.total,
        timeSlot: formData.timeSlot,
        paymentMethod: formData.paymentMethod
      };

      const result = await apiService.placeOrder(orderPayload);
      setCreatedOrder(result);
      if (onOrderCompleted) {
        onOrderCompleted(result);
      }
    } catch (err) {
      console.error('Order creation error:', err);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              {createdOrder ? 'Order Confirmed!' : 'Express Seafood Checkout'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {createdOrder
                ? 'Your harbor-fresh catch is being prepped dockside.'
                : 'Direct cold chain ice box delivery to your door.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 p-6">
          {createdOrder ? (
            /* Order Success View */
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs font-bold text-ocean-600 uppercase tracking-widest block">
                  ORDER PLACED SUCCESSFULLY
                </span>
                <h3 className="text-3xl font-black text-slate-900 mt-1">
                  #{createdOrder.id}
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{createdOrder.customer?.name}</strong>! 
                  Our fishmongers have received your order and are packing your items on crushed ice.
                </p>
              </div>

              {/* Order Info Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-3 max-w-md mx-auto">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Estimated Arrival:</span>
                  <span className="font-bold text-ocean-700">{createdOrder.timeSlot}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Delivery Address:</span>
                  <span className="font-semibold text-slate-800 truncate max-w-[200px]">
                    {createdOrder.customer?.address}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Payment Mode:</span>
                  <span className="font-semibold text-slate-800">{createdOrder.paymentMethod}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-slate-900 pt-1">
                  <span>Total Paid / Due:</span>
                  <span>${createdOrder.total?.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white font-bold rounded-xl shadow-md transition"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Contact Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <span>1. Delivery & Contact Details</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">Mobile Phone (For Driver SMS) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Street Address, Apt / Floor *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 102 Marina Blvd, Apt 3A"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Special Delivery Instructions (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Gate code #1234, leave in cooler box on porch"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
                  />
                </div>
              </div>

              {/* Delivery Time Window */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-ocean-600" />
                  <span>2. Preferred 2-Hour Delivery Slot</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Today, 1:00 PM - 3:00 PM',
                    'Today, 4:00 PM - 6:00 PM',
                    'Tomorrow, 9:00 AM - 11:00 AM'
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`p-2.5 rounded-xl border text-left text-xs transition ${
                        formData.timeSlot === slot
                          ? 'border-ocean-600 bg-ocean-50 text-ocean-900 font-bold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span className="block text-[10px] text-slate-400">Guaranteed Slot:</span>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>3. Payment Method</span>
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'Credit Card', icon: CreditCard, label: 'Credit / Debit Card' },
                    { id: 'Apple Pay', icon: Smartphone, label: 'Apple Pay / Google' },
                    { id: 'Cash on Delivery', icon: DollarSign, label: 'Cash on Delivery' }
                  ].map((method) => {
                    const Icon = method.icon;
                    const isSelected = formData.paymentMethod === method.id;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center space-y-1 transition ${
                          isSelected
                            ? 'border-ocean-600 bg-ocean-50 text-ocean-900 font-bold'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-ocean-600" />
                        <span className="text-[11px]">{method.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Order Summary Strip */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Total Due (with free ice box):</span>
                  <div className="text-2xl font-black text-slate-900">
                    ${orderTotals.total?.toFixed(2)}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-gradient-to-r from-ocean-600 to-cyan-600 hover:from-ocean-700 hover:to-cyan-700 text-white font-extrabold rounded-xl shadow-lg shadow-ocean-600/30 transition active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? 'Placing Order...' : 'Confirm & Place Order'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
