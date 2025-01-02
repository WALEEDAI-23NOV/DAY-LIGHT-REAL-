import "./App.css";
import Charachters from "./Components/Chrachters/Charachters";
import Hero from "./Components/HERO/Hero";
import Maps from "./Components/Maps/Maps";
import Platform from "./Components/Platforms/Platform";
import Allcharachters from "./Components/See Chrachters/Allcharachters";

function App() {
  return (
    <>
      <Hero />
      <Platform />
      <Charachters/>
      <Allcharachters/>
      <Maps/>
    </>
  );
}

export default App;
