import { combineReducers } from "redux"
import {
  ProductReducer,
  SelectedProductReducer,
  CartItemReducer,
} from "./ProductReducer"

const reducers = combineReducers({
  allproducts: ProductReducer,
  product: SelectedProductReducer,
  allcartItems: CartItemReducer,
})

export default reducers
