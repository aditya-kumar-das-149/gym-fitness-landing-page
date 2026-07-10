import "./styles/Global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Programs from "./components/Programs";
import BMICalculator from "./components/BMICalculator";
import Pricing from "./components/Pricing";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Programs />
      <BMICalculator />
      <Pricing />
      <Trainers />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;