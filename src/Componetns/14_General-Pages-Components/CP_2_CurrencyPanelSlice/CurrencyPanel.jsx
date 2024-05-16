import './CurrencyPanel.scss';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeCurrency } from './sliceCurrencyPanel';
import textObjCurrencyPanel from './textObjCurrencyPanel';

const CurrencyPanel = () => {
  const dispatch = useDispatch();
  const currencyAppState = useSelector(state => state.currencyPanel.currencyApp);

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
