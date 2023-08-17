import Reveal from "../animations/Reveal";

const Banner = () => {
  return (
    <section id="home" className="w-full h-[90vh] px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 flex items-center">
      <div className="flex flex-col gap-4">
        <Reveal>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold">
            Hey, I'm Shri<span className="text-accent">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h4 className="sm:mt-2 text-2xl md:text-4xl font-extralight">
            I'm a <span className="text-accent font-bold">Full-Stack Developer</span>
          </h4>
        </Reveal>
        <Reveal>
          <p className="w-full md:w-3/4 text-base sm:text-lg font-extralight">
            Hello! I'm Shrideep, and I'm great at making websites. I've used T3, MERN, GraphQL, and Figma for more than 2 years. I've worked with 2 startups too! Let's make your website awesome!
          </p>
        </Reveal>
        <Reveal>
          <a href="#contact" className="w-fit h-12 px-6 grid place-items-center text-sm text-black font-semibold uppercase tracking-wider bg-accent hover:opacity-80 select-none rounded-md">
            Let's connect
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Banner;
