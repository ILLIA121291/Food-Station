import { FC, MouseEvent, useEffect, useState, useRef } from 'react';

import { IoIosCloseCircle } from 'react-icons/io';
import toFixedNumber from '../../../utilities/toFixedNumber';

import displayPriceInCurrency from '../../../panels/CurrencyPanel/displayPriceInCurrency';
import { useSelector } from 'react-redux';
import { IStateStore } from '../../../app/stateStore';

import ListExtraIngredients from '../1_list_extra_ingredients/ListExtraIngredients';
import IAddExtraIngredient from '../../../interfaces/IAddExtraIngredient';
import countingQuantityExtraIngredients from './countingQuantityExtraIngredients';
import english from '../../../language/english';
import IProduct from '../../../interfaces/IProduct';
import IOrder from '../../../interfaces/IOrder';

// Interface -------------------------------------------------------
interface IProps {
  data: IProduct;
  langugeApp: typeof english;
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  className?: string;
}

// COMPONENT --------------------------------------------------------
const ExtraIngredientsPanel: FC<IProps> = ({ order, setOrder, data, langugeApp, className = '' }) => {
  const [listState, setListState] = useState<boolean>(false);
  const [displayInfoMessage, setDisplayInfoMessage] = useState({ display: false, message: '' });
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);

  const text = langugeApp.textCardProduct.textErrorMessage;
  const textGen = langugeApp.textCardProduct.textGeneral;

  const refUl = useRef<HTMLUListElement>(null);
  let colorImgBtnAdd = order.extraIngredients!.length != 0 ? 'green' : 'black';

  // Click on Window Close Ingredients List ------------------------------------------------------------
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

  // Reset All Ingredients -----------------------------------------------------
  const resetAllIngredients = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (order.extraIngredients!.length != 0) {
      setOrder(order => {
        return {
          ...order,
          priceExtra: 0,
          extraIngredients: [],
        };
      });
    }
  };

  // Disable Information Message ----------------------------------------------
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

  // Add-Remove Ingredient ------------------------------------------------------------------------

  const addRemoveIngredient = (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLUListElement>) => {
    const name = (e.target as HTMLButtonElement).dataset.name!;
    const price = Number((e.target as HTMLButtonElement).dataset.price);
    // Add One Ingridient ----------------------------------------------------
    if ((e.target as HTMLButtonElement).classList.contains('addIngridient')) {
      if (order.extraIngredients.length == 0) {
        setOrder(order => {
          return {
            ...order,
            priceExtra: toFixedNumber(price),
            extraIngredients: [{ name, price, quantity: 1, cost: price }] as IAddExtraIngredient[],
          };
        });
      } else {
        let totalAddedExtraIngredients: number = 1;

        order.extraIngredients!.forEach((value: IAddExtraIngredient) => {
          totalAddedExtraIngredients += value.quantity;
        });

        if (totalAddedExtraIngredients > 6) {
          setDisplayInfoMessage({ display: true, message: text.onlySixExtraIngredients });
          disableInformationMessage();
        } else {
          let qtyThisIngredientInOrder: number = 0;

          for (let i = 0; i < order.extraIngredients!.length; i++) {
            if (order.extraIngredients![i].name == name) {
              qtyThisIngredientInOrder = order.extraIngredients![i].quantity + 1;
              break;
            }
          }

          if (qtyThisIngredientInOrder == 0) {
            setOrder(order => {
              return {
                ...order,
                priceExtra: toFixedNumber(order.priceExtra + price),
                extraIngredients: [...order.extraIngredients!, { name, price, quantity: 1, cost: toFixedNumber(1 * price) }] as IAddExtraIngredient[],
              };
            });
          } else if (qtyThisIngredientInOrder > 3) {
            setDisplayInfoMessage({ display: true, message: text.onlyThreeSameExtraIngredients });
            disableInformationMessage();
          } else {
            let filterArr: IAddExtraIngredient[] = order.extraIngredients!.filter((value: IAddExtraIngredient) => value.name != name);

            filterArr.push({ name, price, quantity: qtyThisIngredientInOrder, cost: toFixedNumber(qtyThisIngredientInOrder * price) });

            let priceExtraIngredients: number = 0;

            filterArr.forEach(value => (priceExtraIngredients += value.cost));

            setOrder(order => {
              return {
                ...order,
                priceExtra: toFixedNumber(priceExtraIngredients),
                extraIngredients: filterArr,
              };
            });
          }
        }
      }
    }

    // Remove One Ingridient ----------------------------------------------------
    if ((e.target as HTMLButtonElement).classList.contains('removeIngridient')) {
      const newArrIngridients = order.extraIngredients
        .map((value: IAddExtraIngredient) => {
          if (value.name == name) {
            return {
              name: value.name,
              price: value.price,
              quantity: value.quantity - 1,
              cost: toFixedNumber((value.quantity - 1) * price),
            };
          } else {
            return value;
          }
        })
        .filter((value: IAddExtraIngredient) => value.quantity > 0);

      let priceExtra: number = 0;

      newArrIngridients.forEach((value: IAddExtraIngredient) => (priceExtra += value.cost));

      setOrder(order => {
        return {
          ...order,
          priceExtra: toFixedNumber(priceExtra),
          extraIngredients: newArrIngridients,
        };
      });
    }
  };

  // RENDERING COMPONENT --------------------------------------------------------------------
  return (
    <div
      className={`pos_rel bd wt280 bdr10 fw600 us-se cur-poi bkgr__br-lt ${className}`}
      onClick={e => {
        e.stopPropagation(), setListState(!listState);
      }}
    >
      <p className="tx-tr-cap mt5 tx-al-c">{textGen.extraIngredients}</p>
      <div className="f_jc_sb p5 ">
        <div className="f_ac wt80">
          <p className="wt60">
            {textGen.total}: {countingQuantityExtraIngredients(order.extraIngredients)}
          </p>
          <button className="bkgr__tra f_jc-ac ml5" onClick={e => resetAllIngredients(e)}>
            <IoIosCloseCircle size={20} color="red" />
          </button>
        </div>

        <div className=" f_jc-ac">+ {displayPriceInCurrency(currency, order.priceExtra)}</div>

        <p style={{ color: colorImgBtnAdd }} className="extra-ingre__btn fs16 wt45 bkgr__tra fw600 tx-al-l r">
          + {textGen.add}
        </p>

        <ListExtraIngredients data={data} listState={listState} order={order} langugeApp={langugeApp} currency={currency} refUl={refUl} displayInfoMessage={displayInfoMessage} addRemoveIngredient={addRemoveIngredient} />
      </div>
    </div>
  );
};

export default ExtraIngredientsPanel;
