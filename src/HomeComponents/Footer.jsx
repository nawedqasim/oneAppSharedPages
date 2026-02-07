import HomeStyle from "../Home.module.css";

function Footer() {
  return (
    <footer className={HomeStyle["footer"]}>
      <div className={HomeStyle["footer-content"]}>
        <p>© 2025 Elite Sports Complex. All rights reserved.</p>
        {/* <p style="margin-top: 10px;">Powered by <strong>One App</strong></p> */}
        <div className={HomeStyle["social-links"]}>
          <a href="#" className={HomeStyle["social-link"]} title="Facebook">
            📘
          </a>
          <a href="#" className={HomeStyle["social-link"]} title="Instagram">
            📷
          </a>
          <a href="#" className={HomeStyle["social-link"]} title="Twitter">
            🐦
          </a>
          <a href="#" className={HomeStyle["social-link"]} title="YouTube">
            📺
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
