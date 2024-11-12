

const initialOrderListLocalStorage = (): void => {

  if (!localStorage.getItem('orderList')) {

    localStorage.setItem('orderList', JSON.stringify([]));
  }

}

export default initialOrderListLocalStorage