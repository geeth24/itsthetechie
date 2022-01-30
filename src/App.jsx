import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Emotions from "./pages/Emotions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emotions" element={<Emotions />} />
      </Routes>
    </Router>
  );
}

export default App;
