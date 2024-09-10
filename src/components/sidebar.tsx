import React from 'react';
import { FaWallet, FaRegChartBar, FaGift, FaRegLifeRing } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg">
      <div className="p-6">
        <img src="/patricia-logo.png" alt="Logo" className="mb-8" />
        <ul className="space-y-6">
          <li>
            <a href="#" className="flex items-center text-lg font-medium text-gray-700 hover:text-gray-900">
              <FaRegChartBar className="mr-3" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-lg font-medium text-gray-700 hover:text-gray-900">
              <FaWallet className="mr-3" /> Wallet
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-lg font-medium text-gray-700 hover:text-gray-900">
              <FaGift className="mr-3" /> Products
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-lg font-medium text-gray-700 hover:text-gray-900">
              <FaRegLifeRing className="mr-3" /> Help Center
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
