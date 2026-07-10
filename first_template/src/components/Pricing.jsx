import "../styles/Pricing.css";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: "$29",
    features: [
      "Gym Access",
      "Locker Facility",
      "Free Wi-Fi",
      "1 Personal Session",
    ],
  },
  {
    name: "Premium",
    price: "$49",
    featured: true,
    features: [
      "Everything in Basic",
      "Unlimited Classes",
      "Personal Trainer",
      "Nutrition Plan",
      "24/7 Access",
    ],
  },
  {
    name: "Elite",
    price: "$79",
    features: [
      "Everything in Premium",
      "VIP Lounge",
      "Weekly Assessment",
      "Custom Workout Plan",
      "Priority Support",
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="section-title">
        <span>Membership Plans</span>
        <h2>Choose Your Perfect Plan</h2>
      </div>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{plan.name}</h3>

            <div className="price">
              {plan.price}
              <span>/month</span>
            </div>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <FaCheck />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="primary-btn">
              Join Now
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;