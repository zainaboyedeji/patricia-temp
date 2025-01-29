import { useState } from "react";
import Image from "next/image";

interface DepositOptionProps {
  iconSrc: string;
  altText: string;
  label: string;
  defaultArrowSrc: string;
  hoverArrowSrc: string;
  labelClass?: string;
  bgColor?: string;
}

const DepositOption: React.FC<DepositOptionProps> = ({
  iconSrc,
  altText,
  label,
  defaultArrowSrc,
  hoverArrowSrc,
  labelClass = "text-gray-600",
  bgColor 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex justify-between items-center py-6 px-4 rounded-2xl transition-colors duration-200 ${bgColor} hover:bg-gray-50`}
      style={{
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.05), 0px 5px 10px rgba(0, 0, 0, 0.02)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={iconSrc} alt={altText} width={40} height={40} />
      <span
        className={`text-sm lg:text-base ${labelClass} ${
          isHovered ? "text-patriciaGreen" : "text-gray-600"
        } transition-colors duration-200`}
      >
        {label}
      </span>
      <Image
        src={isHovered ? hoverArrowSrc : defaultArrowSrc}
        alt="Arrow"
        width={10}
        height={10}
        className="transition-all duration-200"
      />
    </div>
  );
};

interface TabComponentProps {
  bgColor?: string;
}

const TabComponent: React.FC<TabComponentProps> = ({ bgColor = "bg-white" }) => {
  const [activeTab, setActiveTab] = useState<"deposit" | "wallet">("deposit");

  const renderContent = () => {
    if (activeTab === "deposit") {
      return (
        <div className="p-6 mt-6">
          <h3 className="text-base lg:text-lg font-semibold text-gray-800 text-center">
            Select a method to Fund <br /> Naira wallet below
          </h3>
          <div className="mt-4 space-y-2 lg:space-y-4">
            <DepositOption
              iconSrc="/bank.svg"
              altText="Bank"
              label="Bank Deposit"
              defaultArrowSrc="/arrow.svg"
              hoverArrowSrc="/arrow-deep.svg"
              bgColor="bg-white"
            />
            <DepositOption
              iconSrc="/mobile-phone-button.svg"
              altText="Mobile Phone"
              label="USSD Deposit"
              defaultArrowSrc="/arrow.svg"
              hoverArrowSrc="/arrow-deep.svg"
              bgColor="bg-white"
            />
            <DepositOption
              iconSrc="/red-deposit.svg"
              altText="Red Deposit"
              label="Card Deposit"
              defaultArrowSrc="/arrow.svg"
              hoverArrowSrc="/arrow-deep.svg"
              bgColor="bg-white"
            />
            <DepositOption
              iconSrc="/graduation-cap.svg"
              altText="Graduation Cap"
              label="Learn More about Funding your wallet"
              defaultArrowSrc="/arrow-deep.svg"
              hoverArrowSrc="/arrow.svg"
              labelClass="ml-2 text-patriciaGreen font-bold"
              bgColor="bg-patriciaLightGreen"
            />
          </div>
        </div>
      );
    } else if (activeTab === "wallet") {
      return (
        <div className={`p-6 rounded-lg shadow-md mt-6 ${bgColor}`}>
          <h3 className="text-base lg:text-lg font-semibold text-gray-800">
            Wallet Information
          </h3>
          <p className="mt-4 text-sm lg:text-base text-gray-600">
            Your wallet balance is
            <span className="font-bold text-green-700">$1,200.00</span>.
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
    <div className={`rounded-lg shadow-md mt-5 border border-[#EFF2F7] ${bgColor}`}>
      <div className="flex w-full">
        <button
          className={`p-6 w-[50%] ${
            activeTab === "deposit"
              ? "text-patriciaGreen"
              : "bg-[#EFF2F7] text-[#9DA8B6]"
          }`}
          onClick={() => setActiveTab("deposit")}
        >
          Deposit
        </button>
        <button
          className={`p-6 w-[50%] ${
            activeTab === "wallet"
              ? "text-patriciaGreen"
              : "bg-[#EFF2F7] text-[#9DA8B6]"
          }`}
          onClick={() => setActiveTab("wallet")}
        >
          Wallet
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default TabComponent;
