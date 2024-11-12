import english from '../language/english';
import setInitialCurrencyAppLocalStorage from './functions/setInitialCurrencyAppLocalStorage';
import setInitialIsLoginUserLocalStorage from './functions/setInitialIsLoginUserLocalStorage';
import setInitialLangugeAppLocalStorage from './functions/setInitialLangugeAppLocalStorage';
import setInitialOrderListLocalStorage from './functions/setInitialOrderListLocalStorage';

// Interface ---------

interface fnReturn {
  initialLanguge: typeof english;
  initialIsLoginUser: boolean;
}

// FUNCTION ----------------------------------------
const setInitialStateInLocalStorage = (): fnReturn => {
  // Set Initial Language App Local Storage ------------------------------------
  const initialLanguge: typeof english = setInitialLangugeAppLocalStorage();

  // Set Initial Login User Local Storage --------------------------------------
  const initialIsLoginUser: boolean = setInitialIsLoginUserLocalStorage();

  // Set Initial Order List Local Storage --------------------------------------
  setInitialOrderListLocalStorage();

  // Set Initial Currency App Local Storage ------------------------------------
  setInitialCurrencyAppLocalStorage();

  return { initialLanguge, initialIsLoginUser };
};

export default setInitialStateInLocalStorage;
