import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/virtual-card.svg"
            alt="Virtual Card"
            width={40}
            height={40}
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Virtual Card
            </h2>
            <p className="text-sm text-gray-400">Lorem Ipsum dolor sit amet</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600">
          Create New Card
        </button>
      </div>
      <div className="flex w-full">
        <div className="max-w-sm rounded-2xl bg-[#1D1E2C] p-6 relative overflow-hidden mr-5 card-bg-pattern">
          <div className="absolute top-0 left-0 w-full h-full"></div>

          <div className="absolute top-4 right-4">
            <span className="text-white">👁️</span>
          </div>

          <div className="text-white text-xl font-bold mb-4">PATRICIA</div>

          <div className="text-white text-xl font-semibold tracking-widest flex space-x-4">
            <span>7545</span>
            <span>7545</span>
            <span>7545</span>
            <span>7545</span>
          </div>

          <div className="mt-4 text-white flex">
            <span className="text-sm font-light">BALANCE</span>
            <div className="text-2xl font-bold">$200,000</div>
          </div>

          <div className="mt-6 text-white flex">
            <div className="text-sm font-light">Card Holder Name</div>
            <div className="mt-2 flex justify-between">
              <div>
                <div className="text-sm">VALID THRU</div>
                <div className="font-semibold">10/12</div>
              </div>
              <div>
                <div className="text-sm">CVV</div>
                <div className="font-semibold">•••</div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="max-w-sm rounded-2xl bg-[#DEF5F2] p-6 relative overflow-hidden card-bg-pattern-2">
          <div className="absolute top-0 left-0 w-full h-full"></div>

          <div className="absolute top-4 right-4">
            <span className="text-white">👁️</span>
          </div>

          <div className="text-white text-xl font-bold mb-4">PATRICIA</div>

          <div className="text-white text-xl font-semibold tracking-widest flex space-x-4">
            <span>7545</span>
            <span>7545</span>
            <span>7545</span>
            <span>7545</span>
          </div>

          <div className="mt-4 text-white flex">
            <span className="text-sm font-light">BALANCE</span>
            <div className="text-2xl font-bold">$200,000</div>
          </div>

          <div className="mt-6 text-white flex">
            <div className="text-sm font-light">Card Holder Name</div>
            <div className="mt-2 flex justify-between">
              <div>
                <div className="text-sm">VALID THRU</div>
                <div className="font-semibold">10/12</div>
              </div>
              <div>
                <div className="text-sm">CVV</div>
                <div className="font-semibold">•••</div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex">
      <button className="px-2 py-2 border border-green-600 text-green-600 rounded-lg text-sm font-semibold hover:bg-green-50">
          Freeze Card
        </button>
        <button className="px-2 py-2 border border-green-600 text-green-600 rounded-lg text-sm font-semibold hover:bg-green-50">
          Delete Card
        </button>
      </div>
    </>
  );
};

export default Card;
