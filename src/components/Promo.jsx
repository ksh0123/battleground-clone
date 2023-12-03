const Promo = () => {
  return (
    <section className="w-screen h-screen mx-auto my-[500px] px-[40px] flex justify-center items-center">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/FOmmbaP_tn0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Promo;
