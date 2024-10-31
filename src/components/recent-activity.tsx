import React, { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";

const transactions = [
  {
    type: "Self Withdrawal",
    amount: "0.003 BTC",
    status: "Success",
    time: "Just now",
  },
  { type: "Deposit", amount: "0.003 BTC", status: "Failed", time: "Today" },
  { type: "Transfer", amount: "0.003 BTC", status: "Pending", time: "7:23AM" },
  {
    type: "Deposit",
    amount: "0.003 BTC",
    status: "Success",
    time: "Yesterday",
  },
];

const RecentActivity: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <>
      <div className="flex w-full justify-between mt-2">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg w-[48%] border-[1px] border-[#EFF2F7] group transition-colors duration-200">
          <Image
            src="/request.svg"
            alt="Request Money"
            width={40}
            height={40}
            className="transition duration-300"
          />
          <span className="text-sm lg:text-base text-[#444854] group-hover:text-patriciaGreen">
            Request Money
          </span>
          <div className="relative">
            <Image
              src="/arrow.svg"
              alt="Arrow Light"
              width={10}
              height={10}
              className="transition duration-300"
            />
            <Image
              src="/arrow-deep.svg"
              alt="Arrow Deep"
              width={10}
              height={10}
              className="absolute top-0 left-0 transition duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-4 rounded-lg w-[48%] border-[1px] border-[#EFF2F7] group hover:bg-gray-200 transition-colors duration-200">
          <Image
            src="/cardless-withdrawal.svg"
            alt="Cardless Withdrawal"
            width={40}
            height={40}
            className="transition duration-300"
          />
          <span className="text-sm lg:text-base text-[#444854] group-hover:text-patriciaGreen">
            Cardless Withdrawal
          </span>
          <div className="relative">
            <Image
              src="/arrow.svg"
              alt="Arrow Light"
              width={10}
              height={10}
              className="transition duration-300"
            />
            <Image
              src="/arrow-deep.svg"
              alt="Arrow Deep"
              width={10}
              height={10}
              className="absolute top-0 left-0 transition duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg mt-6 border border-[#EFF2F7]">
  <div className="flex flex-wrap justify-between items-center mb-4 w-full">
    <h2 className="text-[#9DA8B6] font-normal w-full sm:w-[30%] mb-2 sm:mb-0">
      Recent Activity
    </h2>
    <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg w-full sm:w-[60%] max-w-xs">
      <Image src="/calendar.svg" alt="Calendar" width={20} height={20} />
      <div className="flex items-center w-[60%]">
        <span className="text-gray-500 text-sm mr-2">Start date:</span>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yy"
          className="text-gray-500 text-sm focus:outline-none bg-transparent"
          popperClassName="react-datepicker"
        />
      </div>
      <div>
        <Image src="/download.svg" alt="Download" width={20} height={20} />
      </div>
    </div>
  </div>
  
  <ul className="mt-4 space-y-2">
    {transactions.map((transaction, idx) => (
      <li
        key={idx}
        className="flex flex-wrap lg:flex-nowrap justify-between items-center text-sm lg:text-base p-2 rounded transition-colors duration-200 hover:bg-patriciaGreen w-full"
      >
        <div className="w-1/5 text-center lg:text-left mb-2 lg:mb-0">
          <Image src="/naira-light.svg" alt="Naira" width={40} height={40} />
        </div>
        <span className="text-patriciaGrey text-[14px] font-bold w-1/5 mb-2 lg:mb-0">
          {transaction.type}
        </span>
        <span className="text-[#9DA8B6] text-[14px] font-bold w-1/5 mb-2 lg:mb-0">
          {transaction.amount}
        </span>
        <span className="text-[#9DA8B6] text-[14px] font-bold w-1/5 mb-2 lg:mb-0">
          {transaction.time}
        </span>
        <span
          className={`w-1/5 text-center lg:text-left text-[14px] font-bold ${
            transaction.status === "Success"
              ? "text-green-600"
              : transaction.status === "Failed"
              ? "text-red-600"
              : "text-yellow-500"
          }`}
        >
          {transaction.status}
        </span>
      </li>
    ))}
  </ul>
</div>

    </>
  );
};

export default RecentActivity;
