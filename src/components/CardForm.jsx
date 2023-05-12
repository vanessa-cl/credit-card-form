import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import "./styles/CardForm.css";

export default function CardForm({ formValues, setFormValues }) {
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
          value={formValues.cardName}
          onChange={(event) =>
            setFormValues({ ...formValues, cardName: event.target.value })
          }
          autoFocus
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
          value={formValues.cardNumber}
          onChange={(event) =>
            setFormValues({ ...formValues, cardNumber: event.target.value })
          }
          required
        />
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
              inputClassName="date-input"
              aria-labelledby="expire-date"
              placeholder="MM"
              value={formValues.expireDate.month}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  expireDate: { ...formValues.expireDate, month: event.value },
                })
              }
              required
            />
            <InputNumber
              id="expire-year"
              title="Expire year"
              inputClassName="date-input"
              aria-labelledby="expire-date"
              placeholder="YY"
              value={formValues.expireDate.year}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  expireDate: { ...formValues.expireDate, year: event.value },
                })
              }
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
            value={formValues.cvc}
            onChange={(event) =>
              setFormValues({ ...formValues, cvc: event.target.value })
            }
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
