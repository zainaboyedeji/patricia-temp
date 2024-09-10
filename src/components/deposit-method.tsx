import React from 'react';
import { FaUniversity, FaMobileAlt, FaCreditCard } from 'react-icons/fa';

const DepositMethods: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-800">Deposit Methods</h3>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <FaUniversity className="text-green-700" />
          <span className="text-gray-600">Bank Deposit</span>
          <a href="#" className="text-green-600">Select</a>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <FaMobileAlt className="text-green-700" />
          <span className="text-gray-600">USSD Deposit</span>
          <a href="#" className="text-green-600">Select</a>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <FaCreditCard className="text-green-700" />
          <span className="text-gray-600">Card Deposit</span>
          <a href="#" className="text-green-600">Select</a>
        </div>
      </div>
    </div>
  );
};

export default DepositMethods;
