import Reveal from "../animations/Reveal";
import { Icons } from "./Icons";

const Contact = () => {
  return (
    <section id="contact" className="w-full h-screen px-6 py-4 sm:px-12 sm:py-6 md:px-20 lg:py-8 lg:px-40 xl:py-10 xl:px-60 grid place-items-center">
      <div className="w-full flex flex-col items-center gap-4">
        <Reveal>
          <h2 className="text-center text-5xl sm:text-6xl lg:text-8xl font-extrabold">
            Contact<span className="text-accent">.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="w-full md:w-3/4 mx-auto text-center text-base sm:text-lg font-extralight">
            Your next web project deserves a skilled hand. Email me to discuss how I can bring your vision to life.
          </p>
        </Reveal>
        <Reveal>
          <a href="mailto:shrideeppakhare2005@gmail.com" className="group flex items-center gap-x-2">
            <Icons.mail className="w-6 h-6" />
            <span className="text-base md:text-lg lg:text-xl font-normal group-hover:underline underline-offset-2">
              shrideeppakhare2005@gmail.com
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;