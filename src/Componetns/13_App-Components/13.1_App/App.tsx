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

import { FC, useState } from 'react';

import HomePage from '../../15_Pages/15.1_Home-Page/15.1.1_HomePage/HomePage';
import HeaderApp from '../13.2_AppHeader/13.2.1_HeaderApp/HeaderApp';
import ModalWindow from '../../14_General-Pages-Components/14.3_ModalWindow/ModalWindow';

import english from '../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
// import russian from '../../12_General-Data-Recourses/12.1_Text/12.1.2_Russian/1_russian';
// import japan from '../../12_General-Data-Recourses/12.1_Text/12.1.3_Japan/1_japan';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from '../../15_Pages/15.2_Cart-Page/15.2.1_CartPage/CartPage';

import { useDispatch } from 'react-redux';

import { updateOrderList } from '../../15_Pages/15.2_Cart-Page/15.2.1_CartPage/sliceCart';
import { onChangeCurrency } from '../../14_General-Pages-Components/14.2_CurrencyPanel/sliceCurrencyPanel';


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

const App: FC = () => {
  const dispatch = useDispatch();
  const [langugeApp, setLangugeApp] = useState<typeof english>(initialLanguge);
  const [isUserAuthorized, setUserAuthorized] = useState<boolean>(initialIsLoginUser);

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

  return (
    <Router>
      <div className="app">
        <HeaderApp langugeApp={langugeApp} setLangugeApp={setLangugeApp} isUserAuthorized={isUserAuthorized} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage langugeApp={langugeApp} />} />
            <Route path="/cart" element={<CartPage langugeApp={langugeApp} />} />
          </Routes>
        </main>
        <ModalWindow langugeApp={langugeApp} setUserAuthorized={setUserAuthorized} />
      </div>
    </Router>
  );
};

export default App;
