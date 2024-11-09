import { createSlice } from '@reduxjs/toolkit';
import IProduct from '../../../Interfaces/IProduct';
import IExtraIngredientObjectFormDB from '../../../Interfaces/IExtraIngredientObjectFromDB';

// Interface --------------------

export interface IAppSlice {
  products: IProduct[];
  allExtraIngredients: IExtraIngredientObjectFormDB [];
}

// Initial State ---------------

const initialState: IAppSlice = { products: [], allExtraIngredients: [] };

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
      state.allExtraIngredients = actions.payload;
    },
  },
});

export const { addAllProductsToState, addAllExtraIngredientsToSate } = appSlice.actions;

export default appSlice.reducer;
