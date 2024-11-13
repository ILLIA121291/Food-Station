import CallMeForm from '../../components/Forms/CallMeForm/CallMeForm';
import english from '../../language/english';
import LoginSignupForm from '../Forms/LoginSignupFrom/1_LoginSignupForm/LoginSignupForm';

type TUMWCReducer = (langugeApp: typeof english, setUserAuthorized: React.Dispatch<React.SetStateAction<boolean>>, component: string, componentType?: string) => JSX.Element;

const useModalWindowComponentsReducer: TUMWCReducer = (langugeApp, setUserAuthorized, component, componentType): JSX.Element => {
  let displayComponentInModalWindow: JSX.Element;

  switch (component) {
    case 'LoginForm':
      displayComponentInModalWindow = <LoginSignupForm langugeApp={langugeApp} setUserAuthorized={setUserAuthorized} />;
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
