import "./ui.css";

export default function Input(props) {
  return (
    <input
      id={props.id}
      title={props.title}
      type={props.type}
      aria-describedby={props["aria-describedby"]}
      aria-labelledby={props["aria-labelledby"]}
      className={props.className}
      placeholder={props.placeholder}
      minLength={props.minLength}
      maxLength={props.maxLength}
      min={props.min}
      max={props.max}
      autoFocus={props.autoFocus}
      required={props.required}
      pattern={props.pattern}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
}
