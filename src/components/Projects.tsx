import Reveal from "../animations/Reveal";
import data from "../content/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full h-fit p-6 sm:px-12 sm:py-8 md:px-20 lg:py-10 lg:px-40 xl:py-12 xl:px-60">
      <div className="w-full h-fit space-y-4 md:space-y-8">
        <div className="flex items-center gap-x-4">
          <hr className="flex-1 h-[1px] opacity-20 bg-foreground" />
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold">
              Projects<span className="text-accent">.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
          {data.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
