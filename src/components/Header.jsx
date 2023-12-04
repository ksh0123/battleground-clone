const Header = ({ isHidden }) => {
  return (
    <div
      className={`sticky top-0 z-10 bg-black bg-opacity-50 max-w-full h-[77px] mx-auto px-5 lg:px-[40px] xl:px-[60px] 2xl:px-[80px] flex justify-between items-center ${
        isHidden && "opacity-0"
      }`}
    >
      <img
        src="https://www.krafton.com/wp-content/themes/krafton/assets/img/logo/logo-white.png"
        alt="header logo"
        className="w-[136px] sm:w-[213.6px] lg:w-[120px]"
      />
      <div className="text-white justify-between hidden lg:flex flex-row gap-6 xl:gap-12 xl:text-xl 2xl:gap-14">
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
        <li className="list-none text-neutral-500 font-bold">KO</li>
        <li className="list-none text-white">|</li>
        <li className="list-none text-neutral-50">EN</li>
        <li className="list-none text-white">|</li>
        <li className="list-none text-neutral-500">CH</li>
        <li className="list-none text-white">|</li>
        <li className="list-none text-neutral-500">JP</li>
      </div>
    </div>
  );
};

export default Header;
