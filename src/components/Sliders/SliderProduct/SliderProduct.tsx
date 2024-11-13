import classes from './SliderProuct.module.css';
import { FC, useRef, useState } from 'react';

import CardProduct from '../../cards/CardProduct/1_CardProduct/CardProduct';
import english from '../../../language/english';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import IProduct from '../../../Interfaces/IProduct';

// Interface Component -----------------------------------------------
interface IProps {
  title?: string;
  products: IProduct[];
  langugeApp: typeof english;
}

// COMPONENT ---------------------------------------------------------
const SliderProduct: FC<IProps> = ({ title, products, langugeApp }) => {
  // Inital State
  let initalStatebtnNext = false;

  // Use Ref
  const refSliderWindow = useRef<HTMLDivElement>(null);

  // State Component
  let [offset, setOffset] = useState(0);
  let [btnPrevious, setBtnPrevious] = useState<boolean>(true);
  let [btnNext, setBtnNext] = useState<boolean>(initalStatebtnNext);

  const clientWidth = document.documentElement.clientWidth - 30;

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

  // RENDERING COMPONENT ----------------------------------------
  return (
    <>
      <div className={classes.container}>
        {/* Title */}
        <h4 className={classes.title}>{title}</h4>
        {/* Buttons */}
        <div>
          <button
            disabled={btnPrevious}
            className={classes.btn}
            onClick={() => {
              previousSlide();
            }}
          >
            <GrPrevious size={20} />
          </button>

          <button
            disabled={btnNext}
            className={classes.btn}
            onClick={() => {
              nextSlide();
            }}
          >
            <GrNext size={20} />
          </button>
        </div>
      </div>
      {/* Slides */}
      <div ref={refSliderWindow} className={classes.window}>
        <div className={classes.line} style={{ transform: `translateX(-${offset}px)`, gap: `${gap}px` }}>
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
