import { FC } from 'react';
import './3.3_ExtraIngredientsList.scss';
import IAddExtraIngredient from '../../../../../../Interfaces/IAddExtraIngredient';
import english from '../../../../../../language/english';
import countingQuantityExtraIngredients from '../../../../../../Componetns/14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/5_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel/countingQuantityExtraIngredients';
import IProduct from '../../../../../../Interfaces/IProduct';

// Extra Ingridients List ---------------------------

interface IExtraIngredientsList {
  data: IProduct;
  list: IAddExtraIngredient[];
  langugeApp: typeof english;
  displayEditorPanel: boolean;
}

const ExtraIngredientsList: FC<IExtraIngredientsList> = ({ data, list, displayEditorPanel }) => {
  const closeSize = list.length == 0 ? 0 : list.length * 22;

  return (
    <>
      {data.extraIngredients.length == 0 ? null : (
        <li className="mt5">
          Extra Ingredients: {countingQuantityExtraIngredients(list)} qty
          <ul
            className="tran__ht1000"
            style={{
              height: displayEditorPanel ? '132px' : `${closeSize}px`,
            }}
          >
            {list.map((value, i) => {
              return (
                <li className="pt5" key={i}>
                  - {value.name}
                </li>
              );
            })}
          </ul>
        </li>
      )}
    </>
  );
};

export default ExtraIngredientsList;