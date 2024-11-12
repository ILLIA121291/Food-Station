
const initialCurrencyAppLocalStorage = ():void => {

  if (!localStorage.getItem('currency')) {
    localStorage.setItem('currency', 'USD')
  }

}

export default initialCurrencyAppLocalStorage 