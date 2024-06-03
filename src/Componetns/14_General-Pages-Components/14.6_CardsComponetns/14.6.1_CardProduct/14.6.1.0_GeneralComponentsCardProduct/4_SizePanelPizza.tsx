import { FC } from 'react';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IOrderItem } from '../14.6.1.1_CardProduct/CardProduct';
import onChangBasisSizePizza from '../../../../10_Utilities/onChangBasisSizePizza';

interface IProps {
  data: IPizza;
  order: IOrderItem;
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem>>;
  langugeApp: typeof english;
}

const SizePanelPizza: FC<IProps> = ({ data, order, setOrder, langugeApp }) => {
  return (
    <div className="mt15 wt270 " onClick={e => onChangBasisSizePizza(e, setOrder)}>
      <PanelBasis data={data} order={order} langugeApp={langugeApp} />
      <PanelSize data={data} order={order} langugeApp={langugeApp} />
    </div>
  );
};

// PANELBASIS -------------------------------------

interface IPanelBasis {
  data: IPizza;
  order: IOrderItem;
  langugeApp: typeof english;
}

export const PanelBasis: FC<IPanelBasis> = ({ data, order, langugeApp }) => {
  const text: { [key: string]: string } = langugeApp.textCardProduct.textGeneral;

  return (
    <div className="f_jc">
      {data.basis.map((value, i) => {
        const activeBtn = value == order.parameters.basis ? 'btn__active' : 'bkgr__br-lt';

        return (
          <button key={i} className={`fw600 wt133 fs16 bd bdr5  ${activeBtn}`} data-basis={value}>
            {text[value]}
          </button>
        );
      })}
    </div>
  );
};

// PANELSIZE --------------------------------------------------

interface IPanelSize {
  data: IPizza;
  order: IOrderItem;
  langugeApp: typeof english;
}

export const PanelSize: FC<IPanelSize> = ({ data, order, langugeApp }) => {
  const text = langugeApp.textCardProduct.textGeneral;
  return (
    <div className="f_jc">
      {data.size
        // .sort((a, b) => a.size - b.size)
        .map((value, i) => {
          const activeBtn = value.size == order.parameters.size ? 'btn__active' : 'bkgr__br-lt';

          return (
            <button key={i} data-pizza-size={value.size} data-pizza-price={value.price} data-pizza-weight={value.weight} className={`fs16 fw600 bd bdr5 wt88 f_jc-ac ${activeBtn}`}>
              {value.size} {text.cm}
            </button>
          );
        })}
    </div>
  );
};

export default SizePanelPizza;
