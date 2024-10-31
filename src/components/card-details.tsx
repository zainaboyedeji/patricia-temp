import { FC } from "react";
import Image from "next/image";

const CardDetails: FC = () => {
  return (
    <div className="bg-[#F9FAFC] rounded-lg p-2 lg:p-6 w-full mx-auto mt-5 flex">
    <div className="flex flex-col space-y-5 w-[80%]">
      <div className="flex space-x-4 items-center">
        <p className="text-[#9DA8B6] text-left w-[200px]">Card Balance:</p>
        <p className="text-patriciaGreen font-medium text-left">$3000.73</p>
      </div>
  
      <div className="flex space-x-4 items-center">
        <p className="text-[#9DA8B6] text-left w-[200px]">Name:</p>
        <p className="text-patriciaGrey font-medium text-left">Netflix Card</p>
      </div>
  
      <div className="flex space-x-4 items-center">
        <p className="text-gray-400 text-left w-[200px]">Card Status:</p>
        <p className="text-gray-800 font-medium text-left">Active</p>
      </div>
  
      <div className="flex space-x-4 items-center">
        <p className="text-gray-400 text-left w-[200px]">Billing Address:</p>
        <p className="text-gray-800 font-medium flex items-center space-x-2 text-left">
          <span>Patricia HQ, SA 109827</span>
          <Image src="/copy.svg" alt="Copy Icon" width={16} height={16} />
        </p>
      </div>
  
      <div className="flex space-x-4 items-center">
        <p className="text-gray-400 text-left w-[200px]">Date Created:</p>
        <p className="text-gray-800 font-medium text-left">March 3rd 2020, 9:48:36 am</p>
      </div>
    </div>
    <button className="self-start px-2 py-2 border border-green-600 text-green-600 rounded-lg text-sm font-semibold w-[118px] hover:bg-green-50 ">
      Fund Card
    </button>
  </div>
  
  );
};

export default CardDetails;
