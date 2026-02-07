import HomeStyle from "../Home.module.css";

function Map() {
  return (
    <>
      <h2 className={HomeStyle["section-title"]}>Find Us</h2>
      <p className={HomeStyle["section-subtitle"]}>
        Conveniently located in Fort Mill with ample parking
      </p>

      <div className={HomeStyle["map-container"]}>📍</div>
    </>
  );
}
export default Map;
