import iconComplete from "../assets/images/icon-complete.svg";
import { INITIAL_FORM_STATE } from "../consts/formState";
import "./styles/CompletedSubmit.css";
import Button from "./ui/Button";

export default function CompletedSubmit({ setIsFormCompleted, setFormValues }) {
  return (
    <section className="confirm-section" data-testid="confirm-section">
      <img src={iconComplete} alt="checkmark" />
      <div className="confirm-message-wrapper">
        <h1>Thank you!</h1>
        <p className="confirm-message">We&apos;ve added your card details</p>
      </div>
      <Button
        id="continue-button"
        name="Continue"
        className="submit-button"
        onClick={() => {
          setFormValues(INITIAL_FORM_STATE);
          setIsFormCompleted(false);
        }}
        label="Continue"
      />
    </section>
  );
}
