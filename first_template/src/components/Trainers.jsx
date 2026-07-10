import "../styles/Trainers.css";

import trainer1 from "../assets/trainers/trainer1.jpg";
import trainer2 from "../assets/trainers/trainer2.jpg";
import trainer3 from "../assets/trainers/trainer3.jpg";
import trainer4 from "../assets/trainers/trainer4.jpg";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";

import { motion } from "framer-motion";

const trainers = [
  {
    name: "John Carter",
    role: "Strength Coach",
    experience: "8 Years",
    image: trainer1,
  },
  {
    name: "Emma Wilson",
    role: "CrossFit Coach",
    experience: "6 Years",
    image: trainer2,
  },
  {
    name: "Ryan Cooper",
    role: "Bodybuilding Coach",
    experience: "10 Years",
    image: trainer3,
  },
  {
    name: "Sophia Lee",
    role: "Yoga Trainer",
    experience: "7 Years",
    image: trainer4,
  },
];

function Trainers() {
  return (
    <section className="trainers" id="trainers">
      <div className="container">

        <div className="trainer-heading">

          <span>OUR TRAINERS</span>

          <h2>
            Meet Our Fitness Experts
          </h2>

          <p>
            Experienced professionals dedicated to helping you
            achieve your goals.
          </p>

        </div>

        <div className="trainer-grid">

          {trainers.map((trainer, index) => (

            <motion.div
              className="trainer-card"
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <div className="trainer-image">

                <img
                  src={trainer.image}
                  alt={trainer.name}
                />

                <div className="trainer-socials">

                  <a href="#">
                    <FaInstagram />
                  </a>

                  <a href="#">
                    <FaFacebookF />
                  </a>

                  <a href="#">
                    <FaLinkedinIn />
                  </a>

                </div>

              </div>

              <h3>{trainer.name}</h3>

              <span className="role">
                {trainer.role}
              </span>

              <div className="experience">
                {trainer.experience} Experience
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Trainers;