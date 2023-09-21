const initialState = {
  cartItems: [],
};
export default function cartItemsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.data],
      };
    case "REMOVE_FROM_CART":
      return {
        cartItems: [...state.cartItems.filter((item) => item.title != action.data)],
      };
    default:
      return state;
  }
}
