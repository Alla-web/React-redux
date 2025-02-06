import { InputProps } from "./types";
import {
  ErrorMessage,
  InputContainerStyled,
  InputElementStyled,
  Label,
} from "./styles";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  value,
  onChange,
  errorMessage
}: InputProps) {
  return (
    <InputContainerStyled>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElementStyled
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
      />
    <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainerStyled>
  );
}

export default Input;
