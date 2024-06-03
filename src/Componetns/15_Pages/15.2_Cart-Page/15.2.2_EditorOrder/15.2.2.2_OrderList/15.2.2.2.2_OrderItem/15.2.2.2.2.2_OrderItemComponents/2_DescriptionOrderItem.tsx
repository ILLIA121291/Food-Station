import { FC } from 'react';
import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

interface IProps {
  name: string;
  price: number;
  weight: number;
  langugeApp: typeof english
}

const DescriptionOrderItem: FC<IProps> = ({ name, price, weight }) => {
  return (
    <div>
      <p className="tx-tr-cap fw600 fs18 mb5 editor-order__item-titel">{name}</p>
      <p className="">Price: {price} usd</p>
      <p>Weight: {weight} g.</p>
      <p></p>
    </div>
  );
};

export default DescriptionOrderItem;
