import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";

function App() {
  return (
    <Router>
      <div className="bg-black font-Poppins">
        <Home />
        {/* About us  */}
        <AboutUs />
      </div>
    </Router>
  );
}

export default App;
