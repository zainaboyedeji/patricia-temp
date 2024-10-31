import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import NotificationMenu from "./notification-menu";

const links = [
  { name: "Dashboard", icon: "/dashboard.svg", href: "/" },
  { name: "Activity", icon: "/activity.svg", href: "/card" },
  { name: "Wallet", icon: "/wallet.svg", href: "/" },
  { name: "Products", icon: "/products.svg", href: "/card" },
  { name: "Referral", icon: "/referral.svg", href: "/" },
  {
    name: "Help Center",
    icon: "/question.svg",
    extraClasses: "mt-60",
    href: "/card",
  },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard");
  const router = useRouter();

  return (
    <div className="border-r bg-white lg:bg-transparent">
      {/* Mobile Burger Menu */}
      <div className="lg:hidden p-4 bg-white shadow-md flex items-center justify-between">
        {isOpen ? (
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        {/* Icons Section */}
        <NotificationMenu />
      </div>

      {/* Sidebar */}
      <div
        className={`lg:block ${
          isOpen ? "block" : "hidden"
        } lg:w-64 h-screen fixed lg:relative z-50 bg-white transition-all`}
      >
        <div className="mt-5 p-4 pl-8">
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
                onClick={() => {
                  setActiveLink(name);
                  setIsOpen(false);
                }}
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
