import MainBannerTitle from "./MainBannerTitle";
import MainBanner from "./MainBanner";

const Main = () => {
  return (
    <section className="mx-auto w-fit h-screen">
      <div className="relative mx-auto flex items-center">
        <MainBannerTitle />
        <MainBanner />
      </div>
    </section>
  );
};

export default Main;
