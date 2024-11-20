import classesForm from '../0_FormCardPaymentMethod/FormCardPaymentMethod.module.css';
import classes from './BlockMothYear.module.css';
import { FC } from 'react';
import { Field } from 'formik';

// Interface ---------------------------------------
interface IProps {}

// COMPONENT ----------------------------------------
const BlockMothYear: FC<IProps> = () => {
  // RENDERING COMPONENT ----------------------------
  return (
    <div className={`${classes.container}`}>
      <h6 className={classesForm.title}>Expiration date</h6>
      <div className={classes.blockInputs}>
        <Field name="month" className={`${classesForm.input} ${classes.inputMonthYear}`} type="number" placeholder="mm" />/{/* Year */}
        <Field name="year" className={`${classesForm.input} ${classes.inputMonthYear}`} type="number" placeholder="yy" />
      </div>
    </div>
  );
};

export default BlockMothYear;
