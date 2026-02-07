import HomeStyle from "./Home.module.css";
import Navbar from "./HomeComponents/Navbar";
import HeroSection from "./HomeComponents/HeroSection";
import Footer from "./HomeComponents/Footer";
import Gallery from "./HomeComponents/Gallery";
import Services from "./HomeComponents/Services";
import About from "./HomeComponents/About";
import Testimonials from "./HomeComponents/Testimonials";
import Map from "./HomeComponents/Map";
import ContactSection from "./HomeComponents/ContactSection";
import { useState } from "react";




export default function SharedDashboardPage({data, mode}) {
   const [toggleMenu, setToggleMenu] = useState(true);
   const [isMenuOpen, setIsMenuOpen] = useState(true);
   
   function toggleMenuHandler() {
    setToggleMenu(!toggleMenu);
    setIsMenuOpen(!isMenuOpen);
   }
  
      
        const business = data.businessName || "Business Name";
      


  return (
   
    <div className={HomeStyle.oneappRoot}>
      <div className={HomeStyle["page-wrapper"]}>
        <Navbar toggleMenu={toggleMenuHandler} isMenuOpen={isMenuOpen} businessName={business} />
        <div className={HomeStyle["container"]}>
          <HeroSection 
          businessName={business} 
          hero={data?.hero}
          mode={mode}
          />
          <div className={HomeStyle["content-section"]}>
            {/* <Gallery /> */}
            <Services />
            {/* <About />
            <Testimonials />
            <Map />
            <ContactSection /> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

