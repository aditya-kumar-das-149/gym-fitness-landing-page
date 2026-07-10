import "../styles/BMICalculator.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWeight, FaRulerVertical } from "react-icons/fa";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);

    setBmi(result);

    if (result < 18.5) {
      setStatus("Underweight");
    } else if (result < 25) {
      setStatus("Healthy");
    } else if (result < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <section className="bmi" id="bmi">
      <div className="container bmi-container">

        <motion.div
          className="bmi-left"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span>FREE BMI CHECK</span>

          <h2>Know Your Body Better</h2>

          <p>
            Enter your height and weight to instantly calculate your
            Body Mass Index.
          </p>

        </motion.div>

        <motion.div
          className="bmi-card"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div className="input-box">

            <FaRulerVertical />

            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

          </div>

          <div className="input-box">

            <FaWeight />

            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

          </div>

          <button
            className="primary-btn"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>

          {bmi && (

            <div className="result">

              <h3>Your BMI</h3>

              <h1>{bmi}</h1>

              <span>{status}</span>

            </div>

          )}

        </motion.div>

      </div>
    </section>
  );
}

export default BMICalculator;