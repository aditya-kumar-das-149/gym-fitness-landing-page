import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
        >
          CONTACT US
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          viewport={{ once: true }}
        >
          Let's Start Your Fitness Journey
        </motion.h2>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
        >
          Whether you have questions about memberships, personal training,
          nutrition plans, or simply want to visit our gym, our team is
          ready to help.
        </motion.p>

        <div className="contact-grid">

          {/* LEFT SIDE */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >

            <div className="info-card">

              <div className="info-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>hello@elitefitness.com</p>
              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>
                  221 Premium Street,
                  Downtown Fitness District
                </p>
              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">
                <FaClock />
              </div>

              <div>
                <h3>Working Hours</h3>
                <p>
                  Monday - Sunday
                  <br />
                  5:00 AM - 11:00 PM
                </p>
              </div>

            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-card"
            >
              <FaWhatsapp />

              <div>
                <h3>Chat on WhatsApp</h3>
                <span>
                  Usually replies within minutes
                </span>
              </div>
            </a>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >

            <form className="contact-form">

              <div className="input-group">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

              </div>

              <div className="input-group">

                <input
                  type="tel"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  placeholder="Subject"
                />

              </div>
                            <textarea
                rows="7"
                placeholder="Tell us about your fitness goals..."
                required
              ></textarea>

              <button
                type="submit"
                className="contact-btn"
              >
                Send Message
              </button>

            </form>

            <div className="contact-note">

              <h3>
                Why Contact Us?
              </h3>

              <p>
                Every inquiry is personally reviewed by one of our
                fitness consultants. Whether you're looking to lose
                weight, build muscle, improve athletic performance,
                or simply stay healthy, we'll help you find the
                perfect program.
              </p>

            </div>

          </motion.div>

        </div>

        <motion.div
          className="map-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <iframe
            title="Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.61368585532!2d77.06889924257067!3d28.52755440973905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c1d8a2e5b7%3A0xf5c2cf84d888fff!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </motion.div>
                <motion.div
          className="contact-bottom"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bottom-card">

            <h3>Book Your Free Trial Session</h3>

            <p>
              Experience our premium equipment, expert trainers, and
              motivating atmosphere before choosing a membership plan.
              Your first session is completely free.
            </p>

            <a href="#pricing" className="trial-btn">
              Claim Free Workout
            </a>

          </div>

          <div className="bottom-card">

            <h3>Personalized Fitness Consultation</h3>

            <p>
              Meet one of our certified coaches to discuss your goals,
              receive a body assessment, and get a customized fitness
              roadmap designed specifically for you.
            </p>

            <a href="#trainers" className="trial-btn secondary">
              Meet Our Coaches
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;