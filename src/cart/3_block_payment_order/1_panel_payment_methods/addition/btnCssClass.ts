import classes from '../PanelPaymentMethods.module.css';

const btnCssClass = (state: string, paymentMethod: string): string => {
  if (state == paymentMethod) {
    return `${classes.btn}  ${classes.btnActive}`;
  }

  return classes.btn;
};

export default btnCssClass;
