import {FC} from 'react'
import { FaPencil } from 'react-icons/fa6';

// Props Interface ------------------------------

interface IProps {
  name: string
  disabled: boolean
  displayEditorPanel: boolean
  setDisplayEditorPanel: React.Dispatch<React.SetStateAction<boolean>>;

}

const EditorBtn:FC <IProps>= ({name, disabled, displayEditorPanel, setDisplayEditorPanel}) => {
  return (
    <button 
    disabled={disabled}
    onClick={() => setDisplayEditorPanel(!displayEditorPanel)} 
    className="tx-tr-cap fw600 fs18 mb5 bkgr__tra editor-order__item-titel">
      {name} <FaPencil />
    </button>
  )
}

export default EditorBtn
