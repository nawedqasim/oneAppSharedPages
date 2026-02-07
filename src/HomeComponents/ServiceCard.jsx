import HomeStyle from "../Home.module.css";
function ServiceCard(props) {
    return (
        <div className={HomeStyle["service-card"]}>
        <div className={HomeStyle["service-icon"]}>{props.icon}</div>
        <div className={HomeStyle["service-title"]}>{props.title}</div>
        <div className={HomeStyle["service-description"]}>
          {props.description}
        </div>
        <div className={HomeStyle["service-price"]}>{props.price}</div>
        <div className={HomeStyle["service-price-label"]}>{props.priceLabel}</div>
      </div>
    );
}
export default ServiceCard;