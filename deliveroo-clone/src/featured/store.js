import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import restaurantReducer from "./restaurantSlice";
export default configureStore({
  reducer: { basket: basketReducer, restaurant: restaurantReducer },
});
