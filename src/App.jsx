import { useState, useEffect } from "react";

import FooterCopy from "./components/FooterCopy";
import Header from "./components/Header";
import Main from "./components/Main";
import Promo from "./components/Promo";
import Content from "./components/Content";
import CountList from "./components/CountList";
import AwardsList from "./components/AwardsList";
import PlatformList from "./components/PlatformList";
import BottomBanner from "./components/BottomBanner";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [currentY, setCurrentY] = useState(150);

  const scrollEvent = () => {
    if (currentY < window.scrollY) {
      setIsHidden(true);
      setCurrentY(window.scrollY);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);
    watchScroll();

    return () => window.removeEventListener("scroll", watchScroll);
  });

  return (
    <section className="font-poppins bg-black">
      <Header isHidden={isHidden} />
      <Main />
      <Promo />
      <Content />
      <CountList />
      <AwardsList />
      <PlatformList />
      <BottomBanner />
      <section className="bg-purple-950 w-[1103px] mx-auto mt-[166px] h-[70px] border-b-[1px] border-slate-500">
        Footer
      </section>
      <FooterCopy />
    </section>
  );
};

export default App;
