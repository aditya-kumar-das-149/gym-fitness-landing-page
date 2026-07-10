import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* COLUMN 1 */}

          <motion.div
            className="footer-about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >

            <h2 className="footer-logo">
              ELITE<span>FIT</span>
            </h2>

            <p>
              Transforming lives through premium fitness,
              expert coaching, and world-class facilities.
              Our mission is to help every member become
              stronger, healthier, and more confident.
            </p>

            <div className="footer-socials">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

            </div>

          </motion.div>

          {/* COLUMN 2 */}

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >

            <h3>Quick Links</h3>

            <ul>

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#programs">Programs</a>
              </li>

              <li>
                <a href="#pricing">Pricing</a>
              </li>

              <li>
                <a href="#trainers">Trainers</a>
              </li>

              <li>
                <a href="#gallery">Gallery</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>

          </motion.div>

          {/* COLUMN 3 */}

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >

            <h3>Contact Info</h3>

            <div className="contact-item">

              <FaMapMarkerAlt />

              <span>
                221 Premium Street,
                Downtown Fitness District
              </span>

            </div>

            <div className="contact-item">

              <FaPhoneAlt />

              <span>
                +91 98765 43210
              </span>

            </div>

            <div className="contact-item">

              <FaEnvelope />

              <span>
                hello@elitefitness.com
              </span>

            </div>

          </motion.div>

          {/* COLUMN 4 */}

          <motion.div
            className="footer-newsletter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
          >

            <h3>Newsletter</h3>

            <p>
              Subscribe to receive workout tips,
              nutrition advice, and exclusive offers.
            </p>

            <form className="newsletter-form">

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
                            <button type="submit">
                <FaPaperPlane />
              </button>

            </form>

          </motion.div>

        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
        >

          <p>
            © {new Date().getFullYear()} EliteFit. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy Policy
            </a>

            <span>|</span>

            <a href="#">
              Terms & Conditions
            </a>

            <span>|</span>

            <a href="#">
              Cookie Policy
            </a>

          </div>

        </motion.div>

      </div>

    </footer>
  );
};

export default Footer;