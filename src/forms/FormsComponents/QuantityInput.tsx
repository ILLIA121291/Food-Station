import { FC } from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { LuMinus } from 'react-icons/lu';

interface IProps {
  calFunction: (num: 1 | -1) => void;
  displayNumber: number;
}

const QuantityInput: FC<IProps> = ({ calFunction, displayNumber }) => {
  return (
    <div className="f_ac">
      <button className="hov_red bdr__lt15 bdr__lb15 p10 bkgr__wh-gr" onClick={() => calFunction(-1)}>
        <LuMinus size={17} />
      </button>
      <div className="f_jc-ac fs18 fw600 wt40 ht40 bkgr__wh-gr">{displayNumber}</div>
      <button className="hov_red bdr__rb15 bdr__rt15 p10 bkgr__wh-gr" onClick={() => calFunction(1)}>
        <HiOutlinePlusSm size={17} />
      </button>
    </div>
  );
};

export default QuantityInput;
