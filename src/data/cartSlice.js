import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // name
  name: "cart",
  // startting state of the cart slice
  initialState: {
    cartProductIds: [],
  },
  // this will contain the actions for the cart slice
  // expects the state and actions
  reducers: {
    addToCart: (state, action) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds];
    },
    removeFromCart: (state, action) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(indexOfId, 1);
    },
    clearAllItems: (state) => {
      state.cartProductIds = [];
    },
  },
});

// can also de structure the export
// const { actions: cartActions, reducer: cartReducer } = cartSlice;

export default cartSlice;
