import Image from "next/image";
import { useState, FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationMenu from "./notification-menu";

interface Activity {
  icon: JSX.Element;
  name: string;
  date: string;
  amount: string;
  bgColor: string;
}

const activities: Activity[] = [
  {
    icon: <Image src="/netflix.svg" alt="Netflix" width={20} height={20} />,
    name: "Netflix",
    date: "Just now",
    amount: "$377.23",
    bgColor: "bg-[#CC4945]",
  },
  {
    icon: <Image src="/nike.svg" alt="Nike" width={20} height={20} />,
    name: "Nike",
    date: "Today",
    amount: "$237,737.55",
    bgColor: "bg-[#1D1E2C]",
  },
  {
    icon: <Image src="/starbucks.svg" alt="Starbucks" width={20} height={20} />,
    name: "Starbucks",
    date: "Yesterday",
    amount: "$873,873,834.3",
    bgColor: "bg-[#006156]",
  },
  {
    icon: <Image src="/amazon.svg" alt="Amazon" width={20} height={20} />,
    name: "Amazon",
    date: "June 17",
    amount: "$599",
    bgColor: "bg-[#FEA202]",
  },
  {
    icon: <Image src="/apple.svg" alt="Apple" width={20} height={20} />,
    name: "Apple",
    date: "June 15",
    amount: "$872",
    bgColor: "bg-[#2A69AF]",
  },
  {
    icon: <Image src="/netflix.svg" alt="Netflix" width={20} height={20} />,
    name: "Netflix",
    date: "June 13",
    amount: "$244.55",
    bgColor: "bg-red-400",
  },
  {
    icon: <Image src="/nike.svg" alt="Nike" width={20} height={20} />,
    name: "Nike",
    date: "June 11",
    amount: "$452",
    bgColor: "bg-[#1D1E2C]",
  },
  {
    icon: <Image src="/amazon.svg" alt="Amazon" width={20} height={20} />,
    name: "Amazon",
    date: "June 09",
    amount: "$990",
    bgColor: "bg-[#FEA202]",
  },
];

const CardActivity: FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <>
<div className="hidden lg:block">
<NotificationMenu />
</div>      <div className="bg-white rounded-lg shadow-md p-6 w-full mx-auto">
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-[#9DA8B6] font-normal w-[30%]">
            Recent Activity
          </h2>
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg max-w-xs w-[60%]">
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
              <Image
                src="/download.svg"
                alt="Download"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div
                  className={`rounded-lg p-2 flex justify-center items-center ${
                    activity.bgColor.startsWith("bg-") ? activity.bgColor : ""
                  }`}
                  style={{
                    backgroundColor: activity.bgColor.startsWith("#")
                      ? activity.bgColor
                      : undefined,
                  }}
                >
                  <div className="w-8 h-8 flex justify-center items-center">
                    {activity.icon}
                  </div>
                </div>

                <div>
                  <p className="font-medium text-gray-800">{activity.name}</p>
                  <p className="text-gray-400 text-sm">{activity.date}</p>
                </div>
              </div>
              <p className="lg:font-semibold text-gray-600 text-sm lg:text-normal">{activity.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CardActivity;
