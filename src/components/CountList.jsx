const CountList = () => {
  return (
    <section className="mx-auto w-[1280px] h-[320px] mb-12 flex flex-col justify-around items-center text-white">
      <div>
        <h1 className="text-2xl">Concurrent users (PC)</h1>
        <body className="text-6xl">3,250,000 +</body>
      </div>
      <div>
        <h1 className="text-2xl">Accumulated downloads</h1>
        <body className="text-6xl">75,000,000 +</body>
      </div>
    </section>
  );
};

export default CountList;
