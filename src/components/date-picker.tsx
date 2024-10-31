import DatePicker from "react-datepicker";
import Image from "next/image";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="lg:flex justify-between items-center mb-4 w-full whitespace-nowrap">
      <h2 className="text-[#9DA8B6] font-normal w-[30%]">Recent Activity</h2>
      <div className="mt-2 lg:mt-0 flex items-center space-x-2 bg-gray-100 p-2 rounded-lg max-w-xs lg:w-[60%] w-full">
        <Image src="/calendar.svg" alt="Calendar" width={20} height={20} />
        <div className="flex items-center w-[60%] whitespace-nowrap">
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
  );
}