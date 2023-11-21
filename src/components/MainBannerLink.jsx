import RedirectIcon from "../icons/RedirectIcon";

const MainBannerLink = () => {
  return (
    <div className="flex flex-row items-center justify-end -translate-x-20 mt-8 gap-2">
      <span className="text-white">Official Website</span>
      <RedirectIcon />
      <span className="text-white">Esports Website</span>
      <RedirectIcon />
    </div>
  );
};

export default MainBannerLink;
