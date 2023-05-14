import "./styles/ErrorMessage.css";

export default function ErrorMessage({ message }) {
  return (
    <div>
      {/* {console.log(message)} */}
      <p className="message">{message}</p>
    </div>
  );
}
