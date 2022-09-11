import "./css/App.css";
import Navbar from "./Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
