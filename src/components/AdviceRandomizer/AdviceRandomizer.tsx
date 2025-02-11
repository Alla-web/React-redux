import Button from "components/Button/Button"
import {
  AdviceRandomizerContainer,
  ButtonContainer,
  ErrorContainer,
  ResultItem,
  ResultsContainer,
} from "./styles"
import { useAppSelector, useAppDispatch } from "store/hooks"
import {
  randomAdvicesSelectors,
  randomAdvicesActions,
} from "store/redux/adviceRandomizer/adviceRandomizerSlice"
import { v4 } from "uuid"
import Spinner from "components/Spinner/Spinner"

function AdviceRandomizer() {
  //получаем данные useAppSelector
  //деструктурируем
  const { advices, error, status } = useAppSelector(
    randomAdvicesSelectors.adviceData,
  )

  //мапим массив советов
  const advice = advices.map(advice => {
    return <ResultItem key={v4()}>{advice}</ResultItem>
  })

  const dispatch = useAppDispatch()
  //отправляем данные c использованием useAppDispatch

  const getAdvice = () => {
    dispatch(randomAdvicesActions.getAdvice())
  }

  const deleteAdvices = () => {
    dispatch(randomAdvicesActions.deleteAdvices())
  }

  return (
    <AdviceRandomizerContainer>
      <ButtonContainer>
        <Button
          name="Get Advice"
          onClick={getAdvice}
          disabled={status === "loading"}
        />
      </ButtonContainer>
      {status === "loading" && <Spinner />}
      {status === 'success' && <ResultsContainer>{advice}</ResultsContainer>}
      {error && <ErrorContainer>{error}</ErrorContainer>}
      {advices.length > 0 && (
        <ButtonContainer>
          <Button name="Delete All Advices" isRed onClick={deleteAdvices} />
        </ButtonContainer>
      )}
    </AdviceRandomizerContainer>
  )
}

export default AdviceRandomizer
