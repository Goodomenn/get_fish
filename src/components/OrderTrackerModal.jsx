import React, { useState, useEffect } from 'react';
import { X, Search, CheckCircle, Clock, Truck, Package, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { apiService } from '../services/apiService';

const STATUS_STEPS = [
  { key: 'Pending', label: 'Order Confirmed', desc: 'Dockside station received ticket', icon: Clock },
  { key: 'Preparing', label: 'Filleting & Cleaning', desc: 'Handled by expert fishmonger', icon: Package },
  { key: 'Out for Delivery', label: 'Out for Delivery', desc: 'Packed on ice in chilled van', icon: Truck },
  { key: 'Delivered', label: 'Delivered Fresh', desc: 'Enjoy your ocean catch!', icon: CheckCircle }
];

export default function OrderTrackerModal({ isOpen, onClose, initialOrderId = '' }) {
  if (!isOpen) return null;

  const [orderIdInput, setOrderIdInput] = useState(initialOrderId || 'GF-8921');
  const [currentOrder, setCurrentOrder] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchOrder = async (idToLook) => {
    if (!idToLook) return;
    setLoading(true);
    setErrorMsg('');
    try {
      const found = await apiService.getOrderById(idToLook);
      if (found) {
        setCurrentOrder(found);
      } else {
        setCurrentOrder(null);
        setErrorMsg(`No order found matching "${idToLook}". Try GF-8921 or GF-8922.`);
      }
    } catch (err) {
      setErrorMsg('Error retrieving order details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialOrderId) {
      setOrderIdInput(initialOrderId);
      fetchOrder(initialOrderId);
    } else {
      fetchOrder(orderIdInput);
    }

    // Subscribe to live updates so if Admin changes status, tracker updates live!
    const unsubscribe = apiService.subscribe(() => {
      if (orderIdInput) {
        fetchOrder(orderIdInput);
      }
    });

    return () => unsubscribe();
  }, [initialOrderId]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchOrder(orderIdInput);
  };

  // Determine current active step index
  const getStepIndex = (status) => {
    switch (status) {
      case 'Pending':
        return 0;
      case 'Preparing':
        return 1;
      case 'Out for Delivery':
        return 2;
      case 'Delivered':
        return 3;
      default:
        return 0;
    }
  };

  const currentStepIdx = currentOrder ? getStepIndex(currentOrder.status) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-ocean-600" />
              <span>Real-Time Seafood Dispatch Tracker</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Track the temperature-controlled journey of your fresh catch.
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
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Search Order Form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={orderIdInput}
                onChange={(e) => setOrderIdInput(e.target.value.toUpperCase())}
                placeholder="Enter Order ID (e.g. GF-8921)"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm font-bold tracking-wider uppercase focus:bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-ocean-600 hover:bg-ocean-700 text-white font-bold rounded-xl text-sm transition"
            >
              {loading ? 'Searching...' : 'Track'}
            </button>
          </form>

          {/* Quick Helper Chips */}
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <span>Quick try:</span>
            {['GF-8921', 'GF-8922', 'GF-8923'].map((sampleId) => (
              <button
                key={sampleId}
                type="button"
                onClick={() => {
                  setOrderIdInput(sampleId);
                  fetchOrder(sampleId);
                }}
                className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-mono text-[11px]"
              >
                {sampleId}
              </button>
            ))}
          </div>

          {errorMsg && (
            <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl">
              {errorMsg}
            </div>
          )}

          {currentOrder && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Order Status Badge & Meta */}
              <div className="bg-ocean-50/60 border border-ocean-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-ocean-700 uppercase tracking-wider">
                    CURRENT DISPATCH STATUS
                  </span>
                  <div className="text-xl font-black text-slate-900 flex items-center gap-2 mt-0.5">
                    <span>{currentOrder.status}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-ocean-600 text-white">
                      Live
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Slot: <strong className="text-slate-800">{currentOrder.timeSlot}</strong>
                  </p>
                </div>

                <div className="text-left sm:text-right text-xs">
                  <span className="text-slate-400 block">Total Amount:</span>
                  <span className="text-lg font-black text-slate-900">${currentOrder.total?.toFixed(2)}</span>
                  <span className="text-[11px] text-emerald-600 block font-semibold">
                    {currentOrder.paymentMethod}
                  </span>
                </div>
              </div>

              {/* Visual Multi-step Tracker */}
              <div className="relative pl-6 sm:pl-0 sm:pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
                  {STATUS_STEPS.map((step, idx) => {
                    const isPassed = idx <= currentStepIdx;
                    const isCurrent = idx === currentStepIdx;
                    const Icon = step.icon;

                    return (
                      <div key={step.key} className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-2">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shrink-0 ${
                            isCurrent
                              ? 'bg-ocean-600 text-white ring-4 ring-ocean-200 scale-110 shadow-lg'
                              : isPassed
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-200 text-slate-400'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="sm:text-center text-left">
                          <h4
                            className={`text-xs font-bold ${
                              isCurrent ? 'text-ocean-700' : isPassed ? 'text-slate-900' : 'text-slate-400'
                            }`}
                          >
                            {step.label}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Delivery Details Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Customer / Address */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-1.5 font-bold text-slate-800">
                    <MapPin className="w-4 h-4 text-ocean-600" />
                    <span>Destination Address</span>
                  </div>
                  <p className="font-semibold text-slate-900">{currentOrder.customer?.name}</p>
                  <p className="text-slate-600">{currentOrder.customer?.address}</p>
                  {currentOrder.customer?.notes && (
                    <p className="text-[11px] text-slate-500 italic bg-white p-2 rounded-lg border border-slate-200">
                      "{currentOrder.customer?.notes}"
                    </p>
                  )}
                </div>

                {/* Driver / Courier */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-1.5 font-bold text-slate-800">
                    <Truck className="w-4 h-4 text-emerald-600" />
                    <span>Cold Chain Courier</span>
                  </div>
                  <p className="font-semibold text-slate-900">
                    {currentOrder.driver ? currentOrder.driver.name : 'Assigned Dockside Courier'}
                  </p>
                  <p className="text-slate-600">
                    {currentOrder.driver ? currentOrder.driver.vehicle : 'Refrigerated Cold Box Courier'}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Insulated Box Temperature: 1.2°C
                  </p>
                </div>
              </div>

              {/* Items in this Order */}
              <div className="border border-slate-200 rounded-2xl p-4 space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Items in this Catch Package
                </h4>
                <div className="divide-y divide-slate-100 text-xs">
                  {currentOrder.items?.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-900">{item.name}</span>
                        <div className="text-[11px] text-ocean-600 font-medium">
                          Cut: {item.cut || 'Standard Fillet'} • Qty: {item.quantity}
                        </div>
                      </div>
                      <span className="font-bold text-slate-900">
                        ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
