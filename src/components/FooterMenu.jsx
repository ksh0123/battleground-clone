const FooterMenu = () => {
  return (
    <section className="w-[1280px] text-white mx-auto mt-[166px] h-[70px] border-b-[1px] border-slate-500 flex flew-row justify-between items-center">
      <div className="gap-2 flex flex-row justify-content">
        <li className="list-none text-sm hover:cursor-pointer hover:underline">
          Visit Us
        </li>
        <li className="list-none font-extraligh text-slate-500">|</li>
        <li className="list-none text-sm hover:cursor-pointer hover:underline">
          Contact Us
        </li>
        <li className="list-none font-extralight text-slate-500">|</li>
        <li className="list-none text-sm hover:cursor-pointer hover:underline">
          Privacy Policy
        </li>
        <li className="list-none font-extralight text-slate-500">|</li>
        <li className="list-none text-sm hover:cursor-pointer hover:underline">
          Speak Up
        </li>
        <li className="list-none font-extraligh text-slate-500">|</li>
        <li className="list-none text-sm hover:cursor-pointer hover:underline">
          Privacy Notice for California Residents
        </li>
      </div>
      <div className="flex flex-row gap-5">
        <img
          src="https://www.krafton.com/wp-content/themes/krafton/assets/img/icon/ico-sns-Blog.png"
          alt="blog"
          className="w-[29px] h-[19px] hover:cursor-pointer"
        />
        <img
          src="https://www.krafton.com/wp-content/themes/krafton/assets/img/icon/ico-sns-youtube.png"
          alt="youtube"
          className="w-[22px] h-[15px] hover:cursor-pointer"
        />
        <img
          src="https://www.krafton.com/wp-content/themes/krafton/assets/img/icon/ico-sns-naver.png"
          alt="naver"
          className="w-[16px] h-[15px] hover:cursor-pointer"
        />
        <img
          src="https://www.krafton.com/wp-content/themes/krafton/assets/img/icon/ico-sns-instagram.png"
          alt="instagram"
          className="w-[18px] h-[18px] hover:cursor-pointer"
        />
        <img
          src="https://www.krafton.com/wp-content/themes/krafton/assets/img/icon/ico-sns-facebook.png"
          alt="facebook"
          className="w-[9px] h-[18px] hover:cursor-pointer"
        />
        <img
          src="https://www.krafton.com/wp-content/themes/krafton/assets/img/icon/ico-sns-linkedin.png"
          alt="linkedin"
          className="w-[17px] h-[17px] hover:cursor-pointer"
        />
      </div>
    </section>
  );
};

export default FooterMenu;
