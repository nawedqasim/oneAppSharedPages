import HomeStyle from "../Home.module.css";
import { useState } from "react";

function HeroSection(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingSub, setIsEditingSub] = useState(false);
  const [isEditingTagline, setIsEditingTagline] = useState(false);

  const [heading, setHeading] = useState(props.hero?.heading || "");
  const [subheading, setSubheading] = useState(props.hero?.subheading || "");
  const [tagline, setTagline] = useState(props.hero?.tagline || "");

  return (
    <div className={HomeStyle["hero"]} id="home">
      {/* <h1>{props.businessName}</h1> */}
       <div className={HomeStyle.headerControls}>
        {props.mode==="edit" && (
    <button className={HomeStyle.backButton} onClick={() => console.log('Go back')}>
      ← Back
    </button>
    )}
     {props.mode==="edit" && (
    <button className={HomeStyle.saveButton} onClick={() => console.log('Save')}>
      Save
    </button>
     )}
  </div>
      <div className={HomeStyle.heroHeadingWrapper}>
        {isEditing ? (
          <input
            className={HomeStyle.heroInput}
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        ) : (
          <h1 className={HomeStyle.heroHeading}>{heading}</h1>
        )}

        {props.mode === "edit" && (
          <button
            className={HomeStyle.editButton}
            onClick={() => setIsEditing(!isEditing)}
          >
            ✏️
          </button>
        )}
      </div>
      <div className={HomeStyle["hero-subtitle"]}>
        {/* Your Premier Sports & Recreation Destination */}
        <div className={HomeStyle.heroSubWrapper}>
          {isEditingSub ? (
            <input
              className={HomeStyle.heroSubInput}
              value={subheading}
              onChange={(e) => setSubheading(e.target.value)}
            />
          ) : (
            <p className={HomeStyle.heroSubheading}>{subheading}</p>
          )}

          {props.mode === "edit" && (
            <button
              className={HomeStyle.editButtonSub}
              onClick={() => setIsEditingSub(!isEditingSub)}
            >
              ✏️
            </button>
          )}
        </div>
      </div>
      {/* <div className={HomeStyle["hero-description"]}>
        Experience the thrill of sports and recreation at {props.businessName}.
      </div> */}
      <div className={HomeStyle.heroTaglineWrapper}>
        <div className={HomeStyle.heroTaglineInner}>
          {isEditingTagline ? (
            <input
              className={HomeStyle.heroTaglineInput}
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          ) : (
            <p className={HomeStyle.heroTagline}>{tagline}</p>
          )}

          {props.mode === "edit" && (
            <button
              className={HomeStyle.editButtonTagline}
              onClick={() => setIsEditingTagline(!isEditingTagline)}
            >
              ✏️
            </button>
          )}
        </div>
      </div>

      <div className={HomeStyle["hero-cta"]}>
        <a
          href="#services"
          className={`${HomeStyle["cta-btn"]} ${HomeStyle["cta-primary"]}`}
        >
          Explore Services
        </a>
        <a
          href="#contact"
          className={`${HomeStyle["cta-btn"]} ${HomeStyle["cta-secondary"]}`}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
export default HeroSection;
