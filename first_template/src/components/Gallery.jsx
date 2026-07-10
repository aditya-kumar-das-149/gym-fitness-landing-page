import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearchPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "../styles/Gallery.css";

import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";

const images = [
  {
    image: gallery1,
    title: "Strength Training",
    category: "Gym",
    height: "tall",
  },
  {
    image: gallery2,
    title: "Functional Fitness",
    category: "Workout",
    height: "medium",
  },
  {
    image: gallery3,
    title: "Cardio Zone",
    category: "Fitness",
    height: "short",
  },
  {
    image: gallery4,
    title: "Elite Coaching",
    category: "Training",
    height: "tall",
  },
  {
    image: gallery5,
    title: "Powerlifting",
    category: "Strength",
    height: "medium",
  },
  {
    image: gallery6,
    title: "Group Sessions",
    category: "Community",
    height: "short",
  },
  {
    image: gallery7,
    title: "Modern Equipment",
    category: "Premium",
    height: "medium",
  },
  {
    image: gallery8,
    title: "Transformation",
    category: "Lifestyle",
    height: "tall",
  },
];

const Gallery = () => {
  const [current, setCurrent] = useState(null);

  const closeLightbox = () => setCurrent(null);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section className="gallery section" id="gallery">
        <div className="container">

          <motion.span
            className="section-tag"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >
            OUR GALLERY
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >
            Inside Our Premium Fitness Club
          </motion.h2>

          <motion.p
            className="gallery-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >
            Explore our world-class equipment, energetic environment,
            professional coaching, and premium training experience.
          </motion.p>

          <div className="gallery-grid">

            {images.map((item, index) => (

              <motion.div
                key={index}
                className={`gallery-card ${item.height}`}
                initial={{ opacity: 0, scale: .95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: .45,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay">

                  <div>

                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                  </div>

                  <button
                    onClick={() => setCurrent(index)}
                  >
                    <FaSearchPlus />
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      <AnimatePresence>

        {current !== null && (

          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <button
              className="close-btn"
              onClick={closeLightbox}
            >
              <FaTimes />
            </button>

            <button
              className="nav-btn left"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>

            <motion.img
              key={current}
              src={images[current].image}
              alt={images[current].title}
              initial={{ scale: .9 }}
              animate={{ scale: 1 }}
              transition={{ duration: .35 }}
            />

            <button
              className="nav-btn right"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>

            <motion.div
              className="lightbox-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span>{images[current].category}</span>

              <h3>{images[current].title}</h3>
            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Gallery;