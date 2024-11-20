import {FC} from 'react'
import english from '../../../language/english'


// Interface -----------------------------------

interface IProps {
  langugeApp: typeof english
}



// COMPONENT ------------------------------------
const FormCashPaymentMethod:FC<IProps> = () => {
  
  // RENDERING COMPONENT -------------------------
  return (
    <div>
      FORM CASH PAYMENT METHOD 
    </div>
  )
}

export default FormCashPaymentMethod
