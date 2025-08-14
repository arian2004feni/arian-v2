// import AnimatedBg from "./component/AnimatedBg";
import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import AboutSection from "./HomePage/AboutSection";
import ContactSection from "./HomePage/ContactSection";
import HeroSection from "./HomePage/HeroSection";
import ProjectsSection from "./HomePage/ProjectsSection";
import ResumeSection from "./HomePage/ResumeSection";
import SkillsSection from "./HomePage/SkillsSection";
// import useTheme from "./hooks/useTheme";
import { Link, Element, Events, scrollSpy } from "react-scroll";

function App() {
  // const [theme] = useTheme();
  const menuItems = ["home", "about", "skills", "resume","projects"];
  // const [active, setActive] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});
    scrollSpy.update();
  }, []);

  return (
    <div>
      {/* <AnimatedBg theme={theme} /> */}
      <Navbar menuItems={menuItems}/>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
