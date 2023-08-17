import ExpCard from "./ExpCard";
import Reveal from "../animations/Reveal";
import data from "../content/exp";

const Exp = () => {
  return (
    <section id="exp" className="w-full h-fit px-6 py-4 sm:px-12 sm:py-6 md:px-20 lg:py-8 lg:px-40 xl:py-10 xl:px-60">
      <div className="w-full h-fit space-y-4 md:space-y-8">
        <div className="flex items-center gap-x-4">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold">
              Experience<span className="text-accent">.</span>
            </h2>
          </Reveal>
          <hr className="flex-1 h-[1px] opacity-20 bg-foreground" />
        </div>
        <div className="flex flex-col gap-4 md:gap-6 xl:gap-8">
          {data.map(exp => <ExpCard key={exp.id} exp={exp} />)}
        </div>
      </div>
    </section>
  );
};

export default Exp;