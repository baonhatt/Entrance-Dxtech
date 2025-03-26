import "./App.css";
import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LogotypesSection } from "./components/LogotypesSection";
import { NavigationBar } from "./components/NavigationBar";
import { OurWorkingProcess } from "./components/OurWorkingProcss";
import { Service } from "./components/Service";
import { Team } from "./components/Team";
import TestimonialSlider from "./components/Testimonials";
function App() {
  return (
    <div className="min-h-screen ">
      <NavigationBar />
      <Header />
      <LogotypesSection />
      <Service />
      <CaseStudies />
      <OurWorkingProcess />
      <Team />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
