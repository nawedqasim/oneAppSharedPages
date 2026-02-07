import HomeStyle from "../Home.module.css";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();

  function handleBookNow() {
    // Redirect to login page using businessname prop
    // const businessName = props.businessname || props.business || "";
    console.log("Business Name:", props.businessName);
    navigate(`/${props.businessName}/Login`);

    // navigate(props.business+"/Login");
  }

  return (
    <nav className={HomeStyle["navbar"]}>
      <div className={HomeStyle["navbar-content"]}>
        <div className={HomeStyle["logo"]}>
          <div className={HomeStyle["logo-icon"]}>🏆</div>
          <span>Elite Sports</span>
        </div>
        <button
          className={HomeStyle["mobile-menu-btn"]}
          onClick={props.toggleMenu}
        >
          ☰
        </button>
        <div className={`${HomeStyle["nav-menu"]} ${props.isMenuOpen ? HomeStyle.active : ""}`}>
          <a href="#home" className={HomeStyle["nav-link"]}>
            Home
          </a>
          <a href="#services" className={HomeStyle["nav-link"]}>
            Services
          </a>
          <a href="#about" className={HomeStyle["nav-link"]}>
            About
          </a>
          <a href="#contact" className={HomeStyle["nav-link"]}>
            Contact
          </a>
          <button className={HomeStyle["book-now-btn"]} onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
