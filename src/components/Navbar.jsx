import "./Navbar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav>
      <div>
        <Link to="/" className="flex items-center justify-center">
          <img src="/images/logo.png" alt="logo" />
        </Link>

        <ul>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <a href="/#about">About Us</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
