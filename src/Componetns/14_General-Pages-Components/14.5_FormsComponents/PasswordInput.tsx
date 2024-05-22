import { FC, useState, MouseEvent } from 'react';
import { Field } from 'formik';
import { IoEye, IoEyeOff } from 'react-icons/io5';

interface IProps {
  name: string;
  placeholder: string;
  className?: string;
  onFocus?: () => void;
}

const PasswordInput: FC<IProps> = ({ name, placeholder, className = '', onFocus = () => null }) => {
  const [inputType, setInputType] = useState<string>('password');
  let displayImg = inputType == 'password' ? <IoEye size={35} color={'#555555'} /> : <IoEyeOff size={35} color={'#555555'} />;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputType == 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  return (
    <div className={`f w345 finput ${className}`}>
      <Field className=" wt310 finput__pasword finput__focus" name={name} type={inputType} placeholder={placeholder} onFocus={onFocus} />
      <button className="bkgr__tra finput__focus" type="button" style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }} onClick={e => handleClick(e)}>
        {displayImg}
      </button>
    </div>
  );
};

export default PasswordInput;
