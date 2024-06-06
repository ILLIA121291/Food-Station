import { FC, useEffect, useRef, useState } from 'react';
import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import useDisplayPriceInCurrency from '../../../../../../14_General-Pages-Components/14.2_CurrencyPanel/useDisplayPriceInCurrency';
import { IOrder } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';

import { FaPencil } from 'react-icons/fa6';
import EditorPanel from './3.3_EditorPanel';
import { IAddExtraIngredient } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
import EditorBtn from './3.2_EditorBtn';

// Props Interface --------------------------------------------
interface IProps {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  currency: string;
  langugeApp: typeof english;
}

const DescriptionOrderItem: FC<IProps> = ({ updatedOrder, setUpdateOrder, currency, langugeApp }) => {
  const [displayEditorPanel, setDisplayEditorPanel] = useState<boolean>(false);
  const [hiddenEditorPanel, setHiddenEditorPanel ] = useState<string>('over-hid')
  const [btnEditor , setBtnEditor] = useState<boolean>(false)

  const weight = updatedOrder.parameters.weight ? <LI>Weight: {updatedOrder.parameters.weight} g.</LI> : null;
  const volume = updatedOrder.parameters.volume ? <LI>Volume: {updatedOrder.parameters.volume} l.</LI> : null;
  const quantity = updatedOrder.parameters.quantity > 1 ? <LI>Quantity: {updatedOrder.parameters.quantity} ps.</LI> : null;
  const basis = updatedOrder.parameters.basis ? <LI>Basis: {updatedOrder.parameters.basis.name}</LI> : null;
  const size = updatedOrder.parameters.diameter ? <LI>Size: {updatedOrder.parameters.diameter}</LI> : null;
  const ingredientsExtra = updatedOrder.parameters.extraIngredients.length != 0 ? <ExtraIngredientsList list={updatedOrder.parameters.extraIngredients} langugeApp={langugeApp} /> : null;
  const extra = updatedOrder.priceExtra !=0 ? <li>Extra: {useDisplayPriceInCurrency(currency, updatedOrder.priceExtra)}</li> : null;
  const total = updatedOrder.priceExtra !=0 ? <li>Total: {useDisplayPriceInCurrency(currency, updatedOrder.priceExtra + updatedOrder.price)}</li> : null;
 

  useEffect(() => {   
      if (displayEditorPanel) {
        setBtnEditor(true)
        setTimeout(() => {
          setHiddenEditorPanel("")
          setBtnEditor(false)
        }, 1000)
      } else {
        setHiddenEditorPanel("over-hid")
      }


  },[displayEditorPanel])


  return (
    <div className="wt270">
      <EditorBtn 
      name={updatedOrder.name}
      disabled={btnEditor} 
      setDisplayEditorPanel={setDisplayEditorPanel} 
      displayEditorPanel={displayEditorPanel}/>

      <ul>
        {weight}
        {volume}
        {quantity}
        {basis}
        {size}
        {ingredientsExtra}
        <li className="mt15">Price: {useDisplayPriceInCurrency(currency, updatedOrder.price)}</li>
        {extra}
        {total}
      </ul>
      <div 
      className={`tran__ht1000 mt15 wt285 ${hiddenEditorPanel}`}
      style={displayEditorPanel ? { height: '120px' } : { height: '0px'}}
      >
        <EditorPanel updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder} currency={currency} langugeApp={langugeApp} />
      </div>
    </div>
  );
};

// LI --------------------------------------------------

interface ILI {
  children: any;
}

const LI: FC<ILI> = ({ children }) => {
  return <li className="mt5">{children}</li>;
};

// Extra Ingridients List ---------------------------

interface IExtraIngredientsList {
  list: IAddExtraIngredient[];
  langugeApp: typeof english;
}

const ExtraIngredientsList: FC<IExtraIngredientsList> = ({ list }) => {
  return (
    <div >
      Extra Ingredients:
      <ul>
        {list.map((value, i) => {
          return <li key={i}>- {value.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default DescriptionOrderItem;
