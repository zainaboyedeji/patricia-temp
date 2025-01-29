import DatePicker from "react-datepicker";
import Image from "next/image";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mb-4 w-full">
      <h2 className="text-[#9DA8B6] font-normal lg:w-[30%] w-full mb-4 lg:mb-0">
        Recent Activity
      </h2>
      
      <div className="flex items-center justify-end w-full lg:w-[70%] space-x-4">
        <div className="flex items-center bg-gray-100 p-2 rounded-lg flex-1">
          <Image src="/calendar.svg" alt="Calendar" width={20} height={20} />
          <div className="flex items-center ml-2 whitespace-nowrap">
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
        
        <div className="flex items-center">
          <Image src="/download.svg" alt="Download" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}