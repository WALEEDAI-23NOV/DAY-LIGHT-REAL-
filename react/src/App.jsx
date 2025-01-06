import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home";
import Nav from "./ComponentsChrachters/Nav";


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nav" element={<Nav/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
