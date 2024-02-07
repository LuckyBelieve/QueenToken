import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Home/>
      </div>
    </Router>
  );
}

export default App;
