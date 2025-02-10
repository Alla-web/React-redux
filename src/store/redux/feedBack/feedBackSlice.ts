//1. Импортируем функцию, с помощью которой мы создаём слайс
import { createAppSlice } from "store/createAppSlice"
import { FeedbackStateSlice } from "./types"
import { log } from "console"

const feedBackInitialValue: FeedbackStateSlice = {
  likes: 0,
  dislikes: 0,
}

//2. Создаём слайс для каунтера с помощью вызова функции createAppSlice
// в которую передаём ОБЪЕКТ настройки
export const feedBackSlice = createAppSlice({
  // 3. Создаём имя, под которым будет храниться объект
  name: "FEEDBACK",
  // 4. Создаём  объект, в котором будет храниться начальное состояние (см. стр. 5)
  initialState: feedBackInitialValue,
  // 5. Создаём объект, внутри которого будут храниться редьюсеры (функции, которые отвечают
  // за изменение состояния инициализированного объекта)
  reducers: create => ({    
    addLike: create.reducer((state: FeedbackStateSlice) => { state.likes = state.likes + 1 }),
    addDislike: create.reducer((state: FeedbackStateSlice) => { state.dislikes = state.dislikes + 1 }),
    resetFeedbacks: create.reducer(()=>feedBackInitialValue)
  }),
  //  6. Создаём селекторы, которые позволяют забрать данные из стейта в компонент
  selectors: {
    // likesNumber: (state: FeedBackStateSlice)=> state.likes,
    // dislikesNumber: (state: FeedBackStateSlice)=> state.dislikes
    feedbackData: (state: FeedbackStateSlice) => state
  },
})

//7. Экспорт экшенов и селекторов для возможности их использования в компонентах
export const feedbackActions = feedBackSlice.actions
export const feedbackSelectors = feedBackSlice.selectors