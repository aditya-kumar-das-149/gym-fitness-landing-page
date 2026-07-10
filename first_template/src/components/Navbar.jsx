import "../styles/Navbar.css";
import { FaDumbbell, FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={scroll ? "navbar active" : "navbar"}>
        <div className="logo">
          <FaDumbbell />
          <h2>IRON FORGE</h2>
        </div>

        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#pricing">Pricing</a>
          <a href="#trainers">Trainers</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#pricing" className="primary-btn">
          Join Now
        </a>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </header>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default Navbar;