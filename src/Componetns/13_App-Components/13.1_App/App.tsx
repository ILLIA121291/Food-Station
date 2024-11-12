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
import setInitialStateInLocalStorage from '../../../localStorage/setInitialStateInLocalStorage';

import HomePage from '../../../pages/1_HomePage/1.1_Page/HomePage';
import HeaderApp from '../13.2_AppHeader/13.2.1_HeaderApp/HeaderApp';
import ModalWindow from '../../14_General-Pages-Components/14.3_ModalWindow/ModalWindow';
import CartPage from '../../../pages/2_Cart-Page/2.1_CartPage/CartPage';

import english from '../../../language/english';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { updateOrderList } from '../../../pages/2_Cart-Page/2.1_CartPage/sliceCart';
import { onChangeCurrency } from '../../14_General-Pages-Components/14.2_CurrencyPanel/sliceCurrencyPanel';
import DishListDynamicPage from '../../../pages/3_DishListDynamic-Page/3.1_DishListDynamicPage/DishListDynamicPage';
import setInitialCurrencyAppLocalStorage from '../../../localStorage/functions/setInitialCurrencyAppLocalStorage';
import useProductService from '../../../services/product.service';
import LoadingAnimation from '../../../spinner/LoadingAnimation/LoadingAnimation';

// Set Initial State in LocalStorage ------------------------------
setInitialCurrencyAppLocalStorage();
const { initialLanguge, initialIsLoginUser } = setInitialStateInLocalStorage();

// COMPONENT ------------------------------------------------------
const App: FC = () => {
  const dispatch = useDispatch();
  const [langugeApp, setLangugeApp] = useState<typeof english>(initialLanguge);
  const [isUserAuthorized, setUserAuthorized] = useState<boolean>(initialIsLoginUser);

  const { getAllProducts, stateHTTPprocess } = useProductService();

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
            {/* <Route path="/" element={<HomePage langugeApp={langugeApp} />} /> */}
            <Route path="/" element={stateHTTPprocess == 'loading' ? <LoadingAnimation /> : <HomePage langugeApp={langugeApp} />} />
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
