import './LanguagePanel.scss';

import textObjLanguagePanel from './textObjLanguagePanel';

import { useSelector, useDispatch } from 'react-redux';
import { onChangeLanguage } from './sliceLanguagePanel';

const LanguagePanel = props => {
  const dispatch = useDispatch();
  const languageAppState = useSelector(state => state.languagePanel.languageApp);

  return (
    <select className="general-select language-panel__select" name="language" value={languageAppState} onChange={e => dispatch(onChangeLanguage(e.target.value))}>
      <option className="language-panel__select-option" value="English">
        {textObjLanguagePanel.english}
      </option>
      <option className="language-panel__select-option" value="Russian">
        {textObjLanguagePanel.russian}
      </option>
      <option className="language-panel__select-option" value="Japan">
        {textObjLanguagePanel.japan}
      </option>
    </select>
  );
};

export default LanguagePanel;
