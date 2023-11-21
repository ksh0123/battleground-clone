import MainBannerLink from "./MainBannerLink";

const MainBanner = () => {
  return (
    <section className="translate-x-[200px]">
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-br from-black from-5% via-transparent"></div>
      <img
        src="https://www.krafton.com/wp-content/uploads/2021/06/battle-bg1-min.png"
        alt="main banner"
        className="pt-10 w-full"
      />
      <MainBannerLink />
    </section>
  );
};

export default MainBanner;
