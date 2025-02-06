import styled from "@emotion/styled";

interface ButtonStyledProps {
  disabled: boolean;
  $isRed?: boolean
}

export const MainButton = styled.button<ButtonStyledProps>`
  width: 100%;
  min-height: 70px;
  padding: 20px 54px;
  background-color: ${({disabled, $isRed})=>disabled ? 'grey': $isRed ? 'red' : '#1f27f5'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  cursor: ${({disabled})=>disabled? "not-allowed" : "pointer"};
`;
