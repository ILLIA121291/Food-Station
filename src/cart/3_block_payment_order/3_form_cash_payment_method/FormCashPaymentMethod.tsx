import classes from './FormCashPaymentMethod.module.css';
import classesForm from '../0_BlockPaymentOrder/BlockPaymentOrder.module.css';
import classesGlobal from '../../../css/globalCCS.module.css';
import { FC } from 'react';
import english from '../../../language/english';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Interface -----------------------------------

interface IProps {
  langugeApp: typeof english;
}

// COMPONENT ------------------------------------
const FormCashPaymentMethod: FC<IProps> = () => {
  // RENDERING COMPONENT -------------------------
  return (
    <Formik
      // Начальное состояние формы;
      initialValues={{
        cashAmount: 0,
      }}
      // Валидация формы;
      validationSchema={Yup.object({
        //cardNumber: Yup.string().matches(/^[0-9]+$/, 'Только цыфры').min(16, 'Должно быть 16 символов').max(16, "Должно быть не больше 16").required('Введите номер карты'),
      })}
      // Submit формы;
      onSubmit={value => {
        console.log(value);
      }}
    >
      <Form className={`${classesForm.form} ${classes.form}`}>
        <label htmlFor="cashAmount" className={`${classesForm.title} ${classes.label}`}>
          If you need change from cash, please indicate your amount.
        </label>
        <Field name="cashAmount" type="number" className={`${classesForm.input} ${classes.input}`} />
        <button className={classesGlobal.btn} type="submit">
          Pay
        </button>
      </Form>
    </Formik>
  );
};

export default FormCashPaymentMethod;
