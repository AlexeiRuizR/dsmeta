import icone from "../../img/notificacion-icon.svg";
import "./styles.css";

function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={icone} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
