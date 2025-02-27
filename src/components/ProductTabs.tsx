import React, { useState } from 'react';

function ProductTabs() {
  const tabs = ['Details', 'Shipping', 'Return', 'Size Chart'] as const;
  type TabType = (typeof tabs)[number];

  const [activeTab, setActiveTab] = useState<TabType>('Details');

  const tabContent: Record<TabType, React.ReactElement> = {
    Details: (
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-4">Product Details</h2>
        <p className="text-zinc-300">
          Experience luxury and comfort with our premium cotton t-shirt. Designed for a perfect fit, this t-shirt is made with 100% organic cotton, offering a soft and breathable feel.
        </p>
        <ul className="mt-4 space-y-2 list-disc ml-[1rem]">
          <li>Material: 100% Organic Cotton</li>
          <li>Available Colors: Black, White, Grey</li>
          <li>Machine Washable</li>
          <li>Unisex Fit</li>
        </ul>
      </div>
    ),
    Shipping: (
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-4">Shipping Information</h2>
        <p className="text-zinc-300">We offer free shipping on all orders above $50.</p>
        <ul className="mt-4 space-y-2 list-disc ml-[1rem]">
          <li>Standard: 5-7 business days</li>
          <li>Express: 2-3 business days</li>
          <li>International: 7-14 business days</li>
        </ul>
      </div>
    ),
    Return: (
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-4">Return Policy</h2>
        <p className="text-zinc-300">
          Return within 30 days for a full refund or exchange.
        </p>
        <ul className="mt-4 space-y-2 list-disc ml-[1rem]">
          <li>30-day return window</li>
          <li>Full refund or exchange</li>
          <li>Must be unused and in original packaging</li>
        </ul>
      </div>
    ),
    'Size Chart': (
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-4">Size Chart</h2>
        <table className="w-full border-collapse border border-zinc-600 text-zinc-300">
          <thead>
            <tr className="bg-zinc-800">
              <th className="border border-zinc-600 p-3">Size</th>
              <th className="border border-zinc-600 p-3">Chest (inches)</th>
              <th className="border border-zinc-600 p-3">Length (inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-600 p-3 text-center">S</td>
              <td className="border border-zinc-600 p-3 text-center">34-36</td>
              <td className="border border-zinc-600 p-3 text-center">26</td>
            </tr>
            <tr className="bg-zinc-800">
              <td className="border border-zinc-600 p-3 text-center">M</td>
              <td className="border border-zinc-600 p-3 text-center">38-40</td>
              <td className="border border-zinc-600 p-3 text-center">27</td>
            </tr>
            <tr>
              <td className="border border-zinc-600 p-3 text-center">L</td>
              <td className="border border-zinc-600 p-3 text-center">42-44</td>
              <td className="border border-zinc-600 p-3 text-center">28</td>
            </tr>
            <tr className="bg-zinc-800">
              <td className="border border-zinc-600 p-3 text-center">XL</td>
              <td className="border border-zinc-600 p-3 text-center">46-48</td>
              <td className="border border-zinc-600 p-3 text-center">29</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  };

  return (
    <div className="mb-[7rem]">
      <div className="flex border-b border-black">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`min-w-[10rem] text-center py-4 border-r border-black transition-all ${
              activeTab === tab
                ? 'bg-zinc-950 text-white font-semibold'
                : 'bg-zinc-900 hover:bg-zinc-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-zinc-950 min-h-[45vh] text-zinc-100 p-6">
        {tabContent[activeTab]}
      </div>
    </div>
  );
}

export default ProductTabs;
