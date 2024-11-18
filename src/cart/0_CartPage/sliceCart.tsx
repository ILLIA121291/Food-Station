import { createSlice } from '@reduxjs/toolkit';
import IOrder from '../../interfaces/IOrder';
import IDelivery from '../../interfaces/IDelivery';

// Interface ----------------------------------
export interface ICart {
  orderList: IOrder[];
  delivery: IDelivery;
}

// Local Storage and InitialState ------------------------------

let initialState: ICart = {
  orderList: [],
  delivery: { name: '', surname: '', phone: 0, address: '' },
};

if (localStorage.getItem('orderList')) {
  initialState.orderList = JSON.parse(localStorage.getItem('orderList')!);
}

// Cart Slice --------------------------------------------

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ORDER LIST ================================================

    // Add Order to OrderList;
    addOrderToOrderList: (state, action) => {
      state.orderList = action.payload;
      localStorage.setItem('orderList', JSON.stringify(action.payload));
      console.log(action.payload);
    },

    // Remove Order from OrderList;
    removeOrderFromOrderList: (state, action) => {
      const newOrderList = state.orderList.filter(value => value.idOrderList != action.payload);

      state.orderList = newOrderList;
      localStorage.setItem('orderList', JSON.stringify(newOrderList));
    },

    // Update OrderList;
    updateOrderList: (state, action) => {
      // ДАнная функция вызывает проблемы при добовленеии обинаковых товаров и переписывает обьект глобальнго состояния;
      state.orderList = action.payload;
      localStorage.setItem('orderList', JSON.stringify(action.payload));
    },

    // Clear OrderList;
    clearOrderList: state => {
      state.orderList = [];
      localStorage.setItem('orderList', JSON.stringify([]));
    },

    // DELIVERY DETAILS =====================================================

    // Add Delivery Details;
    addDeliveryDetails: (state, action) => {
      state.delivery = action.payload;
    },
  },
});

export const { addOrderToOrderList, removeOrderFromOrderList, clearOrderList, updateOrderList, addDeliveryDetails } = cartSlice.actions;

export default cartSlice.reducer;
