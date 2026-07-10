import "../styles/Programs.css";

import strength from "../assets/programs/strength.jpg";
import crossfit from "../assets/programs/crossfit.jpg";
import fatloss from "../assets/programs/fatloss.jpg";
import bodybuilding from "../assets/programs/bodybuilding.jpg";
import yoga from "../assets/programs/yoga.jpg";
import hiit from "../assets/programs/hiit.jpg";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Strength Training",
    image: strength,
    level: "Beginner",
    duration: "12 Weeks",
  },
  {
    title: "CrossFit",
    image: crossfit,
    level: "Advanced",
    duration: "8 Weeks",
  },
  {
    title: "Fat Loss",
    image: fatloss,
    level: "Intermediate",
    duration: "10 Weeks",
  },
  {
    title: "Bodybuilding",
    image: bodybuilding,
    level: "Advanced",
    duration: "16 Weeks",
  },
  {
    title: "Yoga",
    image: yoga,
    level: "Beginner",
    duration: "6 Weeks",
  },
  {
    title: "HIIT",
    image: hiit,
    level: "Intermediate",
    duration: "8 Weeks",
  },
];

function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="container">

        <div className="program-heading">

          <span>OUR PROGRAMS</span>

          <h2>
            Find The Perfect
            <br />
            Fitness Program
          </h2>

        </div>

        <div className="program-grid">

          {programs.map((program, index) => (

            <motion.div
              className="program-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >

              <img src={program.image} alt={program.title} />

              <div className="program-overlay">

                <span className="level">
                  {program.level}
                </span>

                <h3>{program.title}</h3>

                <p>{program.duration}</p>

                <button>

                  Learn More

                  <FaArrowRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Programs;