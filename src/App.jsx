import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";

const isComingSoon = import.meta.env.VITE_COMING_SOON;

function App() {
  if (isComingSoon)
    return (
      <div className="App">
        <Routes>
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </div>
    );

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/coming-soon">ComingSoon</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
