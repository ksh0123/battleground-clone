import MainBannerTitle from "./MainBannerTitle";
import MainBanner from "./MainBanner";

const Main = () => {
  return (
    <section className="flex items-center w-[1260px] px-[40px]">
      <div className="relative mx-auto flex items-center">
        <MainBannerTitle />
        <MainBanner />
      </div>
    </section>
  );
};

export default Main;
