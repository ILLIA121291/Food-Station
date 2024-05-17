import { configureStore } from "@reduxjs/toolkit";


const stateStore = configureStore({
  reducer: {
    // counter: counterReducer,
  }
})

export default stateStore
