import { configureStore } from '@reduxjs/toolkit';
import languagePanelReducer from '../../14_General-Pages-Components/14.1_LanguagePanel/sliceLanguagePanel';
import currencyPanelReduser from '../../14_General-Pages-Components/14.2_CurrencyPanel/sliceCurrencyPanel';

export interface IStateStore {
  languagePanel: {
    languageApp: string;
  };
  currencyPanel: {
    currencyApp: string;
  };
}

const stateStore = configureStore({
  reducer: {
    languagePanel: languagePanelReducer,
    currencyPanel: currencyPanelReduser,
  },
});

export default stateStore;
