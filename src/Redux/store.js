import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./Slice";
import productsReducer from "../Redux/ProductsSlice";
import cartReducer from "./CartSlice";
import searchReducer from "./SearchSlice";
import authReducer from "./authSlice";
import registerReducer from "./RegisterSlice";
const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    products: productsReducer,
    cart: cartReducer,
    search: searchReducer,
    auth: authReducer,
    register: registerReducer,
  },
});

export default store;
