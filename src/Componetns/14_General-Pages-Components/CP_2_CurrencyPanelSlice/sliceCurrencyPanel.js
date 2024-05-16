import { createSlice } from '@reduxjs/toolkit';

import useSetInitialCurrencyApp from './useSetInitialCurrencyApp';

let initialState = useSetInitialCurrencyApp();

export const currencyPanelSlice = createSlice({
  name: 'currencyPanel',
  initialState,
  reducers: {
    onChangeCurrency: (state, actions) => {
      switch (actions.payload) {
        case 'USD':
          state.currencyApp = 'USD';
          localStorage.setItem('currency', 'USD');
          break;
        case 'EUR':
          state.currencyApp = 'EUR';
          localStorage.setItem('currency', 'EUR');
          break;
        case 'JPY':
          state.currencyApp = 'JPY';
          localStorage.setItem('currency', 'JPY');
          break;
      }
    },
  },
});

export const { onChangeCurrency } = currencyPanelSlice.actions;

export default currencyPanelSlice.reducer;
