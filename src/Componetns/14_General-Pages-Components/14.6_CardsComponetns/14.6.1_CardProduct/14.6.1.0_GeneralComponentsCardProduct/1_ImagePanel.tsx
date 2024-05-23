import { FC } from 'react';

interface IProps {
  image: string;
  alt: string;
}

const ImagePanel: FC<IProps> = ({ image, alt }) => {
  return (
    <div className="wt310 ht270 f_jc-ac bd">
      <img className="card-product__img" src={image} alt={alt} />
    </div>
  );
};

export default ImagePanel;
