import { combineReducers } from "redux"
import { ProductReducer } from "./ProductReducer"

const reducers = combineReducers({
  allproducts: ProductReducer,
})

export default reducers
