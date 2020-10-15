import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const existItem = state.cartItems.find(
        (x) => x.product === action.payload.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? action.payload : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case CART_REMOVE_ITEM:
      return {};

    default:
      return state;
  }
};
