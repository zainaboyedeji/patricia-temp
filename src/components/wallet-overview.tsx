import React from 'react';

const WalletOverview: React.FC = () => {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-base lg:text-lg font-semibold text-gray-800">Naira Wallet</h2>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
        <div className="bg-green-700 text-white p-4 lg:p-6 rounded-lg mt-4 lg:mt-6">
          <h3 className="text-xl lg:text-2xl font-bold">₦89,153,001.73</h3>
          <p className="text-xs lg:text-sm">Book Balance: ₦450,000.093</p>
        </div>
        <div className="h-24 bg-green-200 mt-4 lg:mt-6 rounded-lg">Graph Here</div>
      </div>
    );
  };
  

export default WalletOverview;
