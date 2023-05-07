import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function CardForm() {
  return (
    <form>
      <div>
        <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
        <InputText
          id="cardholder-name"
          title="Cardholder name"
          placeholder="e.g. Jane Appleseed"
          required
        />
      </div>
      <div>
        <label htmlFor="card-number"></label>
        <InputText
          id="card-number"
          title="Card number"
          placeholder="e.g 1234 5678 9123 0000"
          required
        />
      </div>
      <div>
        <div>
          <label id="expire-date">EXP.DATE(MM/YY)</label>
          <InputNumber
            id="expire-month"
            title="Expire month"
            aria-labelledby="expire-date"
            placeholder="MM"
            required
          />
          <InputNumber
            id="expire-year"
            title="Expire year"
            aria-labelledby="expire-date"
            placeholder="YY"
            required
          />
        </div>
        <div>
          <label htmlFor="cvc">CVC</label>
          <InputNumber id="cvc" title="CVC" placeholder="e.g 123" required />
        </div>
      </div>
      <div>
        <Button label="Confirm"/>
      </div>
    </form>
  );
}
