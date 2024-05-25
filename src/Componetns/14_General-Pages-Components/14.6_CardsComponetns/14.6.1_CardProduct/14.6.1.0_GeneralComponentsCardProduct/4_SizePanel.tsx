import { FC, MouseEvent } from 'react';
import { IOrderPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import toFixedNumber from '../../../../10_Utilities/toFixedNumber';

interface IProps {
  data: IPizza;
  order: IOrderPizza;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>>;
}

const SizePanel: FC<IProps> = ({ data, order, setOrder }) => {
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
    <div className=" mt15" onClick={onChangBasisSize}>
      <PanelBasis data={data} order={order} setOrder={setOrder} />
      <PanelSize data={data} order={order} setOrder={setOrder} />
    </div>
  );
};

// PANELBASIS -------------------------------------

interface IPanelBasis {
  data: IPizza;
  order: IOrderPizza;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>>;
}

const PanelBasis: FC<IPanelBasis> = ({ data, order }) => {
  return (
    <div className="f">
      {data.basis.sort().map((value, i) => {
        const activeBtn = value == order.parameters.basis ? 'rc' : '';

        return (
          <button key={i} className={`wr155 fs16 p5 bd bdr5 ${activeBtn}`}>
            {value}
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
}

const PanelSize: FC<IPanelSize> = ({ data, order }) => {
  return (
    <div className="f">
      {data.size
        .sort((a, b) => a.size - b.size)
        .map((value, i) => {
          const activeBtn = value.size == order.parameters.size ? 'rc' : '';

          return (
            <button key={i} data-pizza-size={value.size} data-pizza-price={value.price} data-pizza-weight={value.weight} className={`fs16 p5 bd bdr5 wt103 f_jc-ac ${activeBtn}`}>
              {value.size} cm
            </button>
          );
        })}
    </div>
  );
};

export default SizePanel;
