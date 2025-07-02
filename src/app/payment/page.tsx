'use client';

import { useState } from 'react';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | null>(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handlePaymentSelect = (method: 'upi' | 'cod') => {
    setPaymentMethod(method);
    setPaymentConfirmed(false);
  };

  const handleConfirm = () => {
    if (paymentMethod) {
      setPaymentConfirmed(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg space-y-6">
      <h1 className="text-2xl font-bold text-center">Select Payment Method</h1>

      <div className="space-y-4">
        <button
          onClick={() => handlePaymentSelect('upi')}
          className={`w-full py-2 rounded border ${
            paymentMethod === 'upi' ? 'bg-blue-600 text-white' : 'bg-white'
          }`}
        >
          Pay with UPI (QR Code)
        </button>

        <button
          onClick={() => handlePaymentSelect('cod')}
          className={`w-full py-2 rounded border ${
            paymentMethod === 'cod' ? 'bg-green-600 text-white' : 'bg-white'
          }`}
        >
          Cash on Delivery (COD)
        </button>
      </div>

      {/* UPI QR Code */}
      {paymentMethod === 'upi' && (
        <div className="mt-4 text-center">
          <p className="mb-2 font-medium">Scan this UPI QR code to pay:</p>
          <img
            src="/upi-qr-placeholder.png" // Replace with your actual QR image
            alt="UPI QR Code"
            className="mx-auto w-48 h-48 border"
          />
        </div>
      )}

      {/* Confirmation */}
      {paymentMethod && !paymentConfirmed && (
        <button
          onClick={handleConfirm}
          className="w-full py-2 bg-black text-white rounded hover:opacity-90 mt-6"
        >
          Confirm Payment Method
        </button>
      )}

      {paymentConfirmed && (
        <div className="mt-4 text-center text-green-700 font-semibold">
          ✅ Payment method {paymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery'} selected successfully!
        </div>
      )}
    </div>
  );
}
