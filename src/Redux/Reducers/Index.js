import { combineReducers } from "redux"
import { ProductReducer, SelectedProductReducer } from "./ProductReducer"

const reducers = combineReducers({
  allproducts: ProductReducer,
  product: SelectedProductReducer,
})

export default reducers
