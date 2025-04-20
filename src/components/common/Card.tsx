import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/card.css";

const Card = ({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-header">
          <div className="card-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="card-title">{title}</div>
        </div>
        <div className="card-body">
          <div className="card-text">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
