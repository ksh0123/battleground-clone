const Content = () => {
  return (
    <section className="mx-auto flex flex-col">
      <div className="flex flex-row mb-72">
        <img
          src="https://www.krafton.com/wp-content/uploads/2021/06/battle-bg3-min.png"
          alt="battle grounds"
          className="ml-[150px] brightness-20"
        />
        <div className="flex flex-col justify-center text-white mr-[150px] -translate-x-[200px]">
          <div className="text-5xl text-wrap">
            PLAYERUNKNOWN’S BATTLEGROUNDS
          </div>
          <div className="pt-[26px] text-md">
            PUBG is spearheaded by CEO Chang Han Kim in an effort to develop
            games in the spirit of challenging players. What started as a small
            team of about 20 developers, quickly exploded into what is now one
            of the biggest video game genres in the world.
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-20 ">
        <div className="flex flex-col justify-center text-white translate-x-[200px]">
          <div className="text-5xl w-[600px]">POWERFUL CULTURAL IP</div>
          <div className="pt-[26px] text-md">
            <div>
              PUBG, created in close communication with our community, was
              recognized for its new and complex gameplay. The game was
              established as a global leader in the battle royale genre,
              reaching a large number of players around the world.
            </div>
            <div>
              While PUBG continues to provide a unique gameplay experience, PUBG
              Corporation looks to expand its sights by expanding the service to
              bring more experiences to our fans' daily lives.
            </div>
          </div>
        </div>
        <img
          src="https://www.krafton.com/wp-content/uploads/2021/06/battle-bg4-min.png"
          alt="battle grounds"
          className="mr-[150px] brightness-20"
        />
      </div>
    </section>
  );
};

export default Content;
