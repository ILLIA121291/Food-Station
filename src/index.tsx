import ReactDOM from 'react-dom/client';
import App from './app/App';
import './css/index.css';

import { Provider } from 'react-redux';
import stateStore from './app/stateStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={stateStore}>
    <App />
  </Provider>,
  // <React.StrictMode>
  // </React.StrictMode>,
);
