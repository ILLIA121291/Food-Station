import { FC } from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { LuMinus } from 'react-icons/lu';

interface IProps {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityInput: FC<IProps> = ({ qty, setQty }) => {
  const minusOne = () => {
    if (qty - 1 < 1) {
      return;
    } else {
      setQty(qty - 1);
    }
  };

  const plusOne = () => {
    setQty(qty + 1);
  };

  return (
    <div className="f_ac">
      <button className="hov_red bdr__lt15 bdr__lb15 p10 bkgr__wh-gr" onClick={minusOne}>
        <LuMinus size={17} />
      </button>
      <div className="f_jc-ac fs18 fw600 wt40 ht40 bkgr__wh-gr">{qty}</div>
      <button className="hov_red bdr__rb15 bdr__rt15 p10 bkgr__wh-gr" onClick={plusOne}>
        <HiOutlinePlusSm size={17} />
      </button>
    </div>
  );
};

export default QuantityInput;
