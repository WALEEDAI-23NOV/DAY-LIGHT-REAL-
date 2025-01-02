import "./App.css";
import Charachters from "./Components/Chrachters/Charachters";
import Hero from "./Components/HERO/Hero";
import Maps from "./Components/Maps/Maps";
import Platform from "./Components/Platforms/Platform";
import Playtoday from "./Components/Play-today/Playtoday";
import Allcharachters from "./Components/See Chrachters/Allcharachters";

function App() {
  return (
    <>
      <Hero />
      <Platform />
      <Charachters/>
      <Allcharachters/>
      <Maps/>
      <Playtoday/>
    </>
  );
}

export default App;
