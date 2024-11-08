import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts";

// Interface --------------------

export interface IAppSlice {
  products: IProduct[]
}

// Initial State ---------------

const initialState: IAppSlice = {products: []}

// App Slice ------------------

export const appSlice = createSlice({
  name: 'app',
  initialState, 
  reducers: {
    getAllProducts(state, actions) {
      state.products = actions.payload
      console.log(actions.payload.length)
    }
  }
})

export const {getAllProducts} = appSlice.actions;

export default appSlice.reducer;