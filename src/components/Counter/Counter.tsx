import Button from "../Button/Button";
import {CounterContainerStyled, ButtonContainerStyled, ResultContainerStyled} from './styles'

import { useState } from "react";

function Counter() {
 
  const [counter, setCounter] = useState<number>(0);
  
  const onPlusClick = (): void => {    
    if (counter < 10) {
      setCounter((prevState) => prevState + 1);
    }
  };

  const onMinusClick = (): void => {
    if (counter > -10){
        setCounter((prevState) => prevState - 1);
    }    
  };

  return (
    <CounterContainerStyled>
      <ButtonContainerStyled>
        <Button name="-" type="button" onClick={onMinusClick} />
      </ButtonContainerStyled>
      <ResultContainerStyled>{counter}</ResultContainerStyled>
      <ButtonContainerStyled>
        <Button name="+" type="button" onClick={onPlusClick} />
      </ButtonContainerStyled>
    </CounterContainerStyled>
  );
}

export default Counter;
