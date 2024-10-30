import React, { useState } from 'react';
import Image from "next/image";

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deposit' | 'wallet'>('deposit');

  const renderContent = () => {
    if (activeTab === 'deposit') {
      return (
        <div className="p-6 mt-6">
          <h3 className="text-base lg:text-lg font-semibold text-gray-800 text-center">Select a method to Fund <br/> Naira wallet below</h3>
          <div className="mt-4 space-y-2 lg:space-y-4">
            <div className="flex justify-between items-center shadow-md p-4 rounded-lg">
            <Image src="/bank.svg" alt="Bank" width={40} height={40} />
            <span className="text-sm lg:text-base text-gray-600">Bank Deposit</span>
            <Image src="/arrow.svg" alt="Arrow" width={10} height={10} />
            </div>
            <div className="flex justify-between items-center shadow-md p-4 rounded-lg">
            <Image src="/mobile-phone-button.svg" alt="Mobile Phone" width={40} height={40} />
            <span className="text-sm lg:text-base text-gray-600">USSD Deposit</span>
            <Image src="/arrow-deep.svg" alt="Arrow Deep" width={10} height={10} />
            </div>
            <div className="flex justify-between items-center shadow-md p-4 rounded-lg">
            <Image src="/red-deposit.svg" alt="Red Deposit" width={40} height={40} />
            <span className="text-sm lg:text-base text-gray-600">Card Deposit</span>
            <Image src="/arrow.svg" alt="Arrow" width={10} height={10} />
            </div>
            <div className="flex justify-between items-center bg-patriciaLightGreen p-4 rounded-lg">
            <Image src="/graduation-cap.svg" alt="Graduation Cap" width={40} height={40} />
            <span className="text-sm lg:text-[0.9rem] text-patriciaGreen font-bold">Learn More about Funding your wallet</span>
            <Image src="/arrow-deep.svg" alt="Arrow Deep" width={10} height={10} />
            </div>
          </div>
        </div>
      );
    } else if (activeTab === 'wallet') {
      return (
        <div className="p-6 bg-white rounded-lg shadow-md mt-6">
          <h3 className="text-base lg:text-lg font-semibold text-gray-800">Wallet Information</h3>
          <p className="mt-4 text-sm lg:text-base text-gray-600">
            Your wallet balance is <span className="font-bold text-green-700">$1,200.00</span>.
          </p>
          <p className="mt-2 text-sm lg:text-base text-gray-600">
            Recent transactions:
          </p>
          <ul className="mt-2 list-disc pl-5 text-gray-600">
            <li>Deposit of $500 on 12th Sept 2024</li>
            <li>Withdrawal of $300 on 10th Sept 2024</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-md mt-5'>
      <div className="flex w-full">
        <button
          className={`py-2 px-4 w-[50%] ${activeTab === 'deposit' ? 'text-patriciaGreen' : 'bg-[#EFF2F7] text-[#9DA8B6]'}`}
          onClick={() => setActiveTab('deposit')}
        >
          Deposit
        </button>
        <button
          className={`py-2 px-4 w-[50%] ${activeTab === 'wallet' ? 'text-patriciaGreen' : 'bg-[#EFF2F7] text-[#9DA8B6]'}`}
          onClick={() => setActiveTab('wallet')}
        >
          Wallet
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default TabComponent;
