import { createSlice } from '@reduxjs/toolkit';

import useSetInitialLanguageApp from './useSetInitialLanguageApp';

let initialState = useSetInitialLanguageApp();

export const languagePanelSlice = createSlice({
  name: 'languagePanel',
  initialState,
  reducers: {
    onChangeLanguage: (state, actions) => {
      switch (actions.payload) {
        case 'Russian':
          state.languageApp = 'Russian';
          localStorage.setItem('language', 'Russian');
          break;
        case 'Japan':
          state.languageApp = 'Japan';
          localStorage.setItem('language', 'Japan');
          break;
        case 'English':
          state.languageApp = 'English';
          localStorage.setItem('language', 'English');
          break;
      }
    },
  },
});

export const { onChangeLanguage } = languagePanelSlice.actions;

export default languagePanelSlice.reducer;
