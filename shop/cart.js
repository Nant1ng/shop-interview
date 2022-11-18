import { createSlice } from "@reduxjs/toolkit";
const initialCartSlice = {
  counter: 0,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartSlice,
  reducers: {
    addProduct(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity += action.payload.quantity
          ? +action.payload.quantity
          : 1;
        product.totalPrice = +(product.price * product.quantity).toFixed(2);
      } else {
        const quantity = action.payload.quantity ? +action.payload.quantity : 1;
        const price = +action.payload.price;
        state.products.push({
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          quantity: action.payload.quantity ? +action.payload.quantity : 1,
          price: +action.payload.price,
          totalPrice: +(quantity * price).toFixed(2),
        });
      }

      state.counter += action.payload.quantity ? +action.payload.quantity : 1;
    },

    removeProduct(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product.quantity > 1) {
        product.quantity--;
        product.totalPrice = +(product.totalPrice - product.price).toFixed(2);
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }

      state.counter -= 1;
    },

    deleteProduct(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      state.counter -= product.quantity;
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },

    clearCart(state) {
      state.counter = 0;
      state.products = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
