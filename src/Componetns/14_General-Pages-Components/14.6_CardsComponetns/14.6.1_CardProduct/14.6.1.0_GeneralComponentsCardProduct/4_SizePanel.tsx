import { FC, MouseEvent } from 'react';
import { IOrderdPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

interface IProps {
  dataPizza: IPizza;
  orderdPizza: IOrderdPizza;
  setOrderdPizza: React.Dispatch<React.SetStateAction<IOrderdPizza>>;
}

const SizePanel: FC<IProps> = ({ dataPizza, orderdPizza, setOrderdPizza }) => {
  const onChangBasisSize = (e: MouseEvent<HTMLDivElement>) => {
    const textInner = (e.target as HTMLButtonElement).innerText;

    if (textInner == 'standard' || textInner == 'thin') {
      setOrderdPizza(orderdPizza => {
        return {
          ...orderdPizza,
          basis: (e.target as HTMLButtonElement).innerText as 'standard' | 'thin',
        };
      });
    } else {
      setOrderdPizza(orderdPizza => {
        return {
          ...orderdPizza,
          size: +(e.target as HTMLButtonElement).innerText as 26 | 30 | 40,
        };
      });
    }
  };

  console.log(orderdPizza);
  return (
    <div className=" mt15" onClick={onChangBasisSize}>
      <PanelBasis dataPizza={dataPizza} orderdPizza={orderdPizza} setOrderdPizza={setOrderdPizza} />
      <PanelSize dataPizza={dataPizza} orderdPizza={orderdPizza} setOrderdPizza={setOrderdPizza} />
    </div>
  );
};

// PANELBASIS -------------------------------------

interface IPanelBasis {
  dataPizza: IPizza;
  orderdPizza: IOrderdPizza;
  setOrderdPizza: React.Dispatch<React.SetStateAction<IOrderdPizza>>;
}

const PanelBasis: FC<IPanelBasis> = ({ dataPizza, orderdPizza }) => {
  return (
    <div className="f">
      {dataPizza.basis.sort().map((value, i) => {
        const activeBtn = value == orderdPizza.basis ? 'rc' : '';

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
  dataPizza: IPizza;
  orderdPizza: IOrderdPizza;
  setOrderdPizza: React.Dispatch<React.SetStateAction<IOrderdPizza>>;
}

const PanelSize: FC<IPanelSize> = ({ dataPizza, orderdPizza }) => {
  return (
    <div className="f">
      {dataPizza.size
        .sort((a, b) => a.size - b.size)
        .map((value, i) => {
          const activeBtn = value.size == orderdPizza.size ? 'rc' : '';

          return (
            <button key={i} className={`fs16 p5 bd bdr5 wt103 f_jc-ac ${activeBtn}`}>
              {value.size} cm
            </button>
          );
        })}
    </div>
  );
};

export default SizePanel;
