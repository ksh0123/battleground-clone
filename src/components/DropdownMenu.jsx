import { useState } from "react";
import Header from "./Header";

const DropdownMenu = () => {
  const [hovered, setHovered] = useState(false);

  const mouseEnter = () => {
    setHovered(true);
  };

  const mouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="relative">
      <div onMouseEnter={mouseEnter}>
        <Header className="cursor-pointer" />
      </div>
      {hovered && (
        <div
          className="bg-red-100 z-20 absolute min-w-full top-full flex flex-row justify-center items-center py-5 gap-5"
          onMouseLeave={mouseLeave}
        >
          <ul className="h-full flex flex-col">
            <li className="flex">About</li>
            <li className="flex">About</li>
            <li className="flex">About</li>
            <li className="flex">About</li>
            <li className="flex">About</li>
            <li className="flex">About</li>
            <li className="flex">About</li>
            <li className="flex">About</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
