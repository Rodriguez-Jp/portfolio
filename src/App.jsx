import { useEffect } from "react";
import { Gradient } from "./helpers/Gradient";
import Header from "./components/Header";
import NavigationAside from "./components/NavigationAside";
import PresentationPage from "./components/PresentationPage";
import SocialMediaAside from "./components/SocialMediaAside";
import ProjectsPage from "./components/ProjectsPage";
import ContactMePage from "./components/ContactMePage";
import Footer from "./components/Footer";

function App() {
  // Loads the gradient effect
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
        <PresentationPage />
      </div>
      <nav>
        <SocialMediaAside />
      </nav>
      <nav>
        <NavigationAside />
      </nav>
      <ProjectsPage />
      <ContactMePage />
      <Footer />
    </>
  );
}

export default App;
