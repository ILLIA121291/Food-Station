import { FC } from 'react';

// IProps ----------------------------------
interface IProps {
  src: string;
  alt: string;
}

const ImageOrderItem: FC<IProps> = ({ src, alt }) => {
  return <img className="wt100 ht100" src={src} alt={alt} />;
};

export default ImageOrderItem;
