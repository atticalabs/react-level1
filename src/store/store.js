import { configureStore } from '@reduxjs/toolkit'
import mySlice from "./slice"

const store = configureStore({
  reducer: {
    allMyLists: mySlice.reducer
  },
});
export default store;