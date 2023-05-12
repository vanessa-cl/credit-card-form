import "./styles/CardDetails.css";
import cardLogo from "../assets/images/card-logo.svg";

export default function CardDetails({ detailsValues, formValues }) {
  const showValues = (field) => {
    if (field === "month" || field === "year") {
      return formValues.expireDate[field] === ""
        ? detailsValues.expireDate[field]
        : formValues.expireDate[field];
    }
    return formValues[field] === "" ? detailsValues[field] : formValues[field];
  };

  return (
    <div className="card-details-container">
      <div className="card-details-front">
        <div className="flex flex-column px-5">
          <img className="card-logo" src={cardLogo} />
          <p className="card-number">{showValues("cardNumber")}</p>
          <div className="card-info flex justify-content-between">
            <p>{showValues("cardName").toUpperCase()}</p>
            <p>
              {showValues("month")}/{showValues("year")}
            </p>
          </div>
        </div>
      </div>
      <div className="card-details-back">
        <div className="flex justify-content-end">
          <p className="card-cvc">{showValues("cvc")}</p>
        </div>
      </div>
    </div>
  );
}
