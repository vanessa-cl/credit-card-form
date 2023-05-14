export default function useForm() {
  const setErrorMessages = (error) => {
    const message = {
      valueMissing: "Cant'be blank",
      patternMismatch: "Wrong format, numbers only",
      tooShort: "Too short",
    };
    return message[error];
  };

  const formatCardNumber = (value) => {
    if (value.length === 16) {
      const filterSpace = value.match(/.{1,4}/g);
      return filterSpace.join(" ");
    }
    return value;
  };

  return { setErrorMessages, formatCardNumber };
}
