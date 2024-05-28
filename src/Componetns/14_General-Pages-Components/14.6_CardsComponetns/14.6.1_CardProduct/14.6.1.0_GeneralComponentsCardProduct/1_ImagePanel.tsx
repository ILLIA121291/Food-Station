import { FC } from 'react';

interface IProps {
  image: string;
  alt: string;
}

const ImagePanel: FC<IProps> = ({ image, alt }) => {
  return (
    <div className="wt270 ht230 f_jc-ac">
      <img className="card-product__img" src={image} alt={alt} />
    </div>
  );
};

export default ImagePanel;
