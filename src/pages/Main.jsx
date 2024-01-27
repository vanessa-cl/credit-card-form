import { useState } from "react";
import CardDetails from "../components/CardDetails";
import CardForm from "../components/CardForm";
import CompletedSubmit from "../components/CompletedSubmit";
import { INITIAL_FORM_STATE, INITIAL_DETAILS_STATE } from "../consts/formState";

export default function Main() {
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  return (
    <main>
      <CardDetails
        detailsValues={INITIAL_DETAILS_STATE}
        formValues={formValues}
      />
      {isFormCompleted ? (
        <CompletedSubmit
          setIsFormCompleted={setIsFormCompleted}
          setFormValues={setFormValues}
        />
      ) : (
        <CardForm
          formValues={formValues}
          setFormValues={setFormValues}
          setIsFormCompleted={setIsFormCompleted}
        />
      )}
    </main>
  );
}
