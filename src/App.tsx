import { useEffect } from "react";
import BackendSkills from "./components/BackendSkills.tsx";
import BackToTop from "./components/BackToTop.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import FrontendSkills from "./components/FrontendSkills.tsx";
import { Header } from "./components/Header.tsx";
import HeroSection from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import "./index.css";

function App() {
  useEffect(() => {
    // Set default theme to light if no theme is stored
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      document.documentElement.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.dataset.theme = storedTheme;
    }
  }, []);

  return (
    <div className="min-h-screen relative paper-noise">
      <Header />
      <main>
        <HeroSection />
        <Projects />
        <BackendSkills />
        <FrontendSkills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
