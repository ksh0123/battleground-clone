import { useState, useEffect } from "react";

import FooterCopy from "./components/FooterCopy";
import Header from "./components/Header";
import Main from "./components/Main";
import Promo from "./components/Promo";
import Content from "./components/Content";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY > 100) {
      setIsHidden(true);
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
