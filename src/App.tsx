import NavigationMenu from "./components/NavigationMenu";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <div className="w-full h-fit flex relative z-0 transition-all duration-200">
      <NavigationMenu />
      <MainContainer />
    </div>
  );
};

export default App;
