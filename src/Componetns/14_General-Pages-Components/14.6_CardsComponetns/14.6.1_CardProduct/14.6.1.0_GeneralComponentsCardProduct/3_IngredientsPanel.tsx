import { FC, useEffect, useState, useRef } from 'react';

import { extraIngredientsPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import { IOrderdPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { LuMinus } from 'react-icons/lu';
import { IoIosCloseCircle } from 'react-icons/io';
import BlockErrorMessages from '../../../14.5_FormsComponents/BlockErrorMessages';

interface IProps {
  orderdPizza: IOrderdPizza;
  setOrderdPizza: React.Dispatch<React.SetStateAction<IOrderdPizza>>;
}

const IngredientsPanel: FC<IProps> = ({ orderdPizza, setOrderdPizza }) => {
  const [listState, setListState] = useState<boolean>(false);
  const [displayInfoMessage, setDisplayInfoMessage] = useState({ display: false, message: '' });

  const refUl = useRef<HTMLUListElement>(null);
  let colorImgBtnAdd = listState ? 'red' : 'green';

  const windowCloseList = (e: globalThis.MouseEvent) => {
    if (!(e.target as HTMLButtonElement).classList.contains('r')) {
      setListState(false);
    }
  };

  useEffect(() => {
    if (listState) {
      window.addEventListener('click', e => windowCloseList(e), { once: true });
    }
  }, [listState]);

  const resetAllIngredients = () => {
    if (orderdPizza.extraIngredients.length != 0) {
      setOrderdPizza(orderdPizza => {
        return {
          ...orderdPizza,
          extraIngredients: [],
          costExtraIngredients: 0,
        };
      });
    }
  };

  return (
    <div className="mt15 pos_rel bd bdr10 p5 fw600 us-se">
      <p className="tx-tr-cap tx-al-c">extra ingredients</p>
      <div className="f_jc_sb p5 ">
        <div className="f_ac wt80">
          <p className="wt60">Total: {orderdPizza.extraIngredients.length}</p>
          <button className="bkgr__tra f_jc-ac ml5" onClick={resetAllIngredients}>
            <IoIosCloseCircle size={20} color="red" />
          </button>
        </div>

        <div className=" f_jc-ac">+ {orderdPizza.costExtraIngredients} USD</div>

        <button
          style={{ color: colorImgBtnAdd }}
          className="extra-ingre__btn fs16 wt45 bkgr__tra fw600 tx-al-l r"
          onClick={e => {
            e.stopPropagation(), setListState(!listState);
          }}
        >
          + add
        </button>

        <div className="extra-ingre__container bdr10 zindex150 bkgr__wh-bl fw600 over_hid" style={listState ? { height: refUl.current!.scrollHeight } : { height: '0px' }} onClick={e => e.stopPropagation()}>
          <ul ref={refUl} className="wt310 p5">
            {extraIngredientsPizza.map((item, index) => {
              return (
                <li key={index} className="f_jc_sb p5 ">
                  <p>{item.name}</p>
                  <AddIngridientPanel name={item.name} price={item.price} orderdPizza={orderdPizza} setOrderdPizza={setOrderdPizza} displayInfoMessage={displayInfoMessage} setDisplayInfoMessage={setDisplayInfoMessage} />
                </li>
              );
            })}
          </ul>
          <BlockErrorMessages name="extra-ingredient" color="blc" className="wt300" message={displayInfoMessage.message} display={displayInfoMessage.display} />
        </div>
      </div>
    </div>
  );
};

// AddIngridientPanel -----------------------------------------------------------------------

interface IAddIngridientPanel {
  name: string;
  price: number;
  orderdPizza: IOrderdPizza;
  setOrderdPizza: React.Dispatch<React.SetStateAction<IOrderdPizza>>;
  displayInfoMessage: { display: boolean; message: string };
  setDisplayInfoMessage: React.Dispatch<React.SetStateAction<{ display: boolean; message: string }>>;
}

const AddIngridientPanel: FC<IAddIngridientPanel> = ({ name, price, orderdPizza, setOrderdPizza, setDisplayInfoMessage, displayInfoMessage }) => {
  const [qty, setQty] = useState<number>(0);

  useEffect(() => {
    if (orderdPizza.extraIngredients.length == 0) {
      setQty(0);
    }
  }, [orderdPizza]);

  let display: 'visible' | 'hidden' = qty > 0 ? 'visible' : 'hidden';

  const ingredientObj = {
    name: name,
    price: price,
    quantity: 1,
  };

  const disableInformationMessage = () => {
    setTimeout(() => {
      setDisplayInfoMessage(displayInfoMessage => {
        return {
          ...displayInfoMessage,
          display: false,
        };
      });
    }, 1000);
  };

  const plusOne = () => {
    if (orderdPizza.extraIngredients.length + 1 <= 6 && qty + 1 <= 3) {
      setQty(qty + 1);
      setOrderdPizza(orderdPizza => {
        return { ...orderdPizza, extraIngredients: [...orderdPizza.extraIngredients, ingredientObj], costExtraIngredients: +(orderdPizza.costExtraIngredients += price).toFixed(2) };
      });
    } else if (orderdPizza.extraIngredients.length + 1 > 6) {
      setDisplayInfoMessage({ display: true, message: 'You can add a maximum of 6 additional ingredients.' });
      disableInformationMessage();
    } else {
      setDisplayInfoMessage({ display: true, message: 'You cannot add more than 3 of the same ingredients.' });
      disableInformationMessage();
    }
  };

  const minusOne = () => {
    if (orderdPizza.extraIngredients.length - 1 < 0) {
      return;
    } else {
      setQty(qty - 1);

      let indexIngrdient: number;

      for (let i = 0; i < orderdPizza.extraIngredients.length; i++) {
        if (orderdPizza.extraIngredients[i].name == name) {
          indexIngrdient = i;
          break;
        }
      }

      const newArrIngrdients = orderdPizza.extraIngredients.filter((value, i) => {
        if (i != indexIngrdient) {
          return value;
        }
      });

      setOrderdPizza(orderdPizza => {
        return { ...orderdPizza, extraIngredients: newArrIngrdients, costExtraIngredients: +(orderdPizza.costExtraIngredients -= price).toFixed(2) };
      });
    }
  };

  return (
    <div className="f_ac">
      <button onClick={minusOne} style={{ visibility: display }} className="bkgr__wh f_jc-ac bd bdr5">
        <LuMinus size={15} />
      </button>

      <p style={{ visibility: display }} className="bkgr__wh pl5 pr5">
        {qty}
      </p>

      <button onClick={plusOne} className="mr10 bkgr__wh f_jc-ac bd bdr5">
        <HiOutlinePlusSm size={15} />
      </button>

      <p className="wt85">{price} USD</p>
    </div>
  );
};

export default IngredientsPanel;
