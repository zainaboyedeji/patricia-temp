import React from "react";
import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  hoverColor: string;
}

interface CardData {
  bgColor: string;
  balanceColor: string;
  blur: string;
  eyeIcon: string;
  logo: string;
}

const Card = () => {
  const cardDetails = [
    { label: "7545", key: "1" },
    { label: "7545", key: "2" },
    { label: "7545", key: "3" },
    { label: "7545", key: "4" },
  ];

  const cardData: CardData[] = [
    {
      bgColor: "bg-[#1D1E2C]",
      balanceColor: "text-white",
      blur: "",
      eyeIcon: "/eye.svg",
      logo: "/patricia-white.svg",
    },
    {
      bgColor: "bg-[#DEF5F2]",
      balanceColor: "text-black",
      blur: "blur-sm",
      eyeIcon: "/eye-close.svg",
      logo: "/logo.svg",
    },
  ];

  const Button: React.FC<ButtonProps> = ({ children, color, hoverColor }) => (
    <button
      className={`px-2 py-2 border rounded-lg text-sm font-semibold ${color} ${hoverColor} mr-5`}
    >
      {children}
    </button>
  );

  return (
    <div className="space-y-4 mt-4">
      <div className="block lg:flex items-center justify-between mt-5">
        <div className="flex items-center space-x-3">
          <Image
            src="/virtual-card.svg"
            alt="Virtual Card"
            width={40}
            height={40}
          />
          <div>
            <h2 className="flex">
              <span className="text-base font-semibold lg:text-[20px] text-secondaryColor mr-2">
                Virtual Card
              </span>
              <Image
                src="/dropdown.svg"
                alt="Dropdown"
                width={15}
                height={15}
              />
            </h2>
            <p className="text-sm text-[#9DA8B6] font-bold">
              Lorem Ipsum dolor sit amet
            </p>
          </div>
        </div>

        <button className="px-4 py-2 bg-yellow-500  rounded-lg font-normal text-[16px] hover:bg-yellow-600 mt-2 lg:m-0">
          Create New Card
        </button>
      </div>

      <div className="block lg:flex space-x-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full rounded-2xl ${card.bgColor} p-6 relative overflow-hidden h-[204px] mt-4 ${card.blur}`}
          >
            <div className="absolute top-4 right-4">
              <Image src={card.eyeIcon} alt="Eye" width={20} height={20} />
            </div>
            <div className="mb-4">
              <Image src={card.logo} alt="Logo" width={60} height={60} />
            </div>
            <div
              className={`tracking-widest flex justify-between mt-16 ${card.balanceColor}`}
            >
              {cardDetails.map(({ label, key }) => (
                <span key={key}>{label}</span>
              ))}
            </div>
            <div className={`mt-2 flex ${card.balanceColor}`}>
              <span className="text-[9px] mt-1 mr-2">BALANCE</span>
              <div>$200,000</div>
            </div>
            <div className={`flex justify-between mt-2 ${card.balanceColor}`}>
              <div className="text-[10px]">Card Holder Name</div>
              <div className="flex">
                <div className="text-[10px]">
                  VALID <br /> THRU
                </div>
                <div className="text-[10px] mt-1 ml-1">10/12</div>
              </div>
              <div className="flex">
                <div className="text-[10px]">CVV</div>
                <div className="mt-1 ml-1">
                  <Image src="/dot.svg" alt="Dot" width={10} height={10} />
                </div>
              </div>
              <Image
                src="/master-card.svg"
                alt="Master Card Logo"
                width={30}
                height={30}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-5">
        <Button
          color="border-green-600 text-green-600 w-[143px]"
          hoverColor="hover:bg-green-50"
        >
          Freeze Card
        </Button>
        <Button
          color="border-red-600 text-red-600 w-[143px]"
          hoverColor="hover:bg-red-50"
        >
          Delete Card
        </Button>
      </div>
    </div>
  );
};

export default Card;
