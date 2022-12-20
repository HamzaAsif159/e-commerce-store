import { ActionTypes } from "../Constants/ActionTypes"

const initialState = {
  products: [
    {
      id: 1,
      name: "Hamza",
      category: "blah",
    },
    {
      id: 3,
      name: "Hamza",
      category: "blah",
    },
  ],
}
export function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state
    default:
      return state
  }
}
