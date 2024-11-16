import './CurrencyPanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeCurrency } from './sliceCurrencyPanel';

import { FC } from 'react';
import { IStateStore } from '../../app/stateStore';
import english from '../../language/english';

// Interfase ---------------------------------

interface IProp {
  langugeApp: typeof english;
}

// COMPONENT -----------------------------------------------------
const CurrencyPanel: FC<IProp> = ({ langugeApp }) => {
  const dispatch = useDispatch();
  const currencyAppState = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);
  const textComponent = langugeApp.textCurrencyPanel;

  // Rendering ------------------------------------------------------------------
  return (
    <select className="general-select currency-panel__select" value={currencyAppState} onChange={e => dispatch(onChangeCurrency(e.target.value))}>
      <option className="currency-panel__select-option" value="USD">
        {textComponent.USD}
      </option>
      <option className="currency-panel__select-option" value="EUR">
        {textComponent.EUR}
      </option>
      <option className="currency-panel__select-option" value="JPY">
        {textComponent.JPY}
      </option>
    </select>
  );
};

export default CurrencyPanel;
