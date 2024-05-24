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
  const refUl = useRef<HTMLUListElement>(null);

  const [listState, setListState] = useState<boolean>(false);
  const [displayInfoMessage, setDisplayInfoMessage] = useState({ display: false, message: '' });

  let diplayImgBtnAdd = listState ? '- add' : '+ add';

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

  // console.log(orderdPizza.extraIngredients);

  return (
    <div className="mt15 pos_rel bd ">
      <p className="tx-tr-cap tx-al-c">extra ingredients</p>
      <div className="f_jc_sb p5">
        <div>
          total: {orderdPizza.extraIngredients.length}{' '}
          <button onClick={resetAllIngredients}>
            <IoIosCloseCircle size={15} />
          </button>
        </div>
        <p>+ {orderdPizza.costExtraIngredients} USD</p>
        <button className="extra-ingre__btn" onClick={() => setListState(!listState)}>
          {diplayImgBtnAdd}
        </button>
        <div className="extra-ingre__container bdr10 zindex150 bkgr__wh-bl fw600 over_hid" style={listState ? { height: refUl.current!.scrollHeight } : { height: '0px' }}>
          <ul ref={refUl} className="wt310 p5">
            {extraIngredientsPizza.map((item, index) => {
              return (
                <li key={index} className="f_jc_sb p5 us-se">
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
    <div className="f ">
      <button onClick={minusOne} style={{ visibility: display }} className="bkgr__wh f_jc-ac">
        <LuMinus size={15} />
      </button>

      <p style={{ visibility: display }} className="bkgr__wh  pl5 pr5">
        {qty}
      </p>

      <button onClick={plusOne} className="mr10 bkgr__wh f_jc-ac">
        <HiOutlinePlusSm size={15} />
      </button>
      <p>{price} USD</p>
    </div>
  );
};

export default IngredientsPanel;
