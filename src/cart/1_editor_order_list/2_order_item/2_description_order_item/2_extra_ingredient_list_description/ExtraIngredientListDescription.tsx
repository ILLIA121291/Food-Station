import { FC } from 'react';
import IAddExtraIngredient from '../../../../../interfaces/IAddExtraIngredient';
import english from '../../../../../language/english';
import countingQuantityExtraIngredients from '../../../../../components/cards/CardProduct/3_extra_Ingredients_panel/0_ExtraIngredientsPanel/countingQuantityExtraIngredients';
import IProduct from '../../../../../interfaces/IProduct';

// Extra Ingridients List ---------------------------

interface IExtraIngredientsList {
  data: IProduct;
  list: IAddExtraIngredient[];
  langugeApp: typeof english;
  displayEditorPanel: boolean;
}

const ExtraIngredientListDescription: FC<IExtraIngredientsList> = ({ data, list, displayEditorPanel }) => {
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

export default ExtraIngredientListDescription;
