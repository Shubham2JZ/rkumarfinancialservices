import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import Resources from "./pages/Resources";
import SuccessStories from "./pages/SuccessStories";
import Footer from "./components/Footer";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
