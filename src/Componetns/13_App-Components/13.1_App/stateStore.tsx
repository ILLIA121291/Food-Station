import { configureStore } from '@reduxjs/toolkit';
import currencyPanelReduser, { ICurrencyPanel } from '../../14_General-Pages-Components/14.2_CurrencyPanel/sliceCurrencyPanel';
import modalWindowReduser, { IModalWindow } from '../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';
import cartReduser, {ICart} from '../../15_Pages/15.2_Cart-Page/15.2.1_CartPage/sliceCart'


export interface IStateStore {
  currencyPanel: ICurrencyPanel;
  modalWindow: IModalWindow;
  cart: ICart;
}

const stateStore = configureStore({
  reducer: {
    currencyPanel: currencyPanelReduser,
    modalWindow: modalWindowReduser,
    cart: cartReduser,
  },
});

export default stateStore;
