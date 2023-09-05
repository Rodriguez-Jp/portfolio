import Header from "./components/Header";
import NavigationAside from "./components/NavigationAside";
import Presentation from "./components/Presentation";
import SocialMediaAside from "./components/SocialMediaAside";

function App() {
  return (
    <div className="w-full h-full">
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
