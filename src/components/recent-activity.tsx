import React from 'react';

const transactions = [
  { type: 'Self Withdrawal', amount: '0.003 BTC', status: 'Success', time: 'Just now' },
  { type: 'Deposit', amount: '0.003 BTC', status: 'Failed', time: 'Today' },
  { type: 'Transfer', amount: '0.003 BTC', status: 'Pending', time: '7:23AM' },
  { type: 'Deposit', amount: '0.003 BTC', status: 'Success', time: 'Yesterday' },
];

const RecentActivity: React.FC = () => {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md mt-6">
        <h3 className="text-base lg:text-lg font-semibold text-gray-800">Recent Activity</h3>
        <ul className="mt-4 space-y-2 lg:space-y-4">
          {transactions.map((transaction, idx) => (
            <li key={idx} className="flex flex-col lg:flex-row justify-between items-start lg:items-center text-sm lg:text-base">
              <span className="text-gray-600">{transaction.type}</span>
              <span className="text-gray-600">{transaction.amount}</span>
              <span className={`text-sm ${transaction.status === 'Success' ? 'text-green-600' : transaction.status === 'Failed' ? 'text-red-600' : 'text-yellow-500'}`}>
                {transaction.status}
              </span>
              <span className="text-gray-500">{transaction.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default RecentActivity;
