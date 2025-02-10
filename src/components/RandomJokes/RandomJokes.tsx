import Button from "components/Button/Button"
import {
  JokeCard,
  JokesContainer,
  RandomJokesWrapper,
  JokeWrapper,
  JokeText,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokesActions,
  randomJokesSelectors,
} from "store/redux/randonjokes/randonjokesSlice"
import { v4 } from "uuid"
import Spinner from "components/Spinner/Spinner"

function RandomJokes() {
  //получаем данные useAppSelector
  //деструктурируем
  const { data, error, status } = useAppSelector(randomJokesSelectors.jokeData)

  //мапим наш массив
  const joke = data.map(joke => {
    return <JokeText key={v4()}>{joke}</JokeText>
  })

  const dispatch = useAppDispatch()

  //отправляем данные useAppDispatch
  const getJoke = () => {
    dispatch(randomJokesActions.getJoke())
  }

  return (
    <RandomJokesWrapper>
      <JokeCard>
        <Button name="GET JOKES" onClick={getJoke} />
        {status === "loading" && <Spinner />}
        <JokesContainer>{joke}</JokesContainer>
        <Button name="DELETE JOKES" onClick={() => {}} />
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes
function dispathc() {
  throw new Error("Function not implemented.")
}
