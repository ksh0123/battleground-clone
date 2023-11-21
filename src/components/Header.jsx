const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-black bg-opacity-50 max-w-full h-[77px] mx-auto px-[41px] flex justify-between items-center">
      <img
        src="https://www.krafton.com/wp-content/themes/krafton/assets/img/logo/logo-white.png"
        alt="header logo"
        className="w-[110px]"
      />
      <div className="text-white justify-between hidden lg:flex flex-row gap-6 xl:gap-12 xl:text-xl 2xl:gap-20">
        <li className="list-none  text-lg">About</li> 
        <li className="list-none  text-lg">Games</li>
        <li className="list-none  text-lg">Studios</li>
        <li className="list-none  text-lg">More Experience</li>
        <li className="list-none  text-lg">Careers</li>
        <li className="list-none  text-lg">IR</li>
        <li className="list-none  text-lg">CSR</li>
        <li className="list-none  text-lg">News</li>
      </div>
      <div className="w-[120px] justify-between flex flex-row">
        <li className="list-none text-slate-300 text-xs">KO</li>
        <li className="list-none text-white text-xs">|</li>
        <li className="list-none text-slate-300 text-xs">EN</li>
        <li className="list-none text-white text-xs">|</li>
        <li className="list-none text-slate-300 text-xs">CH</li>
        <li className="list-none text-white text-xs">|</li>
        <li className="list-none text-slate-300 text-xs">JP</li>
      </div>
    </div>
  );
};

export default Header;
