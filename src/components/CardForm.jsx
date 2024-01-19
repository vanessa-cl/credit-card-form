import { useState } from "react";
import "./styles/CardForm.css";
import useForm from "../hooks/useForm";
import ErrorMessage from "./ErrorMessage";
import Button from "./ui/Button";
import Input from "./ui/Input";

const INITIAL_ERRORS_STATE = {
  cardNumber: "",
  cardName: "",
  month: "",
  year: "",
  cvc: "",
};

export default function CardForm({
  formValues,
  setFormValues,
  setIsFormCompleted,
}) {
  const {
    setErrorMessages,
    formatCardNumber,
    checkMinCardNumberLength,
    getInvalidFieldStyle,
    shouldSetDateErrors,
    shouldDisableSubmit,
    actualYear,
  } = useForm();
  const [formErrors, setFormErrors] = useState(INITIAL_ERRORS_STATE);

  const getValidationErrors = (validityState, field) => {
    for (let key in validityState) {
      if (validityState[key]) {
        setFormErrors({ ...formErrors, [field]: key });
      }
    }
  };

  return (
    <form>
      <div className="form-row">
        <label className="form-label" htmlFor="cardholder-name">
          CARDHOLDER NAME
        </label>
        <div
          className={`input-container ${getInvalidFieldStyle(
            formErrors,
            "cardName"
          )}`}
        >
          <Input
            id="cardholder-name"
            title="Cardholder name"
            type="text"
            className="form-input"
            placeholder="e.g. Jane Appleseed"
            minLength={3}
            maxLength={25}
            autoFocus
            required
            value={formValues.cardName}
            onChange={(event) => {
              getValidationErrors(event.target.validity, "cardName");
              setFormValues({ ...formValues, cardName: event.target.value });
            }}
            onBlur={(event) => {
              getValidationErrors(event.target.validity, "cardName");
            }}
          />
        </div>
        <ErrorMessage message={setErrorMessages(formErrors.cardName)} />
      </div>
      <div className="form-row">
        <label className="form-label" htmlFor="card-number">
          CARD NUMBER
        </label>
        <div
          className={`input-container ${getInvalidFieldStyle(
            formErrors,
            "cardNumber"
          )}`}
        >
          <Input
            id="card-number"
            title="Card number"
            className="form-input"
            placeholder="e.g 1234 5678 9123 0000"
            value={formValues.cardNumber}
            onChange={(event) => {
              setFormValues({
                ...formValues,
                cardNumber: formatCardNumber(event.target.value),
              });
              getValidationErrors(event.target.validity, "cardNumber");
            }}
            onBlur={(event) => {
              if (checkMinCardNumberLength(event.target.value)) {
                return getValidationErrors(
                  { ...event.target.validity, tooShort: true },
                  "cardNumber"
                );
              }
              getValidationErrors(event.target.validity, "cardNumber");
            }}
            pattern="^[0-9\s]+$"
            minLength={16}
            maxLength={16}
            required
          />
        </div>
        <ErrorMessage message={setErrorMessages(formErrors.cardNumber)} />
      </div>
      <div className="flex justify-content-start gap-3">
        <div>
          <label className="inline-flex form-label" id="expire-date">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex justify-content-between gap-3">
            <div
              className={`input-container ${getInvalidFieldStyle(
                formErrors,
                "month"
              )}`}
            >
              <Input
                id="expire-month"
                title="Expire month"
                type="number"
                className="form-input"
                aria-labelledby="expire-date"
                placeholder="MM"
                value={formValues.month}
                onChange={(event) => {
                  getValidationErrors(event.target.validity, "month");
                  setFormValues({
                    ...formValues,
                    month: event.target.value,
                  });
                }}
                onBlur={(event) =>
                  getValidationErrors(event.target.validity, "month")
                }
                min="1"
                max="12"
                required
              />
            </div>
            <div
              className={`input-container ${getInvalidFieldStyle(
                formErrors,
                "year"
              )}`}
            >
              <Input
                id="expire-year"
                title="Expire year"
                type="number"
                className="form-input"
                aria-labelledby="expire-date"
                placeholder="YY"
                value={formValues.year}
                onChange={(event) => {
                  getValidationErrors(event.target.validity, "year");
                  setFormValues({
                    ...formValues,
                    year: event.target.value,
                  });
                }}
                onBlur={(event) =>
                  getValidationErrors(event.target.validity, "year")
                }
                min={actualYear}
                max="99"
                required
              />
            </div>
          </div>
          <ErrorMessage
            message={setErrorMessages(shouldSetDateErrors(formErrors))}
          />
        </div>
        <div className="flex flex-column">
          <label className="form-label" htmlFor="cvc">
            CVC
          </label>
          <div
            className={`input-container ${getInvalidFieldStyle(
              formErrors,
              "cvc"
            )}`}
          >
            <Input
              id="cvc"
              title="CVC"
              type="number"
              className="form-input"
              placeholder="e.g 123"
              value={formValues.cvc}
              onChange={(event) => {
                getValidationErrors(event.target.validity, "cvc");
                setFormValues({ ...formValues, cvc: event.target.value });
              }}
              onBlur={(event) => {
                getValidationErrors(event.target.validity, "cvc");
              }}
              required
              min="001"
              max="999"
            />
          </div>
          <ErrorMessage message={setErrorMessages(formErrors.cvc)} />
        </div>
      </div>
      <div className="flex justify-content-center">
        <Button
          id="submit-button"
          name="Confirm"
          type="submit"
          className="submit-button"
          disabled={shouldDisableSubmit(formErrors)}
          onClick={() => {
            setIsFormCompleted(true);
          }}
          label="Confirm"
        />
      </div>
    </form>
  );
}
