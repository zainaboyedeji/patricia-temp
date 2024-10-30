import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import router from "next/router";

const links = [
  { name: "Dashboard", icon: "/dashboard.svg" },
  { name: "Activity", icon: "/activity.svg" },
  { name: "Wallet", icon: "/wallet.svg" },
  { name: "Products", icon: "/products.svg", href: "/card" },
  { name: "Referral", icon: "/referral.svg" },
  { name: "Help Center", icon: "/question.svg", extraClasses: "mt-60" },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard");

  return (
    <div className="border-r">
      <div className="lg:hidden p-4 bg-white shadow-md">
        <FaBars className="text-2xl" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div
        className={`lg:block ${
          isOpen ? "block" : "hidden"
        } lg:w-64 h-screen fixed lg:relative z-50`}
      >
        <div className="mt-10 p-4 pl-8">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={120}
            onClick={() => router.push("/")}
          />
        </div>
        <ul className="mt-20">
          {links.map(({ name, icon, href = "#", extraClasses = "" }) => (
            <li key={name} className={`pr-6 ${extraClasses}`}>
              <a
                href={href}
                onClick={() => setActiveLink(name)}
                className={`rounded-r-lg p-4 pl-8 flex items-center text-[14px] font-medium text-primaryColor hover:text-gray-900 mb-3 ${
                  activeLink === name
                    ? "bg-[#FFEEA7] text-[#006156] text-md font-bold"
                    : ""
                }`}
              >
                <Image src={icon} alt={name} width={20} height={20} />
                <span className="ml-5 font-medium">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
