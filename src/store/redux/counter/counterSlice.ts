// 1. Импортируем функцию, с помощью которой мы создаём slice
import { createAppSlice } from "../../createAppSlice"
//импортируем типизацию каунтера
import { CounterStateSlice } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

// 4.1 Cоздаём объект с первоначальным состояние, который потом передаём в initialState
const counterInitialState: CounterStateSlice = {
  count: 0,
}

// 2. Создаём слайс для каунтера с помощью вызова функции createAppSlice
// в которую передаём ОБЪЕКТ настройки
// createAppSlice() возвращает в counterSlice сформированный объект
export const counterSlice = createAppSlice({
  // 3. Создаём имя, под которым будет храниться объект со значение каунтера (state)
  // стейт для отдельных частей данных, всегда представляет собой объект
  //name - 1-е для отследивания в тулс, 2-е -
  name: "COUNTER",
  // 4. Задаём объект, в котором будет храниться начальное состояние (см. стр. 7)
  initialState: counterInitialState,
  // 5. Создаём объект, внутри которого будут храниться редьюсеры (функции, которые отвечают
  // за изменение состояния)
  // значением reducers является функция колл бэк
  // аргументом у функции колл бэк является объект create
  // объект create приходит из коробки/библиотеки редакс тул кит

  //в объекте create есть ключ reducer, по которому мы изменяем состояние
  //reducer - функция и мы передаём в неё как аргумент функцию кол бэк,
  // которая изменяет состояние. У этой функции есть 2 аргумента: state & action,
  // они не обязательные оба
  // state - является точной копией актуального стейта из редакс на момент исп-я этой функции, так званый превстейт
  // action -  является объектом, в котором лежат 2 пары ключ-значение: payload и type
  //1.payload - по умолчанию - undefined, но мы можем передать через него данные в reducer
  //2.type - строка, благодаря которой мы можем вызывать конкретный reducer

  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => {
      state.count = state.count + 1
    }),
    minus: create.reducer(
      (state: CounterStateSlice, action: PayloadAction<number | undefined>) => {
        // state.count = state.count - 1
        if (action.payload) {
          state.count = state.count - action.payload
        } else {
          state.count = state.count - 1
        }
      },
    ),
  }),
  //  6. Создаём селекторы, которые позволяют забрать данные из стейта в компонент
  selectors: {
    counterValue: (state: CounterStateSlice) => state.count,
  },
})

console.log(counterSlice)

//7. Экспорт экшенов и селекторов для возможности их использования в компонентах
// counterActions - это объект в котором лежать экшены
// action - объект, который при доставке в stire даёт вохможность запускать конкретный редьюсер
// counterSelectors - объект, в котором лежат селекторы
// selector - способ поления конкретных данных из редакс стейта
export const counterActions = counterSlice.actions
export const counterSelectors = counterSlice.selectors
