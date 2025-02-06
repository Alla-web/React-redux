import Button from "../Button/Button";
import {
  FeedbackContainerStyled,
  CounterWrapperStyled,
  ContainerStyled,
  Hw4ButtonCounter,
  ResetButtonContainer,
  ResultContainer,
} from "./styles";

import { useState } from "react";

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  console.log("rerendering");

  const onLikeClick = (): void => {
    setLikes((prevState) => prevState + 1);
  };

  const onDislikeClick = (): void => {
    setDislikes((prevState) => prevState + 1);
  };

  const onResetClick = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <FeedbackContainerStyled>
      <CounterWrapperStyled>
        <ContainerStyled>
          <ResultContainer>{likes}</ResultContainer>
          <Hw4ButtonCounter>
            <Button name="Like" type="button" onClick={onLikeClick} />
          </Hw4ButtonCounter>
        </ContainerStyled>
        <ContainerStyled>
          <ResultContainer>{dislikes}</ResultContainer>
          <Hw4ButtonCounter>
            <Button name="Dislike" type="button" onClick={onDislikeClick} />
          </Hw4ButtonCounter>
        </ContainerStyled>
      </CounterWrapperStyled>
      <Button name="RESET RESULTS" type="button" onClick={onResetClick} />
    </FeedbackContainerStyled>
  );
}

export default Feedback;
