import RedirectIcon from "../icons/RedirectIcon";

const MainBannerLink = () => {
  return (
    <div className="flex flex-row items-center justify-end -translate-x-1/4 mt-8 gap-1 mr-8">
      <span className="text-neutral-100">Official Website</span>
      <RedirectIcon />
      <span className="text-neutral-100 ml-4">Esports Website</span>
      <RedirectIcon />
    </div>
  );
};

export default MainBannerLink;
