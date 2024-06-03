import { FC } from 'react';
import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IOrderItem } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import useDisplayPriceInCurrency from '../../../../../../14_General-Pages-Components/14.2_CurrencyPanel/useDisplayPriceInCurrency';
import { PanelBasis, PanelSize } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.0_GeneralComponentsCardProduct/4_SizePanelPizza';
import { IPizza } from '../../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import IngredientsPanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.0_GeneralComponentsCardProduct/3_IngredientsPanel';
import onChangBasisSizePizza from '../../../../../../10_Utilities/onChangBasisSizePizza';

// Props Interface --------------------------------------------
interface IProps {
  updatedOrder: IOrderItem;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrderItem>>;
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
  updatedOrder: IOrderItem;
  langugeApp: typeof english;
}

const Basis: FC<IBasis> = ({ updatedOrder, langugeApp }) => {
  return (
    <li className="mt5">
      <p>Basis: {updatedOrder.parameters.basis}</p>
      <PanelBasis data={updatedOrder.data as IPizza} order={updatedOrder} langugeApp={langugeApp} />
    </li>
  );
};

// Size -------------------------------------------------------------

interface ISize {
  updatedOrder: IOrderItem;
  langugeApp: typeof english;
}

const Size: FC<ISize> = ({ updatedOrder, langugeApp }) => {
  return (
    <li className="mt5">
      <p>Size: {updatedOrder.parameters.size}</p>
      <PanelSize data={updatedOrder.data as IPizza} order={updatedOrder} langugeApp={langugeApp} />
    </li>
  );
};

//  Ingredients Extra --------------------------------------------------

interface IIngredientsExtra {
  updatedOrder: IOrderItem;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrderItem>>;
  langugeApp: typeof english;
}

const IngredientsExtra: FC<IIngredientsExtra> = ({ updatedOrder, setUpdateOrder, langugeApp }) => {
  return (
    <li>
      <p>Ingredients Extra</p>
      <IngredientsPanel order={updatedOrder} setOrder={setUpdateOrder} langugeApp={langugeApp} />
    </li>
  );
};

export default DescriptionOrderItem;
