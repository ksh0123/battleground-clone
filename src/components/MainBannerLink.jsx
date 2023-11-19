import RedirectIcon from "../icons/RedirectIcon";

const MainBannerLink = () => {
  return (
    <div className="flex flex-row items-center justify-end -translate-x-10 mt-8">
      <span className="text-white text-xs">Official Website</span>
      <RedirectIcon />
      <span className="text-white text-xs">Esports Website</span>
      <RedirectIcon />
    </div>
  );
};

export default MainBannerLink;
