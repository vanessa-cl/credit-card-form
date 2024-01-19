import iconComplete from "../assets/images/icon-complete.svg";
import { INITIAL_FORM_STATE } from "../consts/formState";

export default function CompletedSubmit({ setIsFormCompleted, setFormValues }) {
  return (
    <section>
      <img src={iconComplete} alt="checkmark" />
      <h1>Thank you!</h1>
      <p>We&apos;ve added your card details</p>
      <button
        className="submit-button"
        onClick={() => {
          setFormValues(INITIAL_FORM_STATE);
          setIsFormCompleted(false);
        }}
      >
        Continue
      </button>
    </section>
  );
}
