import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ['home', 'about', 'projects', 'exp', 'contact'];

const NavigationMenu = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        };
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      };
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        };
      });
    };
  }, []);

  return (
    <motion.nav 
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'tween', duration: .4 }}
      className="w-14 md:w-16 h-screen py-4 sticky top-0 left-0 z-50 hidden md:flex flex-col items-center gap-4 bg-background-dark"
    >
      <img 
        src="/logo.svg" 
        alt="Shrideep P logo."
        className="w-10 md:w-12"
      />
      <div className="w-full h-fit">
        {sections.slice(1).map((section: string) => (
          <a key={section} href={"#" + section} className="w-full h-24 relative grid place-items-center select-none">
            <span className={`relative z-10 ${section !== activeSection && "opacity-50"} text-base md:text-lg text-vertical font-extralight capitalize`}>
              {section}
            </span>
            {activeSection === section && (
              <motion.div 
                layoutId="active"
                className="absolute inset-0 bg-background-light after:content-[''] after:w-0 after:h-full after:absolute after:right-0 after:border-l-2 after:border-accent"
                transition={{ type: "spring", duration: .4 }}
              />
            )}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default NavigationMenu;
