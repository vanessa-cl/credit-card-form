import "./styles/CardDetails.css";
import cardLogo from "../assets/images/card-logo.svg";

export default function CardDetails({ detailsValues, formValues }) {
  const showValues = (field) => {
    if (field === "month" || field === "year") {
      return formValues.expireDate[field] === "" ||
        formValues.expireDate[field] === null
        ? detailsValues.expireDate[field]
        : formValues.expireDate[field];
    }
    return formValues[field] === "" || formValues[field] === null
      ? detailsValues[field]
      : formValues[field];
  };

  return (
    <div className="card-details-container">
      <div className="card-details-front">
        <div className="flex flex-column px-5">
          <img className="card-logo" src={cardLogo} alt="card-logo" />
          <p className="card-number card-details">{showValues("cardNumber")}</p>
          <div className="card-info flex justify-content-between">
            <p className="card-details">
              {showValues("cardName").toUpperCase()}
            </p>
            <p className="card-details">
              {showValues("month")}/{showValues("year")}
            </p>
          </div>
        </div>
      </div>
      <div className="card-details-back">
        <div className="flex justify-content-end">
          <p className="card-cvc card-details">{showValues("cvc")}</p>
        </div>
      </div>
    </div>
  );
}
