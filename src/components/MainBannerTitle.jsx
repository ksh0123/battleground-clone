const MainBannerTitle = () => {
  return (
    <div className="font-bold  text-white absolute flex flex-col z-10 translate-y-10 -translate-x-[50px] z-10">
      <div className="w-full text-7xl pb-12 animate__animated animate__fadeInLeft animate__slower">
        PUBG: BATTLEGROUNDS
      </div>
      <div className="flex flex-row gap-6 animate__animated animate__fadeInLeft animate__slower delay-slide">
        <span>Battle Royale</span>
        <span className="text-slate-500"> | </span>
        <li className="list-none">PC</li>
        <li className="list-none">Mobile</li>
        <li className="list-none">Console</li>
      </div>
    </div>
  );
};

export default MainBannerTitle;