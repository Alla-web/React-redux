import { createAppSlice } from "store/createAppSlice"
import { RandomJokesSliceState } from "./types"
import { create } from "domain"
import axios from "axios"

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  error: undefined,
  //контроль изменения спиннера, чтобы он включался/выключался
  status: "default",
}

export const randomJokesSlice = createAppSlice({
  name: "RANDOM_JOKES",
  initialState: randomJokesInitialState,
  // 1. middleware мы создаём в объекте reducers вместе с обычными редьюсерами
  // но, с использованием метода asyncThunk
  reducers: create => ({
    // 2. Создаём middleware с помощью метода asyncThunk из объекта create
    // метод asyncThunk принимает 2 аргумента:
    //  1) асинхронная функциядля отправки запроса
    //  2) сам объект с 3-мя свойствами, которые содержат функции, обрабатывающие результат
    //   выполнения асинхронной функции
    getJoke: create.asyncThunk(
      //асинхронная функция принимает 2 аргумента:
      // 1) называют arg - позволяет передавать данные из компонента в асинхронную
      //    функцию, например, для отправки на сервер при работе с методом post
      // 2) называют thunkApi - (объект), который содержит вспомогательные функции для
      //    работы с передачей полученных данных из асинхронной функции
      //    в редьюсеры (fulfilled, rejected)
      async (arg, thunkApi) => {
        try {
          //можно ссылку для запроса не создавать отдельно, а сразу отправлять в гет
          const result = await axios.get(
            "https://official-joke-api.appspot.com/random_joke",
          )
          // 3. В случае успешного завершения запроса, возвращаются полученняе данные для того, чтобы
          // получить их в обработчике fulfilled (т.к. только редьюсеры имеют право изменять state)
          return result.data
        } catch (error) {
          // 4. В случае ошибка её нужно отправлять в обработчик rejected с помощью метода rejectWithValue()
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        //5. Обрабатываем действия, которые должны происходить, когда произошла отправка запроса,
        // но результат мы ещё ждем
        pending: (state: RandomJokesSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        // 6. Обработка успешного результата
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.data = [
            ...state.data,
            `${action.payload.setup} - ${action.payload.punchline}`,
          ]
          state.status = "success"
        },
        // 7. Обработка ошибки
        rejected: (state: RandomJokesSliceState, action: any) => {
          state.error = action.payload.message
          state.status = "error"
        },
      },
    ),
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state,
  },
})

export const randomJokesActions = randomJokesSlice.actions
export const randomJokesSelectors = randomJokesSlice.selectors
