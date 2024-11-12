import ErrorMessageAnimation from '../infocomponents/ErrorMessageAnimation/ErrorMessageAnimation';
import LoadingAnimation from '../infocomponents/LoadingAnimation/LoadingAnimation';

const setDisplayComponentStateHttp = (stateHttpProcess: string, component: JSX.Element): JSX.Element  => {
  switch (stateHttpProcess) {
    case 'waiting':
      return <LoadingAnimation />;
    case 'loading':
      return <LoadingAnimation />;
    case 'received':
      return component;
    case 'error':
      return <ErrorMessageAnimation />;
    default:
      return <ErrorMessageAnimation errmessage = 'Unexpected process state'/>;
  }
};

export default setDisplayComponentStateHttp;
