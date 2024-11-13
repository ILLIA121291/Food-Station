import './LanguagePanel.scss';

import { FC } from 'react';
import english from '../../../language/english';
import useChangeLanguage from './useChangeLanguage';
import textLanguagePanel from './textLanguagePanel';

interface IProps {
  langugeApp: typeof english;
  setLangugeApp: React.Dispatch<React.SetStateAction<typeof english>>;
}

const LanguagePanel: FC<IProps> = props => {
  const { langugeApp, setLangugeApp } = props;

  return (
    <select className="general-select language-panel__select" name="language" value={langugeApp.language} onChange={e => useChangeLanguage(e, setLangugeApp)}>
      <option className="language-panel__select-option" value="English">
        {textLanguagePanel.english}
      </option>
      <option className="language-panel__select-option" value="Russian">
        {textLanguagePanel.russian}
      </option>
      <option className="language-panel__select-option" value="Japan">
        {textLanguagePanel.japan}
      </option>
    </select>
  );
};

export default LanguagePanel;
