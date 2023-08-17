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
                Hey! I'm Shrideep – the wizard behind the web. I've been on a wild 2-year journey, cooking up digital magic with T3, MERN, GraphQL, and even a dash of Figma. Imagine turning your web ideas into pure enchantment – that's my gig!
              </p>
            </Reveal>
            <Reveal>
              <p className="text-base sm:text-lg font-extralight">
                But here's the twist – I'm not just about code. I've teamed up with startups, tackling challenges like a fearless explorer. Think of me as your tech treasure hunter, ready to crack the code to success.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-base sm:text-lg font-extralight">
                What's my ultimate quest? Crafting websites that feel like home. Whether it's designing front-end awesomeness or conjuring up a sturdy back-end fortress, I'm all in.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-base sm:text-lg font-extralight">
                Here's the secret sauce: I sprinkle every project with creativity and a keen eye for detail. It's like adding a touch of fairy dust to each line of code! Together, let's embark on a web adventure and make your digital dreams a reality. Ready to dive into the magic?
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
