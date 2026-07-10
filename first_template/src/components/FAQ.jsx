import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

import "../styles/FAQ.css";

const faqData = [
  {
    question: "Do I need prior gym experience to join?",
    answer:
      "Not at all. Our certified coaches create personalized training plans for beginners, intermediate members, and advanced athletes so everyone progresses at their own pace.",
  },
  {
    question: "Do you provide personal training?",
    answer:
      "Yes. We offer one-on-one coaching sessions, customized workout plans, nutrition guidance, and regular progress tracking.",
  },
  {
    question: "Are nutrition plans included?",
    answer:
      "Premium memberships include personalized nutrition consultation, while standard plans can purchase nutrition coaching separately.",
  },
  {
    question: "Can I freeze my membership?",
    answer:
      "Absolutely. Members can pause their membership for medical reasons or travel according to our membership policy.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are open Monday to Sunday from 5:00 AM until 11:00 PM, giving members flexibility to train whenever it suits them.",
  },
  {
    question: "Do you have group fitness classes?",
    answer:
      "Yes. We offer HIIT, Yoga, Functional Training, Strength Conditioning, Cardio Sessions, and Weekend Bootcamps.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">

        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
        >
          FAQ
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="faq-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
        >
          Everything you need to know before starting your fitness journey
          with us.
        </motion.p>

        <div className="faq-wrapper">

          {faqData.map((item, index) => (

            <motion.div
              key={index}
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .08,
              }}
              viewport={{ once: true }}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <h3>{item.question}</h3>

                <span>

                  {active === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}

                </span>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    className="faq-answer"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: .35,
                    }}
                  >
                                        <div className="faq-answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

        <motion.div
          className="faq-bottom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
        >
          <h3>
            Still have questions?
          </h3>

          <p>
            Our fitness experts are always available to help you choose
            the right membership and create a personalized fitness plan.
          </p>

          <a href="#contact" className="faq-btn">
            Contact Our Team
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;