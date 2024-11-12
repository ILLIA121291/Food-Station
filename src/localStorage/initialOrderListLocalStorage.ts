

const initialOrderListLocalStorage = (): void => {
  localStorage.setItem('orderList', JSON.stringify([]));
}

export default initialOrderListLocalStorage