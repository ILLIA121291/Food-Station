import { FC } from 'react';
import english from '../../../language/english';
import IOrder from '../../../interfaces/IOrder';
import displayPriceInCurrency from '../../../panels/CurrencyPanel/displayPriceInCurrency';
import IAddExtraIngredient from '../../../interfaces/IAddExtraIngredient';

// Props Interface -----------------------------------------------------------------------
interface IProps {
  name: string;
  price: number;
  order: IOrder;
  currency: string;
  langugeApp: typeof english;
}

// COMPONENT --------------------------------------------------------------------------
const ItemExtraIngredients: FC<IProps> = ({ name, price, order, currency, langugeApp }) => {
  const text: { [key: string]: string } = langugeApp.textCardProduct.textExtraIngredients;

  let displayAddPanel: boolean = false;
  let displayQty: number = 0;

  order.extraIngredients!.forEach((value: IAddExtraIngredient) => {
    if (value.name == name) {
      displayAddPanel = true;
      displayQty = value.quantity;
    }
  });

  let display: 'visible' | 'hidden' = displayAddPanel ? 'visible' : 'hidden';

  // RENDERING COMPONENT ---------------------------------------------------
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
          {displayPriceInCurrency(currency, price)}
        </p>
      </div>
    </li>
  );
};

export default ItemExtraIngredients;
