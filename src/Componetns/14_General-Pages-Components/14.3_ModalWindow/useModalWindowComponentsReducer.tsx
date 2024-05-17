const useModalWindowComponentsReducer = (component: string, componentType: string): JSX.Element => {
  let displayComponentInModalWindow: JSX.Element;

  switch (component) {
    case 'LoginForm':
      displayComponentInModalWindow = <p className="no-componet">LOGIN FORM</p>;
      break;
    case 'CallMeForm':
      displayComponentInModalWindow = <p className="no-componet">CALL ME FORM</p>;
      break;
    case 'Componet 3':
      displayComponentInModalWindow = <p className="no-componet">{componentType}</p>;
      break;
    default:
      displayComponentInModalWindow = <p className="no-componet">No component</p>;
      break;
  }

  return displayComponentInModalWindow;
};

export default useModalWindowComponentsReducer;
