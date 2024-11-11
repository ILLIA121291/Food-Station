import './App.scss';
import './13.1.1_Scss/froms.scss';
import './13.1.1_Scss/flex.scss';
import './13.1.1_Scss/color.scss';
import './13.1.1_Scss/width.scss';
import './13.1.1_Scss/margin.scss';
import './13.1.1_Scss/pading.scss';
import './13.1.1_Scss/text.scss';
import './13.1.1_Scss/height.scss';
import './13.1.1_Scss/background.scss';
import './13.1.1_Scss/position.scss';
import './13.1.1_Scss/border-radius.scss';
import './13.1.1_Scss/opacity.scss';
import './13.1.1_Scss/animation.scss';
import './13.1.1_Scss/hover.scss';
import './13.1.1_Scss/different.scss';
import './13.1.1_Scss/border.scss';
import './13.1.1_Scss/z-index.scss';
import './13.1.1_Scss/overflow.scss';
import './13.1.1_Scss/visibility.scss';
import './13.1.1_Scss/transition.scss';

import { FC, useEffect, useState } from 'react';

import HomePage from '../../../pages/1_HomePage/HomePage';
import HeaderApp from '../13.2_AppHeader/13.2.1_HeaderApp/HeaderApp';
import ModalWindow from '../../14_General-Pages-Components/14.3_ModalWindow/ModalWindow';

import english from '../../../language/english';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from '../../../pages/2_Cart-Page/2.1_CartPage/CartPage';

import { useDispatch } from 'react-redux';

import { updateOrderList } from '../../../pages/2_Cart-Page/2.1_CartPage/sliceCart';
import { onChangeCurrency } from '../../14_General-Pages-Components/14.2_CurrencyPanel/sliceCurrencyPanel';
import DishListDynamicPage from '../../../pages/3_DishListDynamic-Page/3.1_DishListDynamicPage/DishListDynamicPage';
import { DOMAIN_NAME } from '../../../utilities/variables';
import { addAllAppProductsToState } from './sliceApp';

// localStorage.removeItem('orderList')

// Language App ------------------------------------

let initialLanguge: typeof english;
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'English');
  initialLanguge = english;
} else {
  switch (localStorage.getItem('language')) {
    // case 'Russian':
    //   initialLanguge = russian;
    //   break;
    // case 'Japan':
    //   initialLanguge = japan;
    //   break;
    default:
      initialLanguge = english;
      break;
  }
}

// Login User -------------------------------------

let initialIsLoginUser: boolean;

if (localStorage.getItem('login') || sessionStorage.getItem('login')) {
  initialIsLoginUser = true;
} else {
  initialIsLoginUser = false;
}

// COMPONENT ------------------------------------------------------
const App: FC = () => {
  const dispatch = useDispatch();
  const [langugeApp, setLangugeApp] = useState<typeof english>(initialLanguge);
  const [isUserAuthorized, setUserAuthorized] = useState<boolean>(initialIsLoginUser);

  // Получение данных из базы данных;
  useEffect(() => {
    // Received All Products;
    fetch(`${DOMAIN_NAME}products`)
      .then(res => res.json())
      .then(receivedAllAppProducts => {
        // Save all products to state;
        dispatch(addAllAppProductsToState(receivedAllAppProducts));
      });
  }, []);

  // Updating localStorage in different browser windows ----------------------------------------------------

  window.addEventListener('storage', () => {
    // Updating Cart ---------------------------------------------------------------------------------------
    const newOrderList = JSON.parse(localStorage.getItem('orderList')!);
    dispatch(updateOrderList(newOrderList));

    // Updating Currency ---------------------------------------------------------------------------------
    const newCurrency = localStorage.getItem('currency')!;
    dispatch(onChangeCurrency(newCurrency));

    console.log('Action in localstorage in extra browser window');
  });

  // APP ROUTER ------------------------------------
  return (
    <Router>
      <div className="app">
        <HeaderApp langugeApp={langugeApp} setLangugeApp={setLangugeApp} isUserAuthorized={isUserAuthorized} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage langugeApp={langugeApp} />} />
            <Route path="/cart" element={<CartPage langugeApp={langugeApp} />} />
            <Route path="/menu/:dishListName" element={<DishListDynamicPage langugeApp={langugeApp} />} />
          </Routes>
        </main>
        <ModalWindow langugeApp={langugeApp} setUserAuthorized={setUserAuthorized} />
      </div>
    </Router>
  );
};

export default App;
