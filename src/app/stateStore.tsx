import { configureStore } from '@reduxjs/toolkit';
import currencyPanelReduser, { ICurrencyPanel } from '../components/panels/CurrencyPanel/sliceCurrencyPanel';
import modalWindowReduser, { IModalWindow } from '../components/modal_window/sliceModalWindow';
import cartReduser, { ICart } from '../cart/0_CartPage/sliceCart';
import appReduser, { IAppSlice } from './sliceApp';

// Interfase State Store ---------------------
export interface IStateStore {
  app: IAppSlice;
  currencyPanel: ICurrencyPanel;
  modalWindow: IModalWindow;
  cart: ICart;
}

// Configure Store ---------------------------
const stateStore = configureStore({
  reducer: {
    app: appReduser,
    currencyPanel: currencyPanelReduser,
    modalWindow: modalWindowReduser,
    cart: cartReduser,
  },
});

export default stateStore;
