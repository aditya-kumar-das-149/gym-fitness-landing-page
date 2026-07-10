import "../styles/WhyUs.css";
import {
  FaDumbbell,
  FaUserTie,
  FaHeartbeat,
  FaClock,
  FaAppleAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaDumbbell />,
    title: "Premium Equipment",
    desc: "Top-quality machines and free weights for every fitness level.",
  },
  {
    icon: <FaUserTie />,
    title: "Certified Trainers",
    desc: "Experienced professionals guiding every step of your journey.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Personal Coaching",
    desc: "Customized workout plans designed for your goals.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Timings",
    desc: "Morning and evening batches to fit your schedule.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Nutrition Support",
    desc: "Diet plans and healthy lifestyle guidance included.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe Environment",
    desc: "Clean, hygienic, and motivating atmosphere every day.",
  },
];

function WhyUs() {
  return (
    <section className="whyus" id="whyus">
      <div className="container">

        <motion.div
          className="whyus-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>WHY CHOOSE US</span>

          <h2>
            Train Smarter.
            <br />
            Become Stronger.
          </h2>

          <p>
            Everything you need to achieve your fitness goals under one roof.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((item, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyUs;