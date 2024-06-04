import { FC } from 'react';

interface IProps {
  titel: string;
}

const TitlePanel: FC<IProps> = ({ titel }) => {
  return <div className="card-product__titel tx-al-c fs18 mt15 fw600 tx-tr-cap">{titel}</div>;
};

export default TitlePanel;
