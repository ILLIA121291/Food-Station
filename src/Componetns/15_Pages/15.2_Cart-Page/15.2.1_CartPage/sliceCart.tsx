import { createSlice } from '@reduxjs/toolkit';
import { IOrderItem } from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';

// Interface ----------------------------------
export interface ICart {
  orderList: IOrderItem[];
}

// Local Storage and InitialState ------------------------------

let initialState: ICart = {
  orderList: [],
};

if (localStorage.getItem('orderList')) {
  initialState = {
    orderList: JSON.parse(localStorage.getItem('orderList')!),
  };
}

// Cart Slice --------------------------------------------

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToOrderList: (state, action) => {
      state.orderList = action.payload;
      localStorage.setItem('orderList', JSON.stringify(action.payload));
    },

    removeFromOrderList: (state, action) => {
      const newOrderList = state.orderList.filter(value => value.name != action.payload);

      state.orderList = newOrderList;
      localStorage.setItem('orderList', JSON.stringify(newOrderList));
    },

    updateOrderList: (state, action) => {
      state.orderList = action.payload;
      localStorage.setItem('orderList', JSON.stringify(action.payload));
    },

    clearOrderList: state => {
      state.orderList = [];
      localStorage.setItem('orderList', JSON.stringify([]));
    },
  },
});

export const { addToOrderList, removeFromOrderList, clearOrderList, updateOrderList } = cartSlice.actions;

export default cartSlice.reducer;
