import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import RoadMap from "./components/RoadMap";

function App() {
  return (
    <Router>
      <div className="bg-black font-Poppins relative">
        <Home />
        {/* About us  */}
        <AboutUs />
        {/* Roadmap */}
        <RoadMap />
      </div>
    </Router>
  );
}

export default App;
