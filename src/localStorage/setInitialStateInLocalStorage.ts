import english from "../language/english";
import initialCurrencyAppLocalStorage from "./initialCurrencyAppLocalStorage";
import initialIsLoginUserLocalStorage from "./initialIsLoginUserLocalStorage";
import initialLangugeAppLocalStorage from "./initialLangugeAppLocalStorage";
import initialOrderListLocalStorage from "./initialOrderListLocalStorage";

// Interface ---------

interface fn {
  initialLanguge: typeof english, 
  initialIsLoginUser: boolean
}

// FUNCTION ----------------------------------------
const setInitialStateInLocalStorage = (): fn => {

// Initial Language App Local Storage ------------------------------------
const initialLanguge: typeof english = initialLangugeAppLocalStorage();

// Initial Login User Local Storage --------------------------------------
const initialIsLoginUser: boolean = initialIsLoginUserLocalStorage();

// Initial Order List Local Storage --------------------------------------
initialOrderListLocalStorage()

// Initial Currency App Local Storage ------------------------------------
initialCurrencyAppLocalStorage ()

return {initialLanguge, initialIsLoginUser }

}

export default setInitialStateInLocalStorage