import Reveal from "../animations/Reveal";
import { Icons } from "./Icons";

const work = ['JavaScript', 'TypeScript', 'Redux', 'React JS', 'Next JS', 'Node JS', 'Express JS', 'MongoDB', 'GraphQL', 'Firebase', 'React Native'];
const fun = ['Framer Motion', 'Figma', 'Three JS', 'Inkscape', 'Tailwind', 'Shadcn UI', 'GSAP', 'HTML', 'CSS'];

const About = () => {
  return (
    <section id="about" className="w-full h-fit p-6 sm:px-12 sm:py-8 md:px-20 lg:py-10 lg:px-40 xl:py-12 xl:px-60">
      <div className="w-full h-fit space-y-4 md:space-y-8">
        <div className="flex items-center gap-x-4">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold">
              About<span className="text-accent">.</span>
            </h2>
          </Reveal>
          <hr className="flex-1 h-[1px] opacity-20 bg-foreground" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10">
          <div className="lg:col-span-2 space-y-4">
            <Reveal>
              <p className="text-base sm:text-lg font-extralight">
                I'm Shrideep, a web developer from Karnataka, India. My journey in web development revolves around dedicating my energy to crafting one fantastic project at a time. It's not about quantity; it's about quality.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-base sm:text-lg font-extralight">
                While my project list may not be extensive, it's because I choose to invest time and effort in making each project truly shine. In my spare moments, I'm an avid explorer of new technologies and an enthusiast for tackling coding challenges.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-base sm:text-lg font-extralight">
                Residing in the vibrant state of Karnataka, I draw inspiration from its rich culture and the dynamic tech landscape. I firmly believe in continuous learning and growth.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-base sm:text-lg font-extralight">
                Join me on this journey as I wholeheartedly dedicate myself to crafting meaningful web solutions, one project at a time. Let's explore the limitless possibilities together.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-2 flex items-center gap-x-6">
                <span className="text-base text-accent sm:text-lg font-light flex items-center gap-x-2">
                  My Links
                  <Icons.arrowRight className="w-5 h-6" />
                </span>
                <div className="flex items-center gap-x-4">
                  <a href="https://github.com/ShrideepP" target="_blank">
                    <Icons.github className="w-5 h-5 opacity-60 hover:opacity-100 hover:text-accent transition-colors duration-500" />
                  </a>
                  <a href="https://www.linkedin.com/in/shrideep-pakhare-8577b9267" target="_blank">
                    <Icons.linkedin className="w-5 h-5 opacity-60 hover:opacity-100 hover:text-accent transition-colors duration-500" />
                  </a>
                  <a href="https://www.instagram.com/_shrideep" target="_blank">
                    <Icons.instagram className="w-5 h-5 opacity-60 hover:opacity-100 hover:text-accent transition-colors duration-500" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <div className="space-y-4">
              <Reveal>
                <div className="flex items-center gap-x-4">
                  <Icons.briefcase className="w-6 h-6 text-accent" />
                  <h6 className="text-2xl font-bold">
                    Use at work
                  </h6>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2">
                  {work.map(label => (
                    <span key={label} className="p-2 text-base font-normal leading-none bg-background-light rounded-full">
                      {label}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="space-y-4">
              <Reveal>
                <div className="flex items-center gap-x-4">
                  <Icons.smile className="w-6 h-6 text-accent" />
                  <h6 className="text-2xl font-bold">
                    Use for fun
                  </h6>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2">
                  {fun.map(label => (
                    <span key={label} className="p-2 text-base font-normal leading-none bg-background-light rounded-full">
                      {label}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
