import { FC, MouseEvent } from 'react';
import { IOrderPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

interface IProps {
  data: IPizza;
  order: IOrderPizza;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>>;
  langugeApp: typeof english;
}

const SizePanelPizza: FC<IProps> = ({ data, order, setOrder, langugeApp }) => {
  const onChangBasisSize = (e: MouseEvent<HTMLDivElement>) => {
    const textInner = (e.target as HTMLButtonElement).innerText;

    if (textInner == 'standard' || textInner == 'thin') {
      setOrder(order => {
        return {
          ...order,
          parameters: {
            ...order.parameters,
            basis: (e.target as HTMLButtonElement).innerText as 'standard' | 'thin',
          },
        };
      });
    } else {
      let price = Number((e.target as HTMLButtonElement).dataset.pizzaPrice!);
      let weight = Number((e.target as HTMLButtonElement).dataset.pizzaWeight!);

      setOrder(order => {
        return {
          ...order,
          parameters: {
            ...order.parameters,
            size: +(e.target as HTMLButtonElement).dataset.pizzaSize! as 26 | 30 | 40,
            price,
            weight,
          },

          total: {
            ...order.total,
            weight: weight * order.total.quantity,
          },
        };
      });
    }
  };

  return (
    <div className="mt15 wt270 " onClick={onChangBasisSize}>
      <PanelBasis data={data} order={order} setOrder={setOrder} langugeApp={langugeApp} />
      <PanelSize data={data} order={order} setOrder={setOrder} langugeApp={langugeApp} />
    </div>
  );
};

// PANELBASIS -------------------------------------

interface IPanelBasis {
  data: IPizza;
  order: IOrderPizza;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>>;
  langugeApp: typeof english;
}

const PanelBasis: FC<IPanelBasis> = ({ data, order, langugeApp }) => {
  const text: { [key: string]: string } = langugeApp.textCardProduct.textGeneral;

  return (
    <div className="f_jc">
      {data.basis.sort().map((value, i) => {
        const activeBtn = value == order.parameters.basis ? 'btn__active' : 'bkgr__br-lt';

        return (
          <button key={i} className={`fw600 wt133 fs16 bd bdr5  ${activeBtn}`}>
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
  order: IOrderPizza;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>>;
  langugeApp: typeof english;
}

const PanelSize: FC<IPanelSize> = ({ data, order, langugeApp }) => {
  const text = langugeApp.textCardProduct.textGeneral;
  return (
    <div className="f_jc">
      {data.size
        .sort((a, b) => a.size - b.size)
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
