import { useState } from "react";
import CardDetails from "../components/CardDetails";
import CardForm from "../components/CardForm";

const INITIAL_FORM_STATE = {
  cardName: "",
  cardNumber: "",
  month: "",
  year: "",
  cvc: "",
};

const INITIAL_DETAILS_STATE = {
  cardName: "Jane Appleseed",
  cardNumber: "0000 0000 0000 0000",
  month: "00",
  year: "00",
  cvc: "000",
};

export default function Main() {
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);

  return (
    <main className="flex align-items-center justify-content-evenly w-full">
      <CardDetails
        detailsValues={INITIAL_DETAILS_STATE}
        formValues={formValues}
      />
      <CardForm formValues={formValues} setFormValues={setFormValues} />
    </main>
  );
}
