import english from '../../language/english';

const setInitialLangugeAppLocalStorage = (): typeof english => {
  // Действия если пользователь первый раз заходит в приложение;
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'English');
    return english;
  } else {
    switch (localStorage.getItem('language')) {
      // case 'Russian':
      //   initialLanguge = russian;
      //   break;
      // case 'Japan':
      //   initialLanguge = japan;
      //   break;
      default:
        return english;
        break;
    }
  }
};

export default setInitialLangugeAppLocalStorage;
