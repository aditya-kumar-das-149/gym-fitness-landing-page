import "../styles/Hero.css";
import heroImage from "../assets/hero.jpg";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import * as CountUpModule from "react-countup";
import { motion } from "framer-motion";

const CountUpImport = CountUpModule.default ?? CountUpModule;
const CountUp = CountUpImport.default ?? CountUpImport;

function Hero() {
  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="tag">TRAIN HARD • STAY STRONG</span>

          <h1>
            BUILD YOUR
            <span> DREAM BODY</span>
          </h1>

          <p>
            Join the city's most trusted fitness center with certified trainers,
            modern equipment, personalized workout plans, and an inspiring
            community that pushes you beyond your limits.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Today
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              <FaPlay />
              Watch Tour
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>
                <CountUp end={1500} duration={3} />+
              </h2>
              <span>Members</span>
            </div>

            <div>
              <h2>
                <CountUp end={18} duration={3} />+
              </h2>
              <span>Expert Trainers</span>
            </div>

            <div>
              <h2>
                <CountUp end={10} duration={3} />+
              </h2>
              <span>Years Experience</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="trial-card"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>FREE TRIAL</h3>

          <p>
            Experience premium fitness training with a complimentary one-day
            pass.
          </p>

          <button>Claim Now</button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;