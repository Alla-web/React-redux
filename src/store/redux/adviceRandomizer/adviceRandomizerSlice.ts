import { createAppSlice } from "store/createAppSlice"
import { AdviceRandomizerSliceState } from "./types"
import axios from "axios"
import { PayloadAction } from "@reduxjs/toolkit"

const initialAdviceRandomizerState: AdviceRandomizerSliceState = {
  advices: [],
  error: undefined,
  //контроль изменения индикаторa загрузки, чтобы он включался/выключался
  status: "default",
}

export const adviceRandomizerSlice = createAppSlice({
  name: "ADVICE_RANDOMIZER",
  initialState: initialAdviceRandomizerState,
  reducers: create => ({
    getAdvice: create.asyncThunk(
      async (arg, thunkApi) => {
        try {
          const result = await axios.get("https://api.adviceslip.com/advice")
          //смотрим
          return result.data.slip.advice
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        //5. Обрабатываем действия, которые должны происходить, когда произошла отправка запроса,
        // но результат ещё ждем
        pending: (state: AdviceRandomizerSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        // 6. Обработка успешного результата
        fulfilled: (state: AdviceRandomizerSliceState, action: any) => {
          state.advices = [...state.advices, action.payload]
          state.status = "success"
        },
        // 7. Обработка ошибки
        rejected: (state: AdviceRandomizerSliceState, action: any) => {
          state.error = action.payload.message
          state.status = "error"
        },
      },
    ),
    deleteAdvices: create.reducer(() => initialAdviceRandomizerState),
  }),
  selectors: {
    adviceData: (state: AdviceRandomizerSliceState) => state,
  },
})

export const randomAdvicesActions = adviceRandomizerSlice.actions
export const randomAdvicesSelectors = adviceRandomizerSlice.selectors
