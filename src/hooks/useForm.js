export default function useForm() {
  const setErrorMessages = (error) => {
    const message = {
      valueMissing: "Cant'be blank",
      patternMismatch: "Wrong format, numbers only",
      tooShort: "Too short",
    };
    return message[error];
  };

  const formatCardNumber = (value, validityState) => {
    const checkForSpaces = /\s/g;

    if (validityState === "valid" && !checkForSpaces.test(value)) {
      const filterSpace = value.match(/.{1,4}/g);
      return filterSpace.join(" ");
    }

    if (checkForSpaces.test(value)) {
      return value;
    }

    return value.replace(/ /g, "");
  };

  return { setErrorMessages, formatCardNumber };
}
