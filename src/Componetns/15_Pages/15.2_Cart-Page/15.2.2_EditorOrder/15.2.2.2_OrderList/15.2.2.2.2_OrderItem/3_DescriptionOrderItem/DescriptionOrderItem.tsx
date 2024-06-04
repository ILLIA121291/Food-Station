import { FC } from 'react';
import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import useDisplayPriceInCurrency from '../../../../../../14_General-Pages-Components/14.2_CurrencyPanel/useDisplayPriceInCurrency';
import onChangBasisSizePizza from '../../../../../../10_Utilities/onChangBasisSizePizza';
import { IOrder } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
import BasisPanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/6_BasisPanel/BasisPanel';
import SizePanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/7_SizePanel/SizePanel';
import ExtraIngredientsPanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/5_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel';

// Props Interface --------------------------------------------
interface IProps {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  currency: string;
  langugeApp: typeof english;
}

const DescriptionOrderItem: FC<IProps> = ({ updatedOrder, setUpdateOrder, currency, langugeApp }) => {
  const weight = updatedOrder.parameters.weight ? <li className="mt5">Weight: {updatedOrder.parameters.weight} g.</li> : null;
  const volume = updatedOrder.parameters.volume ? <li className="mt5">Volume: {updatedOrder.parameters.volume} l.</li> : null;
  const quantity = updatedOrder.parameters.quantity ? <li className="mt5">Quantity: {updatedOrder.parameters.quantity} ps.</li> : null;
  const basis = updatedOrder.parameters.basis ? <Basis updatedOrder={updatedOrder} langugeApp={langugeApp} /> : null;
  const size = updatedOrder.parameters.size ? <Size updatedOrder={updatedOrder} langugeApp={langugeApp} /> : null;
  const ingredientsExtra = updatedOrder.parameters.extraIngredients ? <IngredientsExtra updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder} langugeApp={langugeApp} /> : null;

  return (
    <div className="wt270">
      <h6 className="tx-tr-cap fw600 fs18 mb5 editor-order__item-titel">{updatedOrder.name}</h6>
      <ul onClick={e => onChangBasisSizePizza(e, setUpdateOrder)}>
        <li>Price: {useDisplayPriceInCurrency(currency, updatedOrder.price)}</li>
        {weight}
        {volume}
        {quantity}
        {basis}
        {size}
        {ingredientsExtra}
      </ul>
    </div>
  );
};

// Basis ---------------------------------------------------------

interface IBasis {
  updatedOrder: IOrder;
  langugeApp: typeof english;
}

const Basis: FC<IBasis> = ({ updatedOrder, langugeApp }) => {
  return (
    <li className="mt5">
      <p>Basis: {updatedOrder.parameters.basis.name}</p>
      <BasisPanel data={updatedOrder.data} order={updatedOrder} langugeApp={langugeApp} />
    </li>
  );
};

// Size -------------------------------------------------------------

interface ISize {
  updatedOrder: IOrder;
  langugeApp: typeof english;
}

const Size: FC<ISize> = ({ updatedOrder, langugeApp }) => {
  return (
    <li className="mt5">
      <p>Size: {updatedOrder.parameters.size}</p>
      <SizePanel data={updatedOrder.data} order={updatedOrder} langugeApp={langugeApp} />
    </li>
  );
};

//  Ingredients Extra --------------------------------------------------

interface IIngredientsExtra {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  langugeApp: typeof english;
}

const IngredientsExtra: FC<IIngredientsExtra> = ({ updatedOrder, setUpdateOrder, langugeApp }) => {
  return (
    <li>
      <p>Ingredients Extra</p>
      <ExtraIngredientsPanel order={updatedOrder} setOrder={setUpdateOrder} data={updatedOrder.data} langugeApp={langugeApp} />
    </li>
  );
};

export default DescriptionOrderItem;
