import IAddExtraIngredient from "../../../../../interfaces/IAddExtraIngredient"


const arraysComparisonExtraIngredients = ( orderEI: IAddExtraIngredient[] , valueEI: IAddExtraIngredient[]  ): boolean => {

// } else if (size && basis && extraIngredientsLenght) {
//   const chekingArr = [];

//   value.parameters.extraIngredients.forEach((value: IAddExtraIngredient) => {
//     for (let i = 0; i < order.parameters.extraIngredients.length; i++) {
//       const name = value.name == order.parameters.extraIngredients[i].name;
//       const qty = value.quantity == order.parameters.extraIngredients[i].quantity;

//       if (name && qty) chekingArr.push(true);
//     }
//   });

//   if (chekingArr.length == order.parameters.extraIngredients.length) {
//     thisOrderInOrderList = true;
//     const quantity = value.quantity + order.quantity;

//     return {
//       ...value,
//       quantity,
//     };
//   } else {
//     return value;
//   }
// } else {

// RETURN FUNCTION ---------------------------------
return true

}

export default arraysComparisonExtraIngredients