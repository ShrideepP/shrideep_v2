import SecondaryMenu from "./SecondaryMenu";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";
import Exp from "./Exp";
import Contact from "./Contact";

const MainContainer = () => {
  return (
    <main className="w-full h-fit">
      <SecondaryMenu />
      <Banner />
      <About />
      <Projects />
      <Exp />
      <Contact />
    </main>
  );
};

export default MainContainer;