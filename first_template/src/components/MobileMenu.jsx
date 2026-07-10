import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import "../styles/MobileMenu.css";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Pricing", href: "#pricing" },
  { name: "Trainers", href: "#trainers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="mobile-btn"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}