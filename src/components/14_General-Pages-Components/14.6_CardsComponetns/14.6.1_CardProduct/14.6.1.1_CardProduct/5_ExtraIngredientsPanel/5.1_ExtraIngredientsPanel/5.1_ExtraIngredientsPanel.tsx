import './5.1_ExtraIngredientsPanel.scss';
import { FC, MouseEvent, useEffect, useState, useRef } from 'react';

import { IoIosCloseCircle } from 'react-icons/io';
import toFixedNumber from '../../../../../../../utilities/toFixedNumber';

import useDisplayPriceInCurrency from '../../../../../14.2_CurrencyPanel/useDisplayPriceInCurrency';
import { useSelector } from 'react-redux';
import { IStateStore } from '../../../../../../../app/stateStore';

import ListExtraIngredients from '../5.2_ListExtraIngredients/5.2_ListExtraIngredients';
import IAddExtraIngredient from '../../../../../../../Interfaces/IAddExtraIngredient';
import countingQuantityExtraIngredients from './countingQuantityExtraIngredients';
import english from '../../../../../../../language/english';
import IProduct from '../../../../../../../Interfaces/IProduct';
import IOrder from '../../../../../../../Interfaces/IOrder';

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
  let colorImgBtnAdd = order.parameters.extraIngredients!.length != 0 ? 'green' : 'black';

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

    if (order.parameters.extraIngredients!.length != 0) {
      setOrder(order => {
        return {
          ...order,
          priceExtra: 0,
          parameters: {
            ...order.parameters,
            extraIngredients: [],
          },
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
      if (order.parameters.extraIngredients.length == 0) {
        setOrder(order => {
          return {
            ...order,
            priceExtra: toFixedNumber(price),
            parameters: {
              ...order.parameters,
              extraIngredients: [{ name, price, quantity: 1, cost: price }] as IAddExtraIngredient[],
            },
          };
        });
      } else {
        let totalAddedExtraIngredients: number = 1;

        order.parameters.extraIngredients!.forEach((value: IAddExtraIngredient) => {
          totalAddedExtraIngredients += value.quantity;
        });

        if (totalAddedExtraIngredients > 6) {
          setDisplayInfoMessage({ display: true, message: text.onlySixExtraIngredients });
          disableInformationMessage();
        } else {
          let qtyThisIngredientInOrder: number = 0;

          for (let i = 0; i < order.parameters.extraIngredients!.length; i++) {
            if (order.parameters.extraIngredients![i].name == name) {
              qtyThisIngredientInOrder = order.parameters.extraIngredients![i].quantity + 1;
              break;
            }
          }

          if (qtyThisIngredientInOrder == 0) {
            setOrder(order => {
              return {
                ...order,
                priceExtra: toFixedNumber(order.priceExtra + price),
                parameters: {
                  ...order.parameters,
                  extraIngredients: [...order.parameters.extraIngredients!, { name, price, quantity: 1, cost: toFixedNumber(1 * price) }] as IAddExtraIngredient[],
                },
              };
            });
          } else if (qtyThisIngredientInOrder > 3) {
            setDisplayInfoMessage({ display: true, message: text.onlyThreeSameExtraIngredients });
            disableInformationMessage();
          } else {
            let filterArr: IAddExtraIngredient[] = order.parameters.extraIngredients!.filter((value: IAddExtraIngredient) => value.name != name);

            filterArr.push({ name, price, quantity: qtyThisIngredientInOrder, cost: toFixedNumber(qtyThisIngredientInOrder * price) });

            let priceExtraIngredients: number = 0;

            filterArr.forEach(value => (priceExtraIngredients += value.cost));

            setOrder(order => {
              return {
                ...order,
                priceExtra: toFixedNumber(priceExtraIngredients),
                parameters: {
                  ...order.parameters,
                  extraIngredients: filterArr,
                },
              };
            });
          }
        }
      }
    }

    // Remove One Ingridient ----------------------------------------------------
    if ((e.target as HTMLButtonElement).classList.contains('removeIngridient')) {
      const newArrIngridients = order.parameters.extraIngredients
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
          parameters: {
            ...order.parameters,
            extraIngredients: newArrIngridients,
          },
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
            {textGen.total}: {countingQuantityExtraIngredients(order.parameters.extraIngredients)}
          </p>
          <button className="bkgr__tra f_jc-ac ml5" onClick={e => resetAllIngredients(e)}>
            <IoIosCloseCircle size={20} color="red" />
          </button>
        </div>

        <div className=" f_jc-ac">+ {useDisplayPriceInCurrency(currency, order.priceExtra)}</div>

        <p style={{ color: colorImgBtnAdd }} className="extra-ingre__btn fs16 wt45 bkgr__tra fw600 tx-al-l r">
          + {textGen.add}
        </p>

        <ListExtraIngredients data={data} listState={listState} order={order} langugeApp={langugeApp} currency={currency} refUl={refUl} displayInfoMessage={displayInfoMessage} addRemoveIngredient={addRemoveIngredient} />
      </div>
    </div>
  );
};

export default ExtraIngredientsPanel;
