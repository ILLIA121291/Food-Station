import './PhoneCallMe.scss';

import { FC } from 'react';

const PhoneCallMe: FC = () => {
  return (
    <div className="phone-call__container fc">
      <p className="phone-call__phone"> +1 (213) 452-150 </p>
      <a className="phone-call__callme" href="#">
        Call me back
      </a>
    </div>
  );
};

export default PhoneCallMe;
