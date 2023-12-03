import MainBannerLink from "./MainBannerLink";

const MainBanner = () => {
  return (
    <section className="translate-x-[200px] z-0 mb-[26px]">
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-black from-5% via-transparent"></div>
      <img
        src="https://www.krafton.com/wp-content/uploads/2021/06/battle-bg1-min.png"
        alt="main banner"
        className="pt-20 w-11/12"
      />
      <MainBannerLink />
    </section>
  );
};

export default MainBanner;
