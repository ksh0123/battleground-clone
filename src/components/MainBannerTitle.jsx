const MainBannerTitle = () => {
  return (
    <div className="font-bold font-sans tracking-widest text-white absolute flex flex-col translate-y-10 -translate-x-[50px] z-10">
      <div className="w-full text-[75px] 2xl:text-[82px] pb-12 animate__animated animate__fadeInLeft animate__slower">
        PUBG: BATTLEGROUNDS
      </div>
      <div className="flex flex-row font-sans text-base font-light text-neutral-200 gap-6 2xl:gap-4 animate__animated animate__fadeInLeft animate__slower delay-slide">
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
