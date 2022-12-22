import { ActionTypes } from "../Constants/ActionTypes"

export function SetProducts(products) {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export function SelectedProducts(product) {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}
export function RemoveProduct() {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
  }
}

export function AddToCart(product) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  }
}

export function RemoveFromCart(product) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: product,
  }
}
