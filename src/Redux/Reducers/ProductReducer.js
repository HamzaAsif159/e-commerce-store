import { ActionTypes } from "../Constants/ActionTypes"

const initialState = {
  products: [],
}
export function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

export function SelectedProductReducer(state = {}, { type, payload }) {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }
    case ActionTypes.REMOVE_PRODUCT:
      return {}
    default:
      return state
  }
}

const initialCartState = {
  cartItems: [],
}

export function CartItemReducer(state = initialCartState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] }
    default:
      return state
  }
}
