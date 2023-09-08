import { useEffect } from "react";
import { Gradient } from "./helpers/Gradient";
import Header from "./components/Header";
import NavigationAside from "./components/NavigationAside";
import Presentation from "./components/PresentationPage";
import SocialMediaAside from "./components/SocialMediaAside";
import Projects from "./components/ProjectsPage";

function App() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-full relative">
        <div className="absolute z-10 opacity-70 h-full">
          <canvas
            id="gradient-canvas"
            data-transition-in
            className="h-full opacity-60"
          />
        </div>
        <Header />
        <Presentation />
      </div>
      <nav>
        <SocialMediaAside />
      </nav>
      <nav>
        <NavigationAside />
      </nav>
      <Projects />
    </>
  );
}

export default App;
