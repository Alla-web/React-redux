import Button from "components/Button/Button"
import {
  AdviceRandomizerContainer,
  ButtonContainer,
  ResultsContainer,
} from "./styles"
import { useAppSelector, useAppDispatch } from "store/hooks"
import {
  randomAdvicesSelectors,
  randomAdvicesActions,
} from "store/redux/adviceRandomizer/adviceRandomizerSlice"
import { v4 } from "uuid"

function AdviceRandomizer() {
  //получаем данные useAppSelector
  //деструктурируем
  const { advices, error, status } = useAppSelector(
    randomAdvicesSelectors.adviceData,
  )

  //мапим массив советов
  const advice = advices.map(advice => {
    return <ResultsContainer key={v4()}>{advice}</ResultsContainer>
  })

  const dispatch = useAppDispatch();
  //отправляем данные c использованием useAppDispatch

  const getAdvice = ()=>{
    dispatch(randomAdvicesActions.getAdvice())
  }

  return (
    <AdviceRandomizerContainer>
      <ButtonContainer>
        <Button name="Get Advice" onClick={getAdvice}/>
      </ButtonContainer>
      {advice}
      <ButtonContainer>
        <Button name="Delete All Advices" isRed />
      </ButtonContainer>
    </AdviceRandomizerContainer>
  )
}

export default AdviceRandomizer
