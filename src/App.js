import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competitions from "./components/Competitions";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Competitions />
      <HowItWorks />
    </div>
  );
}

export default App;
