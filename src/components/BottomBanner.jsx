const BottomBanner = () => {
  return (
    <section className=" text-white mx-auto w-[1280px] h-[195px] my-20 py-10 border-y border-white flex flex-col hover:cursor-pointer">
      <div className="w-[120px] hidden gap-2 lg:flex lg:text-xs xl:text-xs 2xl:text-sm 2xl:gap-2">
        <li className="list-none">DEVELOPER</li>
        <li className="list-none font-extralight">|</li>
        <li className="list-none">PUBLISHER</li>
      </div>
      <div className="flex flex-row justify-between">
        <container>
          <div className="text-3xl mb-1">PUBG STUDIOS</div>
          <div className="font-thin">
            More than just a game, PUBG is a cultural phenomenon
          </div>
          <img
            src="https://www.krafton.com/wp-content/themes/krafton/assets/img/icon/ico-post-arrow.png"
            className="pt-6 w-[18px] "
          />
        </container>
        <div>
          <img
            src="https://www.krafton.com/wp-content/uploads/2021/06/studio-pubg-logo-1.png"
            className="w-[87px] mr-12"
          />
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
