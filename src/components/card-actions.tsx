import React from 'react';

const CardActions = () => {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:shadow-md transition">
        Create New Card
      </button>
      <button className="border border-green-500 text-green-500 font-semibold px-6 py-2 rounded-md hover:bg-green-50 transition">
        Freeze Card
      </button>
      <button className="border border-red-500 text-red-500 font-semibold px-6 py-2 rounded-md hover:bg-red-50 transition">
        Delete Card
      </button>
    </div>
  );
};

export default CardActions;
