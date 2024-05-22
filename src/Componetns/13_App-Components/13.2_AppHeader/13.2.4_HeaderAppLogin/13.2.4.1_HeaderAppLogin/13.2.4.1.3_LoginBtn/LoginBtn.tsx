import { FC } from 'react';
import { CgProfile } from 'react-icons/cg';

const LoginBtn: FC = () => {
  return (
    <button className="bkgr__tra">
      <CgProfile size={35} />
    </button>
  );
};

export default LoginBtn;
