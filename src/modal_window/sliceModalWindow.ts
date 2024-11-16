import { createSlice } from '@reduxjs/toolkit';

export interface IModalWindow {
  displayModal: boolean;
  component: string;
  componentType: string;
  closeOnOverlay: boolean;
  closeOnEscapeBtn: boolean;
}

const initialState: IModalWindow = {
  displayModal: false,
  component: '',
  componentType: '',
  closeOnOverlay: true,
  closeOnEscapeBtn: true,
};

export const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    onDisplayModalWindow: (state, action) => {
      const { component, componentType, closeOnOverlay, closeOnEscapeBtn } = action.payload;
      state.displayModal = true;
      state.component = component;
      state.componentType = componentType ?? state.componentType;
      state.closeOnOverlay = closeOnOverlay ?? state.closeOnOverlay;
      state.closeOnEscapeBtn = closeOnEscapeBtn ?? state.closeOnEscapeBtn;
    },
    noCloseModalWindow: state => {
      state.displayModal = false;
    },
    onCloseModalWindowClickOverlay: (state, action) => {
      const { className, closeOnOverlay } = action.payload;

      if (className == 'modal-window__overlay ' && closeOnOverlay == true) {
        state.displayModal = false;
      }
    },
    onCloseModalWindowEscape: (state, action) => {
      const { code, displayModal, closeOnEscapeBtn } = action.payload;
      if (code === 'Escape' && displayModal === true && closeOnEscapeBtn == true) {
        state.displayModal = false;
      }
    },
    resetStateModalWindow: state => {
      state.displayModal = false;
      state.component = '';
      state.componentType = '';
      state.closeOnOverlay = true;
      state.closeOnEscapeBtn = true;
    },
  },
});

export const { onDisplayModalWindow, noCloseModalWindow, onCloseModalWindowClickOverlay, onCloseModalWindowEscape, resetStateModalWindow } = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
