export default function useForm() {
  const setErrorMessages = (error) => {
    const message = {
      valueMissing: "This field is required",
      patternMismatch: "The format of this field is invalid",
      typeMismatch: "Enter a valid value for this field",
      tooShort: "This field requires more characters",
      tooLong: "This field has too many characters",
      rangeOverflow: "This value is above the allowed maximum",
      rangeUnderflow: "This value is below the allowed minimum",
      badInput: "Please enter a valid value",
      stepMismatch: "Please adjust the value",
    };
    return message[error];
  };

  const getInvalidFieldStyle = (formErrors, field) => {
    return formErrors[field] !== "valid" && formErrors[field] !== ""
      ? "invalid-field"
      : "";
  };

  const formatCardNumber = (value) => {
    const checkForSpaces = /\s/g;
    const checkFor16numbers = /^\d{16}$/;

    if (checkFor16numbers.test(value) && !checkForSpaces.test(value)) {
      const filterSpace = value.match(/.{1,4}/g);
      return filterSpace.join(" ");
    }

    return value.replace(/ /g, "");
  };

  const checkMinCardNumberLength = (value) => {
    return /^\d{1,15}$/.test(value);
  };

  return {
    setErrorMessages,
    formatCardNumber,
    checkMinCardNumberLength,
    getInvalidFieldStyle,
  };
}
