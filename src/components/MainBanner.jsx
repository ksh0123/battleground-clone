import MainBannerLink from "./MainBannerLink";

const MainBanner = () => {
  return (
    <section className="translate-x-[200px]">
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
