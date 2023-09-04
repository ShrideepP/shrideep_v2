import { FC } from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';
import FadeUp from '../animations/FadeUp';
import Reveal from '../animations/Reveal';

interface Project {
  id: number;
  name: string;
  github: string;
  live: string;
  tech: string;
  about: string;
  imageURL: string;
};

interface ProjectCardProps {
  project: Project
};

const ProjectCard: FC<ProjectCardProps> = ({ project: { name, github, live, tech, about, imageURL } }) => {
  return (
    <FadeUp>
      <div className='w-full h-fit relative space-y-6'>
        <div className="w-full h-48 md:h-60 relative rounded-lg overflow-hidden bg-background-light">
          <motion.div
            className='w-full h-full absolute inset-0 flex justify-center items-end'
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <img 
              src={imageURL}
              alt={name}
              className='w-[85%] translate-y-8 md:translate-y-12 object-cover rounded-t-lg'
            />
          </motion.div>
        </div>
        <div className="w-full h-fit relative space-y-2">
          <Reveal width="100%">
            <div className="w-full flex items-center justify-between gap-x-4">
              <h4 className='text-2xl font-bold'>{name}</h4>
              <hr className='flex-1 h-[.5px] opacity-20 bg-foreground' />
              <div className="flex items-center gap-x-2">
                <a href={github} target="_blank">
                  <Icons.github className='w-5 h-5 opacity-60 hover:opacity-100' />
                </a>
                <a href={live} target="_blank">
                  <Icons.externalLink className='w-5 h-5 opacity-60 hover:opacity-100' />
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className='text-base text-accent font-normal'>{tech}</p>
          </Reveal>
          <Reveal>
            <p className='text-base md:text-lg font-extralight'>{about}</p>
          </Reveal>
        </div>
      </div>
    </FadeUp>
  );
};

export default ProjectCard;
