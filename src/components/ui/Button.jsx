import "./ui.css";

export default function Button(props) {
  return (
    <button
      id={props.id}
      name={props.name}
      type={props.type}
      className={props.className}
      disabled={props.disabled}
      onClick={(event) => {
        event.preventDefault();
        props.onClick();
      }}
    >
      {props.label}
    </button>
  );
}
