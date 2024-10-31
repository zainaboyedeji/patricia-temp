import { FC } from "react";
import Image from "next/image";

const CardDetails: FC = () => {
  return (
    <div className="bg-[#F9FAFC] rounded-lg p-6 w-full mx-auto mt-5 flex justify-between">
      <div className="flex flex-col space-y-5 w-[60%]">
        <div className="flex justify-between items-center">
          <p className="text-[#9DA8B6]">Card Balance:</p>
          <p className="text-patriciaGreen font-medium">$3000.73</p>

        </div>

        <div className="flex justify-between items-center">
          <p className="text-[#9DA8B6]">Name:</p>
          <p className="text-patriciaGrey font-medium">Netflix Card</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-400">Card Status:</p>
          <p className="text-gray-800 font-medium text-right">Active</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-400">Billing Address:</p>
          <p className="text-gray-800 font-medium flex items-center space-x-2">
            <span>Patricia HQ, SA 109827</span>
            <Image src="/copy.svg" alt="Eye" width={20} height={20} />
            </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-400">Date Created:</p>
          <p className="text-gray-800 font-medium">March 3rd 2020, 9:48:36 am</p>
        </div>
      </div>
      <button className="self-start px-2 py-2 border border-green-600 text-green-600 rounded-lg text-sm font-semibold w-[118px] hover:bg-green-50">
  Fund Card
</button>
    </div>
  );
};

export default CardDetails;
