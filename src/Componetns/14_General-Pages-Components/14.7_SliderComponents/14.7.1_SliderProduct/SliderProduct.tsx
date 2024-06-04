import './SliderProduct.scss';
import { FC, useRef, useState } from 'react';

import CardProduct from '../../14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { IProduct } from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';

interface IProps {
  titel?: string;
  products: IProduct[];
  langugeApp: typeof english;
}

const SliderProduct: FC<IProps> = ({ titel, products, langugeApp }) => {
  const refSliderWindow = useRef<HTMLDivElement>(null);

  const clientWidth = document.documentElement.clientWidth - 30;
  let initalStatebtnNext = false;

  let firstPadding: string = '0';
  let gap: number = 0;

  if (clientWidth > 1270) {
    gap = 10;

    if (products.length <= 4) {
      initalStatebtnNext = true;
    }
  } else if (clientWidth < 1270 && clientWidth >= 650) {
    gap = (clientWidth - Math.trunc(clientWidth / 310) * 310) / (Math.trunc(clientWidth / 310) - 1);
  } else {
    gap = (clientWidth - 310) / 2;
    firstPadding = `${gap}`;
  }

  const productCardWidth = 310 + gap;

  let [offset, setOffset] = useState(0);
  let [btnPrevious, setBtnPrevious] = useState<boolean>(true);
  let [btnNext, setBtnNext] = useState<boolean>(initalStatebtnNext);

  // Previous Slide ------------------------------------------
  const previousSlide = () => {
    if (offset - productCardWidth < 0) {
      setOffset(0);
      setBtnPrevious(true);
      setBtnNext(false);
    } else {
      setOffset(offset => (offset -= productCardWidth));

      if (offset - productCardWidth < 310) {
        setBtnPrevious(true);
      } else {
        setBtnPrevious(false);
      }

      setBtnNext(false);
    }
  };

  // Next Slide --------------------------------------------
  const nextSlide = () => {
    const notShowProduct = products.length * productCardWidth - refSliderWindow.current!.offsetWidth;

    if (offset + productCardWidth < notShowProduct) {
      setOffset((offset += productCardWidth));

      if (offset + productCardWidth - gap > notShowProduct) {
        setBtnNext(true);
      } else {
        setBtnNext(false);
      }

      setBtnPrevious(false);
    } else {
      if (clientWidth >= 650) {
        setOffset(notShowProduct - gap);
      } else {
        setOffset(notShowProduct + gap);
      }

      setBtnNext(true);
      setBtnPrevious(false);
    }
  };

  return (
    <>
      <div className="f_jc_sb p5 mt30 us-se">
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
        <div className="slider__line" style={{ transform: `translateX(-${offset}px)`, gap: `${gap}px` }}>
          {products.map((value, index) => {
            let paddingLeft = '0';

            if (index == 0) {
              paddingLeft = firstPadding;
            } else {
              paddingLeft = '0';
            }

            return <CardProduct paddingLeft={paddingLeft} key={index} data={value} langugeApp={langugeApp} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SliderProduct;
