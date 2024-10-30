import React from "react";
import Image from "next/image";
import FinancialDashboard from "./financial-graph";

const WalletOverview: React.FC = () => {
  return (
    <div className="p-6 rounded-lg">
      <div className="flex">
        <Image src="/naira.svg" alt="Naira" width={40} height={40} />
        <div className="ml-4">
          <h2 className="flex">
            <span className="text-base lg:text-lg font-semibold text-secondaryColor mr-2">
              Naira Wallet
            </span>
            <Image src="/dropdown.svg" alt="Dropdown" width={15} height={15} />
          </h2>
          <p className="text-sm text-primaryColor">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
      <FinancialDashboard />
    </div>
  );
};

export default WalletOverview;
