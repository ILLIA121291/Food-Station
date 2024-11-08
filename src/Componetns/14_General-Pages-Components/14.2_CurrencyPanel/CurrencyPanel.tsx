import './CurrencyPanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeCurrency } from './sliceCurrencyPanel';
import textObjCurrencyPanel from './textObjCurrencyPanel';

import { FC } from 'react';
import { IStateStore } from '../../13_App-Components/13.1_App/stateStore';


// Currency Panel Component -----------------------------------------------------
const CurrencyPanel: FC = () => {
  const dispatch = useDispatch();
  const currencyAppState = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);

  // Rendering ------------------------------------------------------------------
  return (
    <select className="general-select currency-panel__select" value={currencyAppState} onChange={e => dispatch(onChangeCurrency(e.target.value))}>
      <option className="currency-panel__select-option" value="USD">
        {textObjCurrencyPanel.USD}
      </option>
      <option className="currency-panel__select-option" value="EUR">
        {textObjCurrencyPanel.EUR}
      </option>
      <option className="currency-panel__select-option" value="JPY">
        {textObjCurrencyPanel.JPY}
      </option>
    </select>
  );
};

export default CurrencyPanel;
