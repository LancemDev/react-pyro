import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Layout from "./Layout/Layout";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Resources from "./Pages/Resources/Resources";
import Services from "./Pages/Services/Services";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<LandingPage />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
