import '../css/scss/froms.scss';
import '../css/scss/flex.scss';
import '../css/scss/color.scss';
import '../css/scss/width.scss';
import '../css/scss/margin.scss';
import '../css/scss/pading.scss';
import '../css/scss/text.scss';
import '../css/scss/height.scss';
import '../css/scss/background.scss';
import '../css/scss/position.scss';
import '../css/scss/border-radius.scss';
import '../css/scss/opacity.scss';
import '../css/scss/animation.scss';
import '../css/scss/hover.scss';
import '../css/scss/different.scss';
import '../css/scss/border.scss';
import '../css/scss/z-index.scss';
import '../css/scss/overflow.scss';
import '../css/scss/visibility.scss';
import '../css/scss/transition.scss';

import { FC, useEffect, useState } from 'react';
import setInitialStateInLocalStorage from '../localStorage/setInitialStateInLocalStorage';

import HomePage from '../pages/1_HomePage/0_HomePage/HomePage';
import HeaderApp from '../components/app_header/0_HeaderApp/HeaderApp';
import ModalWindow from '../components/modal_window/ModalWindow';
import CartPage from '../cart/0_CartPage/CartPage';

import english from '../language/english';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { updateOrderList } from '../cart/0_CartPage/sliceCart';
import { onChangeCurrency } from '../components/panels/CurrencyPanel/sliceCurrencyPanel';
import DishListDynamicPage from '../pages/2_DishListDynamic-Page/2.1_DishListDynamicPage/DishListDynamicPage';
import setInitialCurrencyAppLocalStorage from '../localStorage/functions/setInitialCurrencyAppLocalStorage';
import useProductService from '../services/product.service';
import setDisplayComponentStateHttp from '../utilities/setDisplayComponentStateHttp';

// Set Initial State in LocalStorage ------------------------------
setInitialCurrencyAppLocalStorage();
const { initialLanguge, initialIsLoginUser } = setInitialStateInLocalStorage();

// COMPONENT ------------------------------------------------------
const App: FC = () => {
  const dispatch = useDispatch();
  const [langugeApp, setLangugeApp] = useState<typeof english>(initialLanguge);
  const [isUserAuthorized, setUserAuthorized] = useState<boolean>(initialIsLoginUser);

  const { getAllProducts, stateHttpProcess } = useProductService();

  useEffect(() => {
    // Получение всех продуктов из базы данных;
    getAllProducts();
  }, []);

  
  // Updating localStorage in different browser windows ----------------------------------------------------

  window.addEventListener('storage', () => {
    // Updating Cart ---------------------------------------------------------------------------------------
    let newOrderList = JSON.parse(localStorage.getItem('orderList')!);
    if (newOrderList.length == null) {
      newOrderList = [];
    }

    dispatch(updateOrderList(newOrderList));

    // Updating Currency ---------------------------------------------------------------------------------
    let newCurrency = localStorage.getItem('currency')!;
    if (newCurrency == null) {
      newCurrency = 'USD';
    }
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
            <Route path="/" element={setDisplayComponentStateHttp(stateHttpProcess, <HomePage langugeApp={langugeApp} />)} />
            <Route path="/cart" element={<CartPage langugeApp={langugeApp} />} />
            <Route path="/menu/:dishListName" element={setDisplayComponentStateHttp(stateHttpProcess, <DishListDynamicPage langugeApp={langugeApp} />)} />
          </Routes>
        </main>
        <ModalWindow langugeApp={langugeApp} setUserAuthorized={setUserAuthorized} />
      </div>
    </Router>
  );
};

export default App;
