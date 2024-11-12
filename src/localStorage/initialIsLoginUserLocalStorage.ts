

const initialIsLoginUserLocalStorage = (): boolean => {
  if (localStorage.getItem('login') || sessionStorage.getItem('login')) {
    return true;
  } else {
    return false;
  }
};

export default initialIsLoginUserLocalStorage;
