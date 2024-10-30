import { FC } from "react";
import { FaRegCopy } from "react-icons/fa";

const CardDetails: FC = () => {
  return (
    <div className="bg-[#F9FAFC] rounded-lg p-6 w-full mx-auto">
      <div className="flex justify-between">
        <p className="text-[#9DA8B6]">Card Balance:</p>
        <p className="text-patriciaGreen font-medium">$3000.73</p>
        <button className="px-2 py-2 border border-green-600 text-green-600 rounded-lg text-sm font-semibold hover:bg-green-50">
          Fund Card
        </button>
      </div>
      <div className="flex justify-between mt-5">
          <p className="text-[#9DA8B6]">Name:</p>
          <p className="text-patriciaGrey font-medium">Netflix Card</p>
          <p></p>
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-gray-400">Card Status:</p>
          <p className="text-gray-800 font-medium">Active</p>
          <p></p>
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-gray-400">Billing Address:</p>
          <p className="text-gray-800 font-medium flex items-center space-x-2">
            <span>Patricia HQ, SA 109827</span>
            <FaRegCopy className="text-gray-400 cursor-pointer hover:text-gray-600" />
          </p>
          <p></p>
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-gray-400">Date Created:</p>
          <p className="text-gray-800 font-medium">
            March 3rd 2020, 9:48:36 am
          </p>
          <p></p>
        </div>
      </div>
  );
};

export default CardDetails;
