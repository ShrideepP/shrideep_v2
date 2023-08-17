import { FC } from 'react';
import Reveal from '../animations/Reveal';

interface Exp {
  id: number;
  company: string;
  year: string;
  role: string;
  place: string;
  about: string;
  tech: string[];
};

interface ExpCardProps {
  exp: Exp;
};

const ExpCard: FC<ExpCardProps> = ({
  exp: {
    company,
    year,
    role,
    place,
    about,
    tech
  }
}) => {
  return (
    <div className="w-full md:px-2 relative space-y-3">
      <div className="flex justify-between items-center">
        <Reveal>
          <h4 className="text-2xl font-bold">{company}</h4>
        </Reveal>
        <Reveal>
          <span className="text-lg font-light">{year}</span>
        </Reveal>
      </div>
      <div className="flex justify-between items-center">
        <Reveal>
          <h4 className="text-xl text-accent font-bold">{role}</h4>
        </Reveal>
        <Reveal>
          <span className="text-lg font-light">{place}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className="text-base md:text-lg font-extralight">{about}</p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap items-center gap-2">
          {tech.map(label => (
            <span key={label} className="p-2 text-base font-normal leading-none bg-background-light rounded-full">
              {label}
            </span>
          ))}
        </div>
      </Reveal>
      <div className='pt-4'>
        <hr className="flex-1 h-[1px] opacity-20 bg-foreground" />
      </div>
    </div>
  )
};

export default ExpCard;
