import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home";
import Home2 from './ComponentsChrachters/Hero/Home2';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nav" element={<Home2/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
