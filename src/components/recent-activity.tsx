import React from "react";
import Image from "next/image";

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
  return (
    <>
      <div className="flex mt-5 w-full justify-between">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg w-[48%] border-[1px] border-[#EFF2F7]">
          <Image
            src="/request.svg"
            alt="Request Money"
            width={40}
            height={40}
          />
          <span className="text-sm lg:text-base text-gray-600">
            Request Money
          </span>
          <Image src="/arrow.svg" alt="Arrow" width={10} height={10} />
        </div>
        <div className="flex justify-between items-center bg-white p-4 rounded-lg w-[48%] border-[1px] border-[#EFF2F7]">
          <Image
            src="/cardless-withdrawal.svg"
            alt="Cardless Withdrawal"
            width={40}
            height={40}
          />
          <span className="text-sm lg:text-base text-gray-600">
            Cardless Withdrawal
          </span>
          <Image
            src="/arrow-deep.svg"
            alt="Arrow Deep"
            width={10}
            height={10}
          />
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md mt-6 border-[1px] border-[#EFF2F7]">
        <h3 className="text-sm lg:text-lg text-[#9DA8B6]">Recent Activity</h3>

        <ul className="mt-4 space-y-2 lg:space-y-4">
          {transactions.map((transaction, idx) => (
            <li
              key={idx}
              className="flex flex-wrap lg:flex-nowrap justify-between items-center text-sm lg:text-base w-full hover:bg-gray-200 transition-colors duration-200 p-2"
            >
              <div className="w-1/5">
                <Image
                  src="/naira-light.svg"
                  alt="Naira"
                  width={40}
                  height={40}
                />
              </div>

              <span className="text-patriciaGrey w-1/5 font-bold">
                {transaction.type}
              </span>
              <span className="text-[#9DA8B6] w-1/5">{transaction.amount}</span>
              <span className="text-[#9DA8B6] w-1/5">{transaction.time}</span>

              <span
                className={`w-1/5 text-center lg:text-left font-bold ${
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
