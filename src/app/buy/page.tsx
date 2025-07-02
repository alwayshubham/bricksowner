'use client';

import { useState } from 'react';
import PaymentPage from '../payment/page';

export default function BuyPage() {
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedAmount = amount ?? parseInt(customAmount, 10);
    console.log({ name, phone, address, amount: selectedAmount });
    // Integrate payment or API logic here
  };

  const finalAmount = (amount ?? parseInt(customAmount || '0', 10)) * 7;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-center">Buy / Payment Page</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Amount Options */}
        <div className="space-y-2">
          <label className="block font-medium">How much Bricks</label>
          <div className="flex gap-4">
            {[500, 1000, 2000].map((val) => (
              <button
                type="button"
                key={val}
                onClick={() => handleAmountClick(val)}
                className={`px-4 py-2 rounded-full border ${
                  amount === val ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
              >
                {val}
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="w-full mt-2 px-3 py-2 border rounded"
          />
        </div>

        {/* Show calculated amount */}
        {(amount || customAmount) && (
          <div className="text-green-700 font-semibold">
            Rupees: {amount || customAmount} × 7 = ₹{finalAmount}
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium">Address</label>
          <textarea
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          onClick={PaymentPage}
          className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}
