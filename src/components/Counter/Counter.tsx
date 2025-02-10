import Button from "../Button/Button"
import {
  CounterContainerStyled,
  ButtonContainerStyled,
  ResultContainerStyled,
} from "./styles"

//9. Импортируем хуки для диспатча и получения данных (селекторов)
import { useAppDispatch, useAppSelector } from "store/hooks"
//10. Импортируем экшены и селекторы, которые были созданы и экспортированы  в файле counterSlice.ts
import {
  counterActions,
  counterSelectors,
} from "store/redux/counter/counterSlice"

function Counter() {
  // 11. Забираем значение каунтера из store
  const counter = useAppSelector(counterSelectors.counterValue)
  console.log(counter)

  //12. Получаем функцию dispatch, которую возвращает хук useDispatch
  const dispatch = useAppDispatch()

  const onMinus = () => {
    //13. Диспатчим экшен (передаём в вызов функции dispatch необходим идентификатор действия(action))
    dispatch(counterActions.minus())
  }

  const onPlus = () => {
    //13. Диспатчим экшен (передаём в вызов функции dispatch необходим идентификатор действия(action))
    dispatch(counterActions.plus())
  }
  
  return (
    <CounterContainerStyled>
      <ButtonContainerStyled>
        {/* action creater */}
        <Button name="-" type="button" onClick={onMinus} />
      </ButtonContainerStyled>
      {/*                   view */}
      <ResultContainerStyled>{counter}</ResultContainerStyled>
      <ButtonContainerStyled>
        {/* action creater */}
        <Button name="+" type="button" onClick={onPlus} />
      </ButtonContainerStyled>
    </CounterContainerStyled>
  )
}

export default Counter
