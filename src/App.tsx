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
  return (
    <div className="min-h-screen relative paper-noise">
      <Header />
      <main>
        <HeroSection />
        <BackendSkills />
        <FrontendSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
