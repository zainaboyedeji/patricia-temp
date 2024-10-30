import { FC } from 'react';
import Image from "next/image";

const CardDashboard: FC = () => {
  return (
    <div className="rounded-lg  p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
        <Image src="/virtual-card.svg" alt="Virtual Card" width={40} height={40} />
        <div>
            <h2 className="text-xl font-semibold text-gray-800">Virtual Card</h2>
            <p className="text-sm text-gray-400">Lorem Ipsum dolor sit amet</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600">
          Create New Card
        </button>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-96 h-56 bg-gray-900 rounded-2xl text-white p-6 shadow-lg">
        
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <svg
            className="absolute top-0 right-0 w-64 h-64 text-gray-700 opacity-20"
            fill="none"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M..." fill="currentColor" />
          </svg>
        </div>

        <div className="font-bold text-lg tracking-widest mb-6">PATRICIA</div>

        <div className="flex space-x-4 text-xl mb-4">
          <span>7545</span>
          <span>7545</span>
          <span>7545</span>
          <span>7545</span>
        </div>

        <div className="text-sm mb-2">BALANCE</div>
        <div className="text-2xl font-semibold mb-4">$200,000</div>

        <div className="flex justify-between text-sm mt-4">
          <span>Card Holder Name</span>
          <span>VALID THRU</span>
          <span className="font-medium">10/12</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-1">
            <span>CVV</span>
            <span className="text-2xl text-gray-300">•••</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full -ml-2"></div>
          </div>
        </div>
      </div>
    </div>

      <div className="flex space-x-4">
        <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50">
          Freeze Card
        </button>
        <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50">
          Delete Card
        </button>
      </div>
    </div>
  );
};

export default CardDashboard;
