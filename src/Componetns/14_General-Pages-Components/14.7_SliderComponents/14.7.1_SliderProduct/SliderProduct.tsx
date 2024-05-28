import './SliderProduct.scss';
import { FC, useRef, useState } from 'react';
import { IPizza } from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

import CardProduct from '../../14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

interface IProps {
  titel?: string;
  products: IPizza[];
  langugeApp: typeof english;
}

const SliderProduct: FC<IProps> = ({ titel, products, langugeApp }) => {
  const refSliderWindow = useRef<HTMLDivElement>(null);

  let [offset, setOffset] = useState(0);
  let [btnPrevious, setBtnPrevious] = useState<boolean>(true);
  let [btnNext, setBtnNext] = useState<boolean>(false);

  // Previous Slide ------------------------------------------
  const previousSlide = () => {
    if (offset - 310 < 0) {
      setOffset(0);
      setBtnPrevious(true);
    } else {
      setOffset(offset => (offset -= 310));
      setBtnPrevious(false);
      setBtnNext(false);
    }
  };

  // Next Slide --------------------------------------------
  const nextSlide = () => {
    const notShowProduct = products.length * 310 - refSliderWindow.current!.offsetWidth;

    if (offset + 310 < notShowProduct) {
      setOffset((offset += 310));
      setBtnNext(false);
      setBtnPrevious(false);
    } else {
      setOffset(notShowProduct);
      setBtnNext(true);
    }
  };

  return (
    <>
      <div className="f_jc_sb p5 mt30">
        <h4 className="fw900 fs20">{titel}</h4>
        <div>
          <button
            disabled={btnPrevious}
            className="slider__btns wt50 ht50 bdr50 mr10"
            onClick={() => {
              previousSlide();
            }}
          >
            <GrPrevious size={20} />
          </button>

          <button
            disabled={btnNext}
            className="slider__btns wt50 ht50 bdr50"
            onClick={() => {
              nextSlide();
            }}
          >
            <GrNext size={20} />
          </button>
        </div>
      </div>

      <div ref={refSliderWindow} className="slider__window">
        <div className="slider__line" style={{ transform: `translateX(-${offset}px)` }}>
          {products.map((value, index) => {
            return <CardProduct key={index} data={value} langugeApp={langugeApp} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SliderProduct;
