import { Icons } from "./Icons";

const SecondaryMenu = () => {
  return (
    <header className='w-full h-[10vh] px-6 sm:px-12 sticky top-0 left-0 z-50 flex justify-between items-center backdrop-blur'>
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
      <div>
        <a href="" target="_blank" className="w-fit h-10 px-6 grid place-items-center text-sm text-accent font-normal uppercase tracking-wider border border-accent rounded-md hover:bg-[hsl(159,89%,6%)]">
          Resume
        </a>
      </div>
    </header>
  );
};

export default SecondaryMenu;
