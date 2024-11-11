import { configureStore } from '@reduxjs/toolkit';
import currencyPanelReduser, { ICurrencyPanel } from '../../14_General-Pages-Components/14.2_CurrencyPanel/sliceCurrencyPanel';
import modalWindowReduser, { IModalWindow } from '../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';
import cartReduser, { ICart } from '../../../pages/2_Cart-Page/2.1_CartPage/sliceCart';
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
