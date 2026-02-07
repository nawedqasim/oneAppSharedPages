import HomeStyle from "../Home.module.css";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <>
      <h2 className={HomeStyle["section-title"]} id="services">
        Our Services
      </h2>
      <p className={HomeStyle["section-subtitle"]}>
        Choose from our wide range of sports activities and training programs
      </p>

      <div className={HomeStyle["services-grid"]}>
        <ServiceCard
          title="Tennis Courts"
          description="8 professional-grade tennis courts with clay and hard surfaces. Perfect for players of all skill levels."
          price="$25/hour"
          priceLabel="Per Court"
          icon="🎾"
        />

        <ServiceCard
          title="Basketball Courts"
          description="Indoor courts with professional flooring and lighting. Ideal for training and competitive games."
          price="$30/hour"
          priceLabel="Per Court"
          icon="🏀"
        />

        <ServiceCard
          title="Soccer Field"
          description="Full-size artificial turf field with modern facilities for practices and matches."
          price="$50/hour"
          priceLabel="Full Field"
          icon="⚽"
        />
        {/* <ServiceCard
          title="Personal Training"
          description="One-on-one coaching with certified trainers to help you reach your fitness goals."
          price="$60/session"
          priceLabel="1 Hour Session"
          icon="🏋️"
        />

        <ServiceCard
          title="Group Classes"
          description="Fun and energetic group fitness classes including yoga, pilates, and aerobics."
          price="$15/class"
          priceLabel="Per Person"
          icon="👨‍👩‍👧‍👦"
        />

        <ServiceCard
          title="Tournament Hosting"
          description="Professional event management for sports tournaments and competitions."
          price="Custom"
          priceLabel="Contact Us"
          icon="🏆"
        />

        <ServiceCard
          title="Swimming Pool"
          description="Indoor heated swimming pool with lap lanes and modern amenities."
          price="$20/hour"
          priceLabel="Per Person"
          icon="🏊"
        />
        <ServiceCard 
        title="Fitness Center"
        description="State-of-the-art fitness center with cardio and strength training equipment."
        price="$30/month"
        priceLabel="Full Access"
        icon="💪"
        /> */}
      </div>
    </>
  );
}
export default Services;
