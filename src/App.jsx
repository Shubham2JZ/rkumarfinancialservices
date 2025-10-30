import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Services from "./pages/Services";
import SuccessStories from "./pages/SuccessStories";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:serviceSlug" element={<Services />} />

      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
