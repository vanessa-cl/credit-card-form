import "./styles/CardDetails.css";
import cardLogo from "../assets/images/card-logo.svg";

export default function CardDetails() {
  return (
    <div className="card-details-container p-5">
      <div className="card-details-front">
        <div className="flex flex-column px-5">
          <img className="card-logo" src={cardLogo} />
          <p className="card-number">1234 5678 9123 0000</p>
          <div className="card-info flex justify-content-between">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
          </div>
        </div>
      </div>
      <div className="card-details-back">
        <div className="flex justify-content-end">
          <p className="card-cvc">000</p>
        </div>
      </div>
    </div>
  );
}
