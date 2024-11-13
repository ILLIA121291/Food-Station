import './DeliveryLocation.scss';

import { FC, useRef, useState } from 'react';

const DeliveryLocation: FC = () => {
  const [locationState, setLocationState] = useState<boolean>(false);
  const refUl = useRef<HTMLUListElement>(null);

  const onCllickLocation = (): void => {
    setLocationState(!locationState);
  };

  return (
    <div className="location__container">
      <button className="location__btn" onClick={onCllickLocation}>
        Москва ﹀
      </button>
      <div className={`location__menu `} style={locationState ? { height: refUl.current!.scrollHeight } : { height: '0px' }}>
        <ul ref={refUl} className="location__list">
          <li>Area 1</li>
          <li>Area 2</li>
          <li>Area 3</li>
          <li>Area 4</li>
          <li>Area 5</li>
          <li>Area 6</li>
          <li>Area 6</li>
          <li>Area 6</li>
          <li>Area 6</li>
          <li>Area 6</li>
          <li>Area 6</li>
          <li>Area 6</li>
          <li>Area 6</li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryLocation;
