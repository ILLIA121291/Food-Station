import CallMeForm from '../../13_App-Components/13.2_AppHeader/13.2.11_CallMeForm/13.2.11.1_CallMeForm/CallMeForm';
import english from '../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

type TUMWCReducer = (langugeApp: typeof english, component: string, componentType?: string) => JSX.Element;

const useModalWindowComponentsReducer: TUMWCReducer = (langugeApp, component, componentType): JSX.Element => {
  let displayComponentInModalWindow: JSX.Element;

  switch (component) {
    case 'LoginForm':
      displayComponentInModalWindow = <p className="no-componet">LOGIN FORM</p>;
      break;
    case 'CallMeForm':
      displayComponentInModalWindow = <CallMeForm langugeApp={langugeApp} />;
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
