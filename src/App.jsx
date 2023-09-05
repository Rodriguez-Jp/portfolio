import Header from "./components/Header";
import NavigationAside from "./components/NavigationAside";
import Presentation from "./components/Presentation";

function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <Presentation />
      <NavigationAside />
    </div>
  );
}

export default App;
