import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SongLink from "./components/Song Link/SongLink";
import { emotionsObject, hifyObject } from "./components/Song Link/Data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emotions" element={<SongLink {...emotionsObject} />} />
        <Route path="/hearitfromyou" element={<SongLink {...hifyObject} />} />
      </Routes>
    </Router>
  );
}

export default App;
