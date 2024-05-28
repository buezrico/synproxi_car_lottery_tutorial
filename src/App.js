import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competitions from "./components/Competitions";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import Winners from "./components/Winners";
import Footer from "./components/Footer";
import "./testing_saas.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Competitions />
      <HowItWorks />
      <Testimonial />
      <Winners />
      <Footer />
    </div>
  );
}

export default App;
