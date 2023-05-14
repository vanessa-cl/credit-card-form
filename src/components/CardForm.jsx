import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import "./styles/CardForm.css";
import useForm from "../hooks/useForm";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

const INITIAL_ERRORS_STATE = {
  cardNumber: "",
  cardName: "",
  expireDate: "",
  cvc: "",
};

export default function CardForm({ formValues, setFormValues }) {
  const { setErrorMessages } = useForm();
  const [formErrors, setFormErrors] = useState(INITIAL_ERRORS_STATE);

  const getValidationErrors = (validityState, field) => {
    for (let key in validityState) {
      if (validityState[key]) {
        setFormErrors({ ...formErrors, [field]: key });
      }
    }
  };

  const getInvalidFieldStyle = (field) => {
    return formErrors[field] !== "valid" ? "invalid-field" : ""
  }

  return (
    <form>
      {console.log(formErrors)}
      <div className="flex flex-column">
        <label className="form-label" htmlFor="cardholder-name">
          CARDHOLDER NAME
        </label>
        <InputText
          id="cardholder-name"
          title="Cardholder name"
          className={`larger-input ${getInvalidFieldStyle("cardName")}`}
          placeholder="e.g. Jane Appleseed"
          value={formValues.cardName}
          onChange={(event) => {
            // console.log(event.target.checkValidity())
            getValidationErrors(event.target.validity, "cardName");
            setFormValues({ ...formValues, cardName: event.target.value });
          }}
          minLength={3}
          maxLength={30}
          autoFocus
          required
        />
        <ErrorMessage message={setErrorMessages(formErrors.cardName)} />
      </div>
      <div className="flex flex-column">
        <label className="form-label" htmlFor="card-number">
          CARD NUMBER
        </label>
        <InputText
          id="card-number"
          title="Card number"
          className={`larger-input ${getInvalidFieldStyle("cardNumber")}`}
          placeholder="e.g 1234 5678 9123 0000"
          value={formValues.cardNumber}
          onChange={(event) => {
            getValidationErrors(event.target.validity, "cardNumber");
            setFormValues({ ...formValues, cardNumber: event.target.value });
          }}
          required
        />
        <ErrorMessage message={setErrorMessages(formErrors.cardNumber)} />
      </div>
      <div className="flex justify-content-start gap-3">
        <div>
          <label className="inline-flex form-label" id="expire-date">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex justify-content-between gap-3">
            <InputNumber
              id="expire-month"
              title="Expire month"
              className={`${getInvalidFieldStyle("expireDate")}`}
              inputClassName={`date-input ${getInvalidFieldStyle("expireDate")}`}
              aria-labelledby="expire-date"
              placeholder="MM"
              value={formValues.expireDate.month}
              onChange={(event) => {
                getValidationErrors(
                  event.originalEvent.target.validity,
                  "expireDate"
                );
                setFormValues({
                  ...formValues,
                  expireDate: { ...formValues.expireDate, month: event.value },
                });
              }}
              required
            />
            <InputNumber
              id="expire-year"
              title="Expire year"
              inputClassName={`date-input ${getInvalidFieldStyle("expireDate")}`}
              aria-labelledby="expire-date"
              placeholder="YY"
              value={formValues.expireDate.year}
              onChange={(event) => {
                getValidationErrors(
                  event.originalEvent.target.validity,
                  "expireDate"
                );
                setFormValues({
                  ...formValues,
                  expireDate: { ...formValues.expireDate, year: event.value },
                });
              }}
              required
            />
          </div>
          <ErrorMessage message={setErrorMessages(formErrors.expireDate)} />
        </div>
        <div className="flex flex-column">
          <label className="form-label" htmlFor="cvc">
            CVC
          </label>
          <InputNumber
            id="cvc"
            title="CVC"
            inputClassName={`small-input ${getInvalidFieldStyle("cvc")}`}
            placeholder="e.g 123"
            value={formValues.cvc}
            onChange={(event) => {
              getValidationErrors(event.originalEvent.target.validity, "cvc");
              setFormValues({ ...formValues, cvc: event.value });
            }}
            required
          />
          <ErrorMessage message={setErrorMessages(formErrors.cvc)} />
        </div>
      </div>
      <div className="flex justify-content-center">
        <Button
          id="submit-button"
          type="submit"
          className="submit-button"
          label="Confirm"
        />
      </div>
    </form>
  );
}
