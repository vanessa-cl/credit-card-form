export default function useForm() {
  const setErrorMessages = (error) => {
    const message = {
      valueMissing: "Cant'be blank",
      invalid: "Wrong format, numbers only",
    };
    return message[error];
  };

  return { setErrorMessages };
}
