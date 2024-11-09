
// Basis Interface ------------------------------------
export interface IBasis {
  name: string;
  price: number;
}

// Size Interface ------------------------------------
export interface ISize {
  size: number;
  units: string;
  price: number;
  weight: number;
  quantity: number;
}

// Extra Ingredients Interface -------------------------
export interface IExtraIngredient {
  name: string;
  price: number;
}

// Product Interfaces ------------------------------
export interface IProduct {
  _id: string;
  name: string;
  img: string;
  size: ISize[];
  basis: IBasis[];
  ingredients: string[];
  extraIngredients: IExtraIngredient[];
  isPopular: boolean;
  dishType: string;
  tags: string[];
}



