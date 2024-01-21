import "./styles/ErrorMessage.css";

export default function ErrorMessage({ id, message }) {
  return (
    <p id={id} role="alert" aria-live="polite" className="message">
      {message}
    </p>
  );
}
