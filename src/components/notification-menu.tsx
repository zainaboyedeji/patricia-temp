import React from "react";
import Image from "next/image";

interface NotificationMenuProps {
  containerWidth?: string;
  icons?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

const NotificationMenu: React.FC<NotificationMenuProps> = ({
  containerWidth = "lg:w-[30%] w-full",
  icons = [
    { src: "/notification.svg", alt: "Notification", width: 30, height: 30 },
    { src: "/girl.svg", alt: "Girl", width: 30, height: 30 },
    { src: "/ellipsis.svg", alt: "Ellipsis", width: 5, height: 5 },
  ],
}) => {
  return (
    <div className="flex justify-end">
      <div className={`flex justify-end bg-white p-2 ${containerWidth} rounded-lg`}>
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            className={index < icons.length - 1 ? "mr-2" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationMenu;
