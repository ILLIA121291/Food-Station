import { configureStore } from "@reduxjs/toolkit";
import languagePanelReducer from '../../14_General-Pages-Components/14.1_LanguagePanel/sliceLanguagePanel'

export interface IstateStore {
  languagePanel: {
    languageApp: string;
  }
}



const stateStore = configureStore({
  reducer: {
    languagePanel: languagePanelReducer,
  }
})

export default stateStore
