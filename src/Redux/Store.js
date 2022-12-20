import { configureStore } from "@reduxjs/toolkit"
import reducers from "./Reducers/Index"

const store = configureStore({
  reducer: reducers,
})

export default store
