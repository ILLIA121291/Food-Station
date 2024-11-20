import classes from './FormCardPaymentMethod.module.css';
import classesGlobal from '../../../../css/globalCCS.module.css';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';
import english from '../../../../language/english';
import BlockCardNumber from '../1_block_card_number/BlockCardNumber';
import BlockCvcCode from '../2_block_cvc_code/BlockCvcCode';
import { useDispatch } from 'react-redux';
import { addPayment } from '../../../0_CartPage/sliceCart';

// Interface -----------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT -----------------------------------
const FormCardPaymentMethod: FC<IProps> = () => {
  const dispatch = useDispatch();

  // RENDERING COMPONENT ----------------------------------------------------
  return (
    <Formik
      // Начальное состояние формы;
      initialValues={{
        type: 'card',
        cardNumber: '',
        cvcCode: '',
        month: '',
        year: '',
      }}
      // Валидация формы;
      validationSchema={Yup.object({
        //cardNumber: Yup.string().matches(/^[0-9]+$/, 'Только цыфры').min(16, 'Должно быть 16 символов').max(16, "Должно быть не больше 16").required('Введите номер карты'),
        //cvcCode: Yup.string().matches(/^[0-9]+$/, 'Только цыфры').min(3, "CVC - Минему 3 символа").max(3, "CVC - Максимум 3 символа").required('Укажите CVC код'),
        //month: Yup.string().matches(/^[0-9]+$/, 'Только цыфры').min(2, ).max(2).required('Укажите месяц'),
        //year: Yup.string().matches(/^[0-9]+$/, 'Только цыфры').min(2).max(2).required('Укажите год')
      })}
      onChange={(value: any) => {
        console.log(value);
      }}
      // Submit формы;
      onSubmit={value => {
        dispatch(addPayment(value));
      }}
    >
      <Form className={classes.form}>
        <div className={classes.card}>
          <BlockCardNumber />
          <BlockCvcCode />
        </div>
        <button type="submit" className={classesGlobal.btn}>
          Pay
        </button>
      </Form>
    </Formik>
  );
};

export default FormCardPaymentMethod;
