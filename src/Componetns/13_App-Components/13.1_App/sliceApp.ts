import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';

// Interface --------------------

export interface IAppSlice {
  products: IProduct[];
  extraIngredients: any[]
}

// Initial State ---------------

const initialState: IAppSlice = { products: [], extraIngredients: []};

// App Slice ------------------

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Сохранение всех продуктво полученых из БД в глобальном состоянии;
    addAllProductsToState(state, actions) {
      state.products = actions.payload;
    },

    // Сохраненик всех дополнительных ингридиентов полученных из БД в глобальное состояние; 
    addAllExtraIngredientsToSate(state, actions) {
      state.extraIngredients = actions.payload
    }
  },
});

export const { addAllProductsToState, addAllExtraIngredientsToSate } = appSlice.actions;

export default appSlice.reducer;
