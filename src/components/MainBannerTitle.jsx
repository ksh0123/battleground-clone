const MainBannerTitle = () => {
  return (
    <div className="text-white absolute flex flex-col z-20 translate-y-1/3 -translate-x-[50px]">
      <div className="text-7xl font-semibold pb-12">PUBG: BATTLEGROUNDS</div>
      <div className="flex flex-row gap-6 text-xs">
        <span>Battle Royale</span>
        <span className="text-slate-400 text-semibold"> | </span>
        <li className="list-none">PC</li>
        <li className="list-none">Mobile</li>
        <li className="list-none">Console</li>
      </div>
    </div>
  );
};

export default MainBannerTitle;
