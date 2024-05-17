import { configureStore } from '@reduxjs/toolkit';
import languagePanelReducer, { ILangugePanel } from '../../14_General-Pages-Components/14.1_LanguagePanel/sliceLanguagePanel';
import currencyPanelReduser, { ICurrencyPanel } from '../../14_General-Pages-Components/14.2_CurrencyPanel/sliceCurrencyPanel';
import modalWindowReduser, { IModalWindow } from '../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';

export interface IStateStore {
  languagePanel: ILangugePanel;
  currencyPanel: ICurrencyPanel;
  modalWindow: IModalWindow;
}

const stateStore = configureStore({
  reducer: {
    languagePanel: languagePanelReducer,
    currencyPanel: currencyPanelReduser,
    modalWindow: modalWindowReduser,
  },
});

export default stateStore;
