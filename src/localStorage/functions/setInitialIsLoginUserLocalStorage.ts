const setInitialIsLoginUserLocalStorage = (): boolean => {

  if (!localStorage.getItem('isLoginUser')) {

    localStorage.setItem('isLoginUser', JSON.stringify(false));
    return false;

  } else {

    return JSON.parse(localStorage.getItem('isLoginUser')!);
  
  }
};

export default setInitialIsLoginUserLocalStorage;
