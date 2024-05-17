import './index.scss';
import ReactDOM from 'react-dom/client';
import App from '../13.1_App/App';

import { Provider } from 'react-redux';
import stateStore from '../13.1_App/stateStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={stateStore}>
    <App />
  </Provider>,
  // <React.StrictMode>
  // </React.StrictMode>,
);
