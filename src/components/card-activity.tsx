import { FC } from "react";
import Image from "next/image";

interface Activity {
  icon: JSX.Element;
  name: string;
  date: string;
  amount: string;
  bgColor: string;
}

const activities: Activity[] = [
  {
    icon: <Image src="/netflix.svg" alt="Netflix" width={10} height={10} />,
    name: "Netflix",
    date: "Just now",
    amount: "$377.23",
    bgColor: "bg-[#CC4945]",
  },
  {
    icon: <Image src="/nike.svg" alt="Nike" width={10} height={10} />,
    name: "Nike",
    date: "Today",
    amount: "$237,737.55",
    bgColor: "bg-[#1D1E2C]",
  },
  {
    icon: <Image src="/starbucks.svg" alt="Starbucks" width={10} height={10} />,
    name: "Starbucks",
    date: "Yesterday",
    amount: "$873,873,834.3",
    bgColor: "bg-[#006156]",
  },
  {
    icon: <Image src="/amazon.svg" alt="Amazon" width={10} height={10} />,
    name: "Amazon",
    date: "June 17",
    amount: "$599",
    bgColor: "bg-[#FEA202]",
  },
  {
    icon: <Image src="/apple.svg" alt="Apple" width={10} height={10} />,
    name: "Apple",
    date: "June 15",
    amount: "$872",
    bgColor: "bg-[#2A69AF]",
  },
  {
    icon: <Image src="/netflix.svg" alt="Netflix" width={10} height={10} />,
    name: "Netflix",
    date: "June 13",
    amount: "$244.55",
    bgColor: "bg-red-400",
  },
  {
    icon: <Image src="/nike.svg" alt="Nike" width={10} height={10} />,
    name: "Nike",
    date: "June 11",
    amount: "$452",
    bgColor: "bg-[#1D1E2C]",
  },
  {
    icon: <Image src="/amazon.svg" alt="Amazon" width={10} height={10} />,
    name: "Amazon",
    date: "June 09",
    amount: "$990",
    bgColor: "bg-[#FEA202]",
  },
];

const CardActivity: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full sm:max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-600 font-semibold">Recent Activity</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center text-gray-500 text-sm space-x-1 bg-gray-100 px-2 py-1 rounded-lg">
            <p> nnfjfj</p> <span>Start date: 01/02/21</span>
          </button>
          <button className="text-gray-500">
            <p> nnfjfj</p>
          </button>
        </div>
      </div>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div
                className={`rounded-lg p-2 ${
                  activity.bgColor.startsWith("bg-") ? activity.bgColor : ""
                }`}
                style={{
                  backgroundColor: activity.bgColor.startsWith("#")
                    ? activity.bgColor
                    : undefined,
                }}
              >
                {activity.icon}
              </div>

              <div>
                <p className="font-medium text-gray-800">{activity.name}</p>
                <p className="text-gray-400 text-sm">{activity.date}</p>
              </div>
            </div>
            <p className="font-semibold text-gray-600">{activity.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardActivity;