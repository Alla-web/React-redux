import Button from "../Button/Button"
import {
  FeedbackContainerStyled,
  CounterWrapperStyled,
  ContainerStyled,
  Hw4ButtonCounter,
  ResetButtonContainer,
  ResultContainer,
} from "./styles"
//9. Импортируем хуки для диспатча и получения данных (селекторов)
import { useAppDispatch, useAppSelector } from 'store/hooks'
// Импортируем экшены и селекторы, которые были созданы и экспортированы в файле feedbackSlice.ts
import {
  feedbackActions,
  feedbackSelectors,
} from "store/redux/feedBack/feedBackSlice"

function Feedback() {
  // 11. Забираем значеня из store
  // const feedbackData = useAppSelector(feedbackSelectors.feedbackData)
  // console.log(feedbackData)

  //или сразу деструктуризируем полученный стейт
  const { likes, dislikes } = useAppSelector(feedbackSelectors.feedbackData)

  //12. Отправляем данные - получаем функцию dispatch, которую возвращает хук useDispatch
  const dispatch = useAppDispatch()

  const addLike = ()=>{
    dispatch(feedbackActions.addLike())
  }

const addDislake = ()=>{
  dispatch(feedbackActions.addDislike())
}

const resetFeedbacks = ()=> {
  dispatch(feedbackActions.resetFeedbacks())
}

  return (
    <FeedbackContainerStyled>
      <CounterWrapperStyled>
        <ContainerStyled>
          <ResultContainer>{likes}</ResultContainer>
          <Hw4ButtonCounter>
            <Button name="Like" type="button" onClick={addLike} />
          </Hw4ButtonCounter>
        </ContainerStyled>
        <ContainerStyled>
          <ResultContainer>{dislikes}</ResultContainer>
          <Hw4ButtonCounter>
            <Button name="Dislike" type="button" onClick={addDislake} />
          </Hw4ButtonCounter>
        </ContainerStyled>
      </CounterWrapperStyled>
      <Button name="RESET RESULTS" type="button" onClick={resetFeedbacks} />
    </FeedbackContainerStyled>
  )
}

export default Feedback
