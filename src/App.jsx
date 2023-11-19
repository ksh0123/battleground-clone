import FooterCopy from "./components/FooterCopy";

const App = () => {
  return (
    <section className="bg-black">
      <div className="bg-red-100">Menu</div>
      <section className="bg-orange-500 w-[837px] h-[955px] mx-auto">
        interactive banner
      </section>
      <section className="bg-yellow-300 mx-auto mb-20 w-[720px] h-[1148px]">
        image scrolls into video
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
