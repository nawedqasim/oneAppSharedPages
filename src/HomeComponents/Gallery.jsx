import HomeStyle from "../Home.module.css";
function Gallery() {
  return (
    <>
      <h2 className={HomeStyle["section-title"]}>Our Facilities</h2>
      <p className={HomeStyle["section-subtitle"]}>
        Take a look at our state-of-the-art sports complex featuring premium
        courts and modern amenities
      </p>

      <div className={HomeStyle["gallery-grid"]}>
        <div
          className={`${HomeStyle["gallery-item"]} ${HomeStyle["large"]}`}
          data-label="Main Court"
        >
          🎾
        </div>
        <div className={HomeStyle["gallery-item"]} data-label="Basketball">
          🏀
        </div>
        <div className={HomeStyle["gallery-item"]} data-label="Soccer Field">
          ⚽
        </div>
        <div className={HomeStyle["gallery-item"]} data-label="Fitness Center">
          💪
        </div>
        <div className={HomeStyle["gallery-item"]} data-label="Swimming Pool">
          🏊
        </div>
        <div className={HomeStyle["gallery-item"]} data-label="Locker Rooms">
          🚿
        </div>
        <div className={HomeStyle["gallery-item"]} data-label="Pro Shop">
          🛍️
        </div>
      </div>
    </>
  );
}
export default Gallery;
