import { FC } from 'react';
import ErrorMessageAnimation from '../infocomponents/ErrorMessageAnimation/ErrorMessageAnimation';
import LoadingAnimation from '../infocomponents/LoadingAnimation/LoadingAnimation';

const setDisplayComponent = (stateHTTPprocess: string, Component: FC): JSX.Element | Error => {
  switch (stateHTTPprocess) {
    case 'waiting':
      return <LoadingAnimation />;
    case 'loading':
      return <LoadingAnimation />;
    case 'received':
      return <Component />;
    case 'error':
      return <ErrorMessageAnimation />;
    default:
      return new Error('Unexpected process state');
  }
};

export default setDisplayComponent;
