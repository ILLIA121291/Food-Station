import { configureStore } from '@reduxjs/toolkit';
import currencyPanelReduser, { ICurrencyPanel } from '../../14_General-Pages-Components/14.2_CurrencyPanel/sliceCurrencyPanel';
import modalWindowReduser, { IModalWindow } from '../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';

export interface IStateStore {
  currencyPanel: ICurrencyPanel;
  modalWindow: IModalWindow;
}

const stateStore = configureStore({
  reducer: {
    currencyPanel: currencyPanelReduser,
    modalWindow: modalWindowReduser,
  },
});

export default stateStore;
