import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/Testimonials.css";

import client1 from "../assets/testimonials/client1.jpg";
import client2 from "../assets/testimonials/client2.jpg";
import client3 from "../assets/testimonials/client3.jpg";
import client4 from "../assets/testimonials/client4.jpg";

const testimonials = [
  {
    image: client1,
    name: "Michael Carter",
    role: "Software Engineer",
    rating: 5,
    review:
      "The atmosphere here is unlike any other gym I've trained at. Premium equipment, incredible trainers, and a motivating environment helped me completely transform my lifestyle.",
  },
  {
    image: client2,
    name: "Sophia Wilson",
    role: "Entrepreneur",
    rating: 5,
    review:
      "Joining this gym was the best investment I've made for myself. Every workout feels energetic, organized, and professionally guided.",
  },
  {
    image: client3,
    name: "Daniel Brooks",
    role: "Athlete",
    rating: 5,
    review:
      "The trainers genuinely care about your progress. My strength, endurance, and confidence have improved dramatically within just a few months.",
  },
  {
    image: client4,
    name: "Emma Johnson",
    role: "Content Creator",
    rating: 5,
    review:
      "From the modern interiors to the supportive community, everything about this place screams premium quality. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">

        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
        >
          TESTIMONIALS
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          viewport={{ once: true }}
        >
          What Our Members Say
        </motion.h2>

        <motion.p
          className="testimonial-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
        >
          Thousands of members have transformed their fitness journey with
          our expert coaching, premium equipment, and motivating community.
        </motion.p>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={900}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>

                <div className="testimonial-header">
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>
                </div>

                <div className="rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p>{item.review}</p>
                                <div className="testimonial-footer">
                  <div className="line"></div>
                </div>

              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          className="testimonial-stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-box">
            <h3>5K+</h3>
            <span>Happy Members</span>
          </div>

          <div className="stat-box">
            <h3>4.9★</h3>
            <span>Average Rating</span>
          </div>

          <div className="stat-box">
            <h3>98%</h3>
            <span>Client Satisfaction</span>
          </div>

          <div className="stat-box">
            <h3>12+</h3>
            <span>Professional Coaches</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;