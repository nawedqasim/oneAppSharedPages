import HomeStyle from "../Home.module.css";

function Testimonials() {
  return (
    <>
      <h2 className={HomeStyle["section-title"]}>What Our Members Say</h2>
      <p className={HomeStyle["section-subtitle"]}>
        Join thousands of satisfied customers who have made Elite Sports their
        home
      </p>

      <div className={HomeStyle["testimonials-section"]}>
        <div className={HomeStyle["testimonials-grid"]}>
          <div className={HomeStyle["testimonial-card"]}>
            <div className={HomeStyle["testimonial-rating"]}>★★★★★</div>
            <div className={HomeStyle["testimonial-text"]}>
              "Amazing facilities! The courts are always well-maintained and the
              staff is incredibly friendly. Best sports complex in the area!"
            </div>
            <div className={HomeStyle["testimonial-author"]}>
              <div className={HomeStyle["author-avatar"]}>JS</div>
              <div className={HomeStyle["author-info"]}>
                <div className={HomeStyle["author-name"]}>John Smith</div>
                <div className={HomeStyle["author-date"]}>2 weeks ago</div>
              </div>
            </div>
          </div>

          <div className={HomeStyle["testimonial-card"]}>
            <div className={HomeStyle["testimonial-rating"]}>★★★★★</div>
            <div className={HomeStyle["testimonial-text"]}>
              "My kids love the group classes and I appreciate the professional
              coaching staff. Highly recommend for families!"
            </div>
            <div className={HomeStyle["testimonial-author"]}>
              <div className={HomeStyle["author-avatar"]}>SJ</div>
              <div className={HomeStyle["author-info"]}>
                <div className={HomeStyle["author-name"]}>Sarah Johnson</div>
                <div className={HomeStyle["author-date"]}>1 month ago</div>
              </div>
            </div>
          </div>

          <div className={HomeStyle["testimonial-card"]}>
            <div className={HomeStyle["testimonial-rating"]}>★★★★★</div>
            <div className={HomeStyle["testimonial-text"]}>
              "Great value for money. The booking system is easy to use and the
              facilities are top-notch. Will definitely be back!"
            </div>
            <div className={HomeStyle["testimonial-author"]}>
              <div className={HomeStyle["author-avatar"]}>MD</div>
              <div className={HomeStyle["author-info"]}>
                <div className={HomeStyle["author-name"]}>Mike Davis</div>
                <div className={HomeStyle["author-date"]}>3 weeks ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
