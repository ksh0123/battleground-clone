const CountList = () => {
  return (
    <section className="mx-auto w-[1280px] h-[320px] flex flex-col justify-around text-white">
      <div className="flex flex-col justify-center items-center gap-2">
        <span className="text-xl mb-2">Concurrent users (PC)</span>
        <body className="text-6xl font-light">3,250,000 +</body>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <span className="text-xl mb-2">Accumulated downloads</span>
        <body className="text-6xl font-light">75,000,000 +</body>
      </div>
    </section>
  );
};

export default CountList;
