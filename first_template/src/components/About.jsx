import "../styles/About.css";
import aboutImage from "../assets/about.jpg";
import { FaDumbbell, FaAppleAlt, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="Gym" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">
            ABOUT US
          </span>

          <h2>
            More Than A Gym.
            <br />
            A Lifestyle.
          </h2>

          <p>
            At Iron Forge, we believe fitness is more than lifting weights.
            It's about becoming stronger physically and mentally. Our certified
            trainers, premium equipment and supportive community help members
            achieve long-term results.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <FaDumbbell />
              <div>
                <h4>Modern Equipment</h4>
                <p>International quality machines for every workout.</p>
              </div>
            </div>

            <div className="about-card">
              <FaAppleAlt />
              <div>
                <h4>Nutrition Plans</h4>
                <p>Customized diet guidance for every member.</p>
              </div>
            </div>

            <div className="about-card">
              <FaUsers />
              <div>
                <h4>Expert Trainers</h4>
                <p>Certified professionals focused on your progress.</p>
              </div>
            </div>

          </div>

          <button className="primary-btn">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default About;