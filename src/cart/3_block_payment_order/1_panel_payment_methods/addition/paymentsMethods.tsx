import { BsCashCoin } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";


const paymentMethods = [
  {type: 'card', imge: <AiFillCreditCard/>, paymentMethod: 'CardPaymentMethod'},
  {type: 'cash', imge: <BsCashCoin/>, paymentMethod: 'CashPaymentMethod'},
  ];

  export default paymentMethods