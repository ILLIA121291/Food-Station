import { createSlice } from '@reduxjs/toolkit';
import IProduct from '../../../Interfaces/IProduct';
import IAllAppExtraIngredients from '../../../Interfaces/IAllAppExtraIngredients';

// Interface --------------------

export interface IAppSlice {
  allAppProducts: IProduct[];
  allAppExtraIngredients: IAllAppExtraIngredients [];
}

// Initial State ---------------

const initialState: IAppSlice = { allAppProducts: [], allAppExtraIngredients: [] };

// App Slice ------------------

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Сохранение всех продуктво полученых из БД в глобальном состоянии;
    addAllAppProductsToState(state, actions) {
      state.allAppProducts = actions.payload;
    },

    // Сохраненик всех дополнительных ингридиентов полученных из БД в глобальное состояние;
    addAllAppExtraIngredientsToSate(state, actions) {
      state.allAppExtraIngredients = actions.payload;
    },
  },
});

export const { addAllAppProductsToState, addAllAppExtraIngredientsToSate } = appSlice.actions;

export default appSlice.reducer;
