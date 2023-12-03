import RedirectIcon from "../icons/RedirectIcon";

const PlatformList = () => {
  return (
    <section className="text-white mx-auto w-[1280px] h-fit m-20 flex flex-row font-poppins">
      <div className="w-1/4 text-3xl px-10 text-left">Game Platform</div>
      <div className="w-3/4 mb-9">
        <div className="mb-1 text-xl font-semibold">
          PUBG: Battlegrounds (Steam)
        </div>
        <div className="mb-7 text-neutral-400 text-md font-light">
          Steam Website
        </div>
        <div className="mb-1 text-xl font-semibold">
          PUBG: Battlegrounds (Epic Games)
        </div>
        <div className="mb-7 text-neutral-400 text-md font-light">
          Epic Games Website
        </div>
        <div className="mb-1 text-xl font-semibold">
          PUBG: Battlegrounds (Kakao Games)
        </div>
        <div className="mb-7 text-neutral-400 text-md font-light">
          Kakao Games Website
        </div>
        <div className="mb-1 text-xl font-semibold">
          PUBG: Battlegrounds (XBOX ONE)
        </div>
        <div className="mb-7 text-neutral-400 text-md font-light">
          XBOX ONE Website
        </div>
        <div className="mb-1 text-xl font-semibold">
          PUBG: Battlegrounds (PS4)
        </div>
        <div className="mb-7 text-neutral-400 text-md font-light">
          PS4 Website
        </div>
        <div className="mb-1 text-xl font-semibold">
          PUBG: Battlegrounds Mobile
        </div>
        <div className="flex flex-row gap-3 mt-6">
          <img
            src="https://www.krafton.com/wp-content/uploads/2021/06/logo-banner-google.png"
            className="border border-neutral-600 w-[124px]"
          />
          <img
            src="https://www.krafton.com/wp-content/uploads/2021/06/logo-banner-app.png"
            className="border border-neutral-600 w-[124px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformList;
