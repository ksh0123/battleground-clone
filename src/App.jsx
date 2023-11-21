import FooterCopy from "./components/FooterCopy";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import MainBannerTitle from "./components/MainBannerTitle";

const App = () => {
  return (
    <section className="font-poppins bg-black">
      <Header />
      <section className="relative">
        <div className="w-[1260px] mx-auto flex items-center pb-[200px]">
          <MainBannerTitle />
          <MainBanner />
        </div>
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-black from-5% via-transparent"></div>
      </section>
      <section className="bg-orange-300 mx-auto mb-20 w-[720px] h-[1148px] pt-[200px]">
        <img
          src="https://i.ytimg.com/vi_webp/FOmmbaP_tn0/maxresdefault.webp"
          alt="promo video"
        />
      </section>
      <section className="mx-auto flex flex-row">
        <div>
          <img
            src="https://www.krafton.com/wp-content/uploads/2021/06/battle-bg3-min.png"
            alt="battle grounds"
            className="ml-[150px] brightness-20"
          />
        </div>
        <div className="w-[700px] flex flex-col justify-center text-white mr-[150px] -translate-x-[200px]">
          <h4 className="text-5xl text-wrap">PLAYERUNKNOWN’S BATTLEGROUNDS</h4>
          <div className="pt-[26px] text-lg">
            PUBG is spearheaded by CEO Chang Han Kim in an effort to develop
            games in the spirit of challenging players. What started as a small
            team of about 20 developers, quickly exploded into what is now one
            of the biggest video game genres in the world.
          </div>
        </div>
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
