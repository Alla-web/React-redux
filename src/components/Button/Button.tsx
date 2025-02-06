//сборщик упрощает импорт стилей только в компонент
import { ButtonProps } from "./types";
import { MainButton } from "./styles";

//создаём интерфейс и переносим его в отдельный файл
// interface ButtonProps {
//   name?: string;
//   type: "submit" | "button" | "reset";
//   onClick: () => void;
// }

function Button({ name = "SEND", type = "button", onClick, disabled = false, isRed = false }: ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick} disabled={disabled} $isRed={isRed}>
      {name}
    </MainButton>
  );
}

export default Button;

