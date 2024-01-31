import { configureStore } from "@reduxjs/toolkit";
import flightResultsReducer from "./reducers/flightResultsSlice";

const store = configureStore({
  reducer: {
    flightResults: flightResultsReducer,
  },
});

export default store;
