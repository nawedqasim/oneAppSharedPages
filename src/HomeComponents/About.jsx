import HomeStyle from "../Home.module.css";

function About() {
  return (
    <div className={HomeStyle["about-section"]} id="about">
      <div className={HomeStyle["about-content"]}>
        <h3>About Elite Sports Complex</h3>
        <p>
          Since 2018, Elite Sports Complex has been the go-to destination for
          athletes and fitness enthusiasts in Fort Mill. Our mission is to
          provide top-tier facilities and foster a community where everyone can
          pursue their passion for sports.
        </p>
        <p>
          With over 50,000 square feet of premier sports facilities, we offer
          everything you need under one roof.
        </p>
        <div className={HomeStyle["about-features"]}>
          <div className={HomeStyle["feature-item"]}>
            <span className={HomeStyle["feature-icon"]}>✓</span>
            <span>State-of-the-art Equipment</span>
          </div>
          <div className={HomeStyle["feature-item"]}>
            <span className={HomeStyle["feature-icon"]}>✓</span>
            <span>Certified Professional Coaches</span>
          </div>
          <div className={HomeStyle["feature-item"]}>
            <span className={HomeStyle["feature-icon"]}>✓</span>
            <span>Clean & Modern Facilities</span>
          </div>
          <div className={HomeStyle["feature-item"]}>
            <span className={HomeStyle["feature-icon"]}>✓</span>
            <span>Flexible Membership Plans</span>
          </div>
          <div className={HomeStyle["feature-item"]}>
            <span className={HomeStyle["feature-icon"]}>✓</span>
            <span>Family-Friendly Environment</span>
          </div>
        </div>
      </div>
      <div className={HomeStyle["about-image"]}>🏢</div>
    </div>
  );
}
export default About;
