import HomeStyle from "../Home.module.css";

function ContactSection() {
  return (
    <>
      <h2 className={HomeStyle["section-title"]} id="contact">
        Get In Touch
      </h2>
      <p className={HomeStyle["section-subtitle"]}>
        Have questions? We're here to help!
      </p>

      <div className={HomeStyle["contact-section"]}>
        <div className={HomeStyle["contact-card"]}>
          <div className={HomeStyle["contact-header"]}>Contact Information</div>
          <div className={HomeStyle["contact-body"]}>
            <div className={HomeStyle["contact-item"]}>
              <div className={HomeStyle["contact-icon"]}>📍</div>
              <div className={HomeStyle["contact-info"]}>
                <div className={HomeStyle["contact-label"]}>Address</div>
                <div className={HomeStyle["contact-value"]}>
                  123 Sports Avenue, Fort Mill, SC 29715
                </div>
              </div>
            </div>

            <div className={HomeStyle["contact-item"]}>
              <div className={HomeStyle["contact-icon"]}>📞</div>
              <div className={HomeStyle["contact-info"]}>
                <div className={HomeStyle["contact-label"]}>Phone</div>
                <div className={HomeStyle["contact-value"]}>(803) 555-0123</div>
              </div>
            </div>

            <div className={HomeStyle["contact-item"]}>
              <div className={HomeStyle["contact-icon"]}>📧</div>
              <div className={HomeStyle["contact-info"]}>
                <div className={HomeStyle["contact-label"]}>Email</div>
                <div className={HomeStyle["contact-value"]}>
                  info@elitesports.com
                </div>
              </div>
            </div>

            <div className={HomeStyle["contact-item"]}>
              <div className={HomeStyle["contact-icon"]}>🌐</div>
              <div className={HomeStyle["contact-info"]}>
                <div className={HomeStyle["contact-label"]}>Website</div>
                <div className={HomeStyle["contact-value"]}>
                  www.elitesports.com
                </div>
              </div>
            </div>

            <div className={HomeStyle["contact-item"]}>
              <div className={HomeStyle["contact-icon"]}>💬</div>
              <div className={HomeStyle["contact-info"]}>
                <div className={HomeStyle["contact-label"]}>Social Media</div>
                <div className={HomeStyle["contact-value"]}>
                  @elitesportscomplex
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={HomeStyle["contact-card"]}>
          <div className={HomeStyle["contact-header"]}>Operating Hours</div>
          <div className={HomeStyle["contact-body"]}>
            <div className={HomeStyle["hours-row"]}>
              <span className={HomeStyle["hours-day"]}>Monday</span>
              <span className={HomeStyle["hours-time"]}>
                6:00 AM - 10:00 PM
              </span>
            </div>
            <div className={HomeStyle["hours-row"]}>
              <span className={HomeStyle["hours-day"]}>Tuesday</span>
              <span className={HomeStyle["hours-time"]}>
                6:00 AM - 10:00 PM
              </span>
            </div>
            <div className={HomeStyle["hours-row"]}>
              <span className={HomeStyle["hours-day"]}>Wednesday</span>
              <span className={HomeStyle["hours-time"]}>
                6:00 AM - 10:00 PM
              </span>
            </div>
            <div className={HomeStyle["hours-row"]}>
              <span className={HomeStyle["hours-day"]}>Thursday</span>
              <span className={HomeStyle["hours-time"]}>
                6:00 AM - 10:00 PM
              </span>
            </div>
            <div className={HomeStyle["hours-row"]}>
              <span className={HomeStyle["hours-day"]}>Friday</span>
              <span className={HomeStyle["hours-time"]}>
                6:00 AM - 11:00 PM
              </span>
            </div>
            <div className={HomeStyle["hours-row"]}>
              <span className={HomeStyle["hours-day"]}>Saturday</span>
              <span className={HomeStyle["hours-time"]}>
                7:00 AM - 11:00 PM
              </span>
            </div>
            <div className={HomeStyle["hours-row"]}>
              <span className={HomeStyle["hours-day"]}>Sunday</span>
              <span className={HomeStyle["hours-time"]}>7:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactSection;
