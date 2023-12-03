import { GoPlus } from "react-icons/go";

const FooterCopy = () => {
  return (
    <section className="w-[1280px] mx-auto mt-[65px] flex justify-between items-center pt-[32px] pb-[58px]">
      <div className="flex flex-col">
        <img
          src="https://www.krafton.com/wp-content/themes/krafton/assets/img/logo/logo-white.png"
          className="mb-[11px] w-[111px]"
          alt="footer logo"
        />
        <div className="text-[#FFFFFF66] text-xs">
          © 2021 KRAFTON, Inc. All rights reserved.
        </div>
      </div>
      <div className="text-white flex justify-between items-center w-[227px] border-b-[1px]">
        <div className="text-xs mb-2">FAMILY SITE</div>
        <GoPlus className="mb-1" />
      </div>
    </section>
  );
};

export default FooterCopy;
