import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Menu for small screens */}
      <div className="lg:hidden p-4 bg-white shadow-md">
        <FaBars className="text-2xl" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Sidebar - hidden on small screens by default */}
      <div
        className={`lg:block ${
          isOpen ? "block" : "hidden"
        } lg:w-64 h-screen bg-white shadow-lg fixed lg:relative z-50`}
      >
        <div className="p-6 mt-10">
          <Image src="/logo.svg" alt="Logo" width={120} height={120} />
          <ul className="space-y-6 mt-20">
            <li>
              <a
                href="#"
                className="flex items-center text-[14px] font-medium text-primaryColor hover:text-gray-900 mb-10"
              >
                <Image src="/dashboard.svg" alt="Dashboard" width={24} height={24} />
                <span className="ml-5 font-normal"> Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-[14px] font-medium text-primaryColor hover:text-gray-900 mb-10"
              >
                <Image src="/activity.svg" alt="Activity" width={20} height={20} />
                <span className="ml-5">Activity</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-[14px] font-medium text-primaryColor hover:text-gray-900 mb-10"
              >
                <Image src="/wallet.svg" alt="Wallet" width={20} height={20} />
                <span className="ml-5"> Wallet</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-[14px] font-medium text-primaryColor hover:text-gray-900 mb-10"
              >
                <Image src="/products.svg" alt="Products" width={20} height={20} />
                <span className="ml-5"> Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-[14px] font-medium text-primaryColor hover:text-gray-900 mb-10"
              >
                <Image src="/referral.svg" alt="Referral" width={20} height={20} />
                <span className="ml-5">Referral</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center text-[14px] font-medium text-primaryColor hover:text-gray-900 mt-80"
              >
                <Image src="/question.svg" alt="Help Center" width={20} height={20} />
                <span className="ml-5"> Help Center </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
