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
