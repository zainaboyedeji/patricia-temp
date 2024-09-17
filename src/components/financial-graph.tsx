import React from "react";
import Image from "next/image";
import GraphTime from "../../public/graph-time.svg"

const FinancialDashboard: React.FC = () => {
  return (
    <div className="bg-[url('../../public/graph-bg.svg')] bg-cover bg-patriciaGreen text-white p-6 rounded-[1.5rem] shadow-md max-w-4xl mx-auto mt-5">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="mr-6">
          <h2 className="text-patriciaTextGreen text-sm mb-3">Total Balance</h2>
          <p className="text-4xl font-bold">₦89,153,001.73</p>
          <p className="text-sm text-gray-300 mt-2">Book Balance: ₦450,000.093</p>
        </div>

        <div className="mt-4 lg:mt-0 border-l-[1px] border-[patricialineGreen]">
          <Image
            src={GraphTime}
            alt="Logo"
            width={250}
            height={250}
          />
        </div>

        <div className="flex flex-col text-right mt-4 lg:mt-0">
          <div>
            <p className="text-patriciaTextGreen text-sm">Outflow</p> 
            <p className="text-sm">₦20,000</p>
          </div>
          <div className="mt-5">
            <p className="text-patriciaTextGreen text-sm">Inflow</p> 
            <p className="text-sm">₦20,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
