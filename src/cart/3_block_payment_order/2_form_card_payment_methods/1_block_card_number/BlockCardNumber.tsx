import classesFrom from '../0_FormCardPaymentMethod/FormCardPaymentMethod.module.css';
import classes from './BlockCardNumber.module.css';
import { FC, useState } from 'react';
import { Field } from 'formik';
import BlockErrorMessages from '../../../../forms/FormsComponents/BlockErrorMessages/BlockErrorMessages';

// Interface -----------------------------------

interface IProps {}

// COMPONENT ----------------------------------
const BlockCardNumber: FC<IProps> = () => {
  // RENDERING COMONENT ------------------------
  return (
    <div className={classes.container}>
      <label htmlFor="cardNumber" className={classesFrom.title}>
        Card Number
      </label>
      <Field name="cardNumber" type="number" className={`${classesFrom.input}`} placeholder="000 000 000 000" />
      <BlockErrorMessages name="cardNumber" />
    </div>
  );
};

export default BlockCardNumber;
