import React from 'react';

interface ActivityItemProps {
  name: string;
  date: string;
  amount: number;
  icon: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ name, date, amount, icon }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-4">
        <span className="rounded-full bg-gray-200 p-2">{icon}</span>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
      <p className="font-semibold">${amount}</p>
    </div>
  );
};

export default ActivityItem;
