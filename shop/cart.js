import { createSlice } from "@reduxjs/toolkit";
const initialCartSlice = {
  quantity: 0,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartSlice,
  reducers: {
    addItem(state, action) {
      state.products.find(
        (product) => product.product_id === action.payload.id
      );
      
        state.products.push({
          id: action.payload.id,
          name: action.payload.name,
          product_image: action.payload.image,
          quantity: action.payload.quantity,
          price: +action.payload.price,
        });
      
      state.quantity += action.payload.quantity ? +action.payload.quantity : 1;
    },

    deleteItem(state, action) {
      state.products.find(
        (product) => product.product_id === action.payload.id
      );
      state.quantity -= state.quantity;
      state.products = state.products.filter(
        (product) => product.product_id !== action.payload.id
      );
    },

    clearCart(state) {
      state.quantity = 0;
      state.products = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
