import Button from "components/Button/Button"
import { AdviceRandomizerContainer, ButtonContainer, ResultsContainer } from "./styles"

function AdviceRandomizer() {
  return (
    <AdviceRandomizerContainer>
      <ButtonContainer>
        <Button name="Get Advice" />
      </ButtonContainer>
      <ResultsContainer>{}</ResultsContainer>
      <ButtonContainer>
        <Button name="Delete All Advices" isRed/>
      </ButtonContainer>
    </AdviceRandomizerContainer>
  )
}

export default AdviceRandomizer
