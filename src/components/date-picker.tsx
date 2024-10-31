import DatePicker from "react-datepicker";
import Image from "next/image";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="lg:flex justify-between  mb-4 w-full whitespace-nowrap">
      <h2 className="text-[#9DA8B6] font-normal w-[30%]">Recent Activity</h2>
      <div className="flex lg:w-[50%] w-full">
        <div className="mt-2 lg:mt-0 flex space-x-2 bg-gray-100 p-2 rounded-lg w-[80%]">
          <Image src="/calendar.svg" alt="Calendar" width={20} height={20} />
          <div className="flex items-center  whitespace-nowrap">
            <span className="text-gray-500 text-sm mr-2">Start date:</span>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yy"
              className="text-gray-500 text-sm focus:outline-none bg-transparent"
              popperClassName="react-datepicker"
            />
          </div>
        </div>
        <div className="mt-4 ml-4 lg:mt-2 lg:ml-2">
          <Image src="/download.svg" alt="Download" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
