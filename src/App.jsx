import FooterCopy from "./components/FooterCopy";
import Header from "./components/Header";
import MainBannerLink from "./components/MainBannerLink";
import MainBannerTitle from "./components/MainBannerTitle";

const App = () => {
  return (
    <section className="bg-black">
      <Header />
      <section className="relative w-[837px] mx-auto flex items-center pb-[200px]">
        <MainBannerTitle />
        <section className="translate-x-[200px]">
          <img
            src="https://www.krafton.com/wp-content/uploads/2021/06/battle-bg1-min.png"
            alt="main banner"
            className="w-[758px]"
          />
          <MainBannerLink />
        </section>
      </section>
      <section className="bg-orange-300 mx-auto mb-20 w-[720px] h-[1148px] pt-[200px]">
        <img
          src="https://i.ytimg.com/vi_webp/FOmmbaP_tn0/maxresdefault.webp"
          alt="video image"
        />
      </section>
      <section className="bg-green-200 mx-auto w-[991px] h-[350px] mb-[153.6px]">
        game promo text 1
      </section>
      <section className="bg-green-200 mx-auto w-[991px] h-[350px] mb-[153.6px]">
        game promo text 2
      </section>
      <section className="bg-blue-200 mx-auto w-[720px] h-[202px] mb-[153.6px]">
        counter
      </section>
      <section className="bg-purple-200 mx-auto w-[720px] h-[530px] mb-20">
        Awards
      </section>
      <section className="bg-purple-200 mx-auto w-[720px] h-[347px] mb-20">
        Game Platform
      </section>
      <section className="bg-purple-400 mx-auto w-[720px] h-[171px] mb-20">
        Bottom Banner
      </section>
      <section className="bg-purple-950 w-[1103px] mx-auto mt-[166px] h-[70px] border-b-[1px] border-slate-500">
        Footer
      </section>
      <FooterCopy />
    </section>
  );
};

export default App;
