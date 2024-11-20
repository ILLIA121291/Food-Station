import classesFrom from '../0_FormCardPaymentMethod/FormCardPaymentMethod.module.css';
import classes from './BlockCvcCode.module.css';
import { FC } from 'react';
import { ErrorMessage, Field } from 'formik';
import BlockMothYear from '../3_block_month_year/BlockMothYear';
// Interface --------------------------------
interface IProps {}

// COMPONETN ---------------------------------
const BlockCvcCode: FC<IProps> = () => {
  // RENDERING COMPONENT ---------------------
  return ( <>
    <div className={classes.container}>
      <BlockMothYear />
      <div className={classes.blockCvc}>
        <label htmlFor="cvcCode" className={classesFrom.title}>
          CVC
        </label>
        <Field name="cvcCode" className={`${classesFrom.input} ${classes.inputCvc}`} type="number" placeholder="123" />
      </div>
    </div>
      <ErrorMessage name='cvcCode' component="p" />
      <ErrorMessage name='month' component="p" />
      <ErrorMessage name='year' component="p" />
    </>
  );
};

export default BlockCvcCode;
