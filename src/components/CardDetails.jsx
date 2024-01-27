import "./styles/CardDetails.css";
import cardLogo from "../assets/images/card-logo.svg";
import cardFront from "./../assets/images/bg-card-front.png";
import cardBack from "./../assets/images/bg-card-back.png";

export default function CardDetails({ detailsValues, formValues }) {
  const showValues = (field) => {
    return formValues[field] === "" || formValues[field] === null
      ? detailsValues[field]
      : formValues[field];
  };

  return (
    <div className="card-details">
      <div className="card-front">
        <img
          className="card-front-image"
          alt="card-front"
          src={cardFront}
        />
        <div className="details-front">
          <div>
            <img className="card-logo" src={cardLogo} alt="card-logo" />
          </div>
          <div>
            <p className="card-number">{showValues("cardNumber")}</p>
            <div className="card-info">
              <p>{showValues("cardName").toUpperCase()}</p>
              <p>
                {showValues("month")}/{showValues("year")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-back">
        <img
          className="card-back-image"
          alt="card-back"
          src={cardBack}
        />
        <div className="details-back">
          <p className="card-cvc">{showValues("cvc")}</p>
        </div>
      </div>
    </div>
  );
}
