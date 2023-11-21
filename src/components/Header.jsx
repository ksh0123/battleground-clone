import { useState, useLayoutEffect } from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-black bg-opacity-50 max-w-full h-[77px] mx-auto px-[20px] lg:px-[40px] xl:px-[60px] 2xl:px-[80px] flex justify-between items-center">
      <img
        src="https://www.krafton.com/wp-content/themes/krafton/assets/img/logo/logo-white.png"
        alt="header logo"
        className="w-[136px] sm:w-[213.6px] lg:w-[110px]"
      />
      <div className="text-white justify-between hidden lg:flex flex-row gap-8 xl:gap-12 xl:text-xl 2xl:gap-[70px]">
        <li className="list-none text-lg">About</li>
        <li className="list-none text-lg">Games</li>
        <li className="list-none text-lg">Studios</li>
        <li className="list-none text-lg">More Experience</li>
        <li className="list-none text-lg">Careers</li>
        <li className="list-none text-lg">IR</li>
        <li className="list-none text-lg">CSR</li>
        <li className="list-none text-lg">News</li>
      </div>
      <div className="w-[120px] justify-between hidden lg:flex lg:text-xs xl:text-xs 2xl:text-sm 2xl:gap-2">
        <li className="list-none text-white font-bold">KO</li>
        <li className="list-none text-white">|</li>
        <li className="list-none text-slate-500">EN</li>
        <li className="list-none text-white">|</li>
        <li className="list-none text-slate-500">CH</li>
        <li className="list-none text-white">|</li>
        <li className="list-none text-slate-500">JP</li>
      </div>
    </div>
  );
};

export default Header;
