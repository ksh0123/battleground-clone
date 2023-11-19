const Header = () => {
  return (
    <div className="max-w-full h-[77px] mx-auto px-[41px] flex justify-between items-center">
      <img
        src="https://www.krafton.com/wp-content/themes/krafton/assets/img/logo/logo-white.png"
        alt="header logo"
        className="w-[110px] translate-x-20"
      />
      <div className="text-white justify-between flex flex-row">
        <li className="list-none px-[26px] text-lg">About</li>
        <li className="list-none px-[26px] text-lg">Games</li>
        <li className="list-none px-[26px] text-lg">Studios</li>
        <li className="list-none px-[26px] text-lg">More Experience</li>
        <li className="list-none px-[26px] text-lg">Careers</li>
        <li className="list-none px-[26px] text-lg">IR</li>
        <li className="list-none px-[26px] text-lg">CSR</li>
        <li className="list-none px-[26px] text-lg">News</li>
      </div>
      <div className="w-[120px] -translate-x-10 justify-between flex flex-row">
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
