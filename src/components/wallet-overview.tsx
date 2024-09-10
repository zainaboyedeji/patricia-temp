import React from 'react';

const WalletOverview: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">Naira Wallet</h2>
      <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
      <div className="bg-green-700 text-white p-6 rounded-lg mt-6">
        <h3 className="text-2xl font-bold">₦89,153,001.73</h3>
        <p className="text-sm">Book Balance: ₦450,000.093</p>
      </div>
      {/* Graph Component Placeholder */}
      <div className="h-24 bg-green-200 mt-6 rounded-lg">Graph Here</div>
    </div>
  );
};

export default WalletOverview;
