import { FC, MouseEvent, useEffect, useState, useRef } from 'react';

import { extraIngredientsPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import { IoIosCloseCircle } from 'react-icons/io';
import BlockErrorMessages from '../../../14.5_FormsComponents/BlockErrorMessages';
import toFixedNumber from '../../../../10_Utilities/toFixedNumber';

import { IExtraIngredient } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import useDisplayPriceInCurrency from '../../../14.2_CurrencyPanel/useDisplayPriceInCurrency';
import { useSelector } from 'react-redux';
import { IStateStore } from '../../../../13_App-Components/13.1_App/stateStore';

import onOffBodyScroll from '../../../../10_Utilities/onOffBodyScroll';
import { IOrderItem } from '../14.6.1.1_CardProduct/CardProduct';

// Interface -------------------------------------------------------
interface IProps {
  langugeApp: typeof english;
  order: IOrderItem;
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem>>;
}

const IngredientsPanel: FC<IProps> = ({ order, setOrder, langugeApp }) => {
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

  // Display Total Ingredients - Cost --------------------------------------------------

  let displayTotalIngredientsQty: number = 0;

  if (order.parameters.extraIngredients!.length != 0) {
    order.parameters.extraIngredients!.forEach((value: IExtraIngredient) => {
      displayTotalIngredientsQty += value.quantity;
    });
  }

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
    const name = (e.target as HTMLButtonElement).dataset.name;
    const price = Number((e.target as HTMLButtonElement).dataset.price);
    // Add One Ingridient ----------------------------------------------------
    if ((e.target as HTMLButtonElement).classList.contains('addIngridient')) {
      if (order.parameters.extraIngredients!.length == 0) {
        setOrder(order => {
          return {
            ...order,
            priceExtra: toFixedNumber(price),
            parameters: {
              ...order.parameters,
              extraIngredients: [{ name, price, quantity: 1, cost: price }],
            },
          };
        });
      } else {
        let totalAddedExtraIngredients: number = 1;

        order.parameters.extraIngredients!.forEach((value: IExtraIngredient) => {
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
                  extraIngredients: [...order.parameters.extraIngredients!, { name, price, quantity: 1, cost: toFixedNumber(1 * price) }],
                },
              };
            });
          } else if (qtyThisIngredientInOrder > 3) {
            setDisplayInfoMessage({ display: true, message: text.onlyThreeSameExtraIngredients });
            disableInformationMessage();
          } else {
            let filterArr: IExtraIngredient[] = order.parameters.extraIngredients!.filter((value: IExtraIngredient) => value.name != name);

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
      const newArrIngridients = order.parameters
        .extraIngredients!.map((value: IExtraIngredient) => {
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
        .filter((value: IExtraIngredient) => value.quantity > 0);

      let priceExtra: number = 0;

      newArrIngridients.forEach((value: IExtraIngredient) => (priceExtra += value.cost));

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

  return (
    <div
      className="mt15 pos_rel bd wt270 bdr10 fw600 us-se cur-poi bkgr__br-lt "
      onClick={e => {
        e.stopPropagation(), setListState(!listState);
      }}
    >
      <p className="tx-tr-cap mt5 tx-al-c">{textGen.extraIngredients}</p>
      <div className="f_jc_sb p5 ">
        <div className="f_ac wt80">
          <p className="wt60">
            {textGen.total}: {displayTotalIngredientsQty}
          </p>
          <button className="bkgr__tra f_jc-ac ml5" onClick={e => resetAllIngredients(e)}>
            <IoIosCloseCircle size={20} color="red" />
          </button>
        </div>

        <div className=" f_jc-ac">+ {useDisplayPriceInCurrency(currency, order.priceExtra)}</div>

        <p style={{ color: colorImgBtnAdd }} className="extra-ingre__btn fs16 wt45 bkgr__tra fw600 tx-al-l r">
          + {textGen.add}
        </p>

        <div className="extra-ingre__container bdr10 zindex150 bkgr__wh fw600 " style={listState ? { height: '250px', border: '1px solid #000' } : { height: '0px', border: '0px solid #000' }} onClick={e => e.stopPropagation()} onMouseEnter={() => onOffBodyScroll('hidden')} onMouseLeave={() => onOffBodyScroll('auto')}>
          <ul ref={refUl} className="wt270 p5" onClick={e => addRemoveIngredient(e)}>
            {extraIngredientsPizza.map((item, index) => {
              return <ItemIngridient key={index} name={item.name} price={item.price} order={order} langugeApp={langugeApp} currency={currency} />;
            })}
          </ul>
        </div>
        <BlockErrorMessages name="extra-ingredient" color="blc" className="wt260" message={displayInfoMessage.message} display={displayInfoMessage.display} />
      </div>
    </div>
  );
};

// AddIngridientPanel -----------------------------------------------------------------------

interface ItemIngridient {
  name: string;
  price: number;
  order: IOrderItem;
  currency: string;
  langugeApp: typeof english;
}

const ItemIngridient: FC<ItemIngridient> = ({ name, price, order, currency, langugeApp }) => {
  const text: { [key: string]: string } = langugeApp.textCardProduct.textExtraIngredients;

  let displayAddPanel: boolean = false;
  let displayQty: number = 0;

  order.parameters.extraIngredients!.forEach((value: IExtraIngredient) => {
    if (value.name == name) {
      displayAddPanel = true;
      displayQty = value.quantity;
    }
  });

  let display: 'visible' | 'hidden' = displayAddPanel ? 'visible' : 'hidden';

  return (
    <li data-name={name} data-price={price} className="addIngridient f_jc_sb p5 bkgr__br-lt-hov">
      <p data-name={name} data-price={price} className="addIngridient">
        {text[name]}
      </p>

      <div className="f_ac">
        <button data-name={name} data-price={price} style={{ visibility: display }} className="removeIngridient bkgr__wh f_jc-ac wt18 ht18 fs18 fw600 bd bdr5">
          -
        </button>

        <p style={{ visibility: display }} className="bkgr__wh pl5 pr5">
          {displayQty}
        </p>

        <button data-name={name} data-price={price} className="addIngridient mr10 bkgr__wh f_jc-ac wt18 ht18 fs18 fw600 bd bdr5">
          +
        </button>

        <p data-name={name} data-price={price} className="wt85 addIngridient">
          {useDisplayPriceInCurrency(currency, price)}
        </p>
      </div>
    </li>
  );
};

export default IngredientsPanel;
