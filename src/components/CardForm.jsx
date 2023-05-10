import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import "./styles/CardForm.css";

export default function CardForm() {
  return (
    <form>
      <div className="flex flex-column">
        <label className="form-label" htmlFor="cardholder-name">
          CARDHOLDER NAME
        </label>
        <InputText
          id="cardholder-name"
          title="Cardholder name"
          className="larger-input"
          placeholder="e.g. Jane Appleseed"
          required
        />
      </div>
      <div className="flex flex-column">
        <label className="form-label" htmlFor="card-number">
          CARD NUMBER
        </label>
        <InputText
          id="card-number"
          title="Card number"
          className="larger-input"
          placeholder="e.g 1234 5678 9123 0000"
          required
        />
      </div>
      <div className="flex justify-content-between">
        <div>
          <label className="inline-flex form-label" id="expire-date">
            EXP. DATE(MM/YY)
          </label>
          <div className="flex justify-content-between gap-3">
            <InputNumber
              id="expire-month"
              title="Expire month"
              inputClassName="date-input"
              aria-labelledby="expire-date"
              placeholder="MM"
              required
            />
            <InputNumber
              id="expire-year"
              title="Expire year"
              inputClassName="date-input"
              aria-labelledby="expire-date"
              placeholder="YY"
              required
            />
          </div>
        </div>
        <div className="flex flex-column">
          <label className="form-label" htmlFor="cvc">
            CVC
          </label>
          <InputNumber
            id="cvc"
            title="CVC"
            inputClassName="small-input"
            placeholder="e.g 123"
            required
          />
        </div>
      </div>
      <div className="flex justify-content-center">
        <Button
          id="submit-button"
          type="submit"
          className=" submit-button"
          label="Confirm"
        />
      </div>
    </form>
  );
}
