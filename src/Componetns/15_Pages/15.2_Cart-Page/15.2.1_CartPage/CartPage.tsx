import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import './CartPage.scss';

import {FC} from 'react'

// Interface -----------------------------------------
interface IProps {
langugeApp: typeof english
}

const CartPage:FC <IProps>= () => {
  return (
    <div>
      This is cart page
    </div>
  )
}

export default CartPage
