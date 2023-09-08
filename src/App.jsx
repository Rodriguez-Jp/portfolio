import { useEffect } from "react";
import Header from "./components/Header";
import NavigationAside from "./components/NavigationAside";
import Presentation from "./components/Presentation";
import SocialMediaAside from "./components/SocialMediaAside";
import { Gradient } from "./helpers/Gradient";

function App() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="flex flex-col w-full h-full relative">
      <div className="absolute z-10 opacity-70 h-full">
        <canvas id="gradient-canvas" data-transition-in className="h-full " />
      </div>
      <Header />
      <Presentation />
      <nav>
        <SocialMediaAside />
      </nav>
      <nav>
        <NavigationAside />
      </nav>
      <section id="projects">
        <h1>Hola mundo!</h1>
      </section>
    </div>
  );
}

export default App;
