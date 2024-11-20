import classeForm from '../../../css/globalForm.module.css';
import classesGlobal from '../../../css/globalCCS.module.css';
import classesCartPage from '../../0_CartPage/CartPage.module.css';
import { Formik, Form, Field } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';
import BlockErrorMessages from '../../../forms/FormsComponents/BlockErrorMessages/BlockErrorMessages';
import english from '../../../language/english';
import { useDispatch } from 'react-redux';
import { addDeliveryDetails } from '../../0_CartPage/sliceCart';
import IDelivery from '../../0_CartPage/interface/IDelivery';

// Interface -----------------------------------
interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT -----------------------------------
const FormDeliveryDetails: FC<IProps> = ({ setDisplayCartPageComponent }) => {
  const dispatch = useDispatch();

  // RENDERING COMPONENT ------------------------
  return (
    <Formik
      // Начальное состояние формы;
      initialValues={{
        name: '',
        surname: '',
        phone: '',
        address: '',
      }}
      validationSchema={Yup.object({
        // login: Yup.string().min(2, textValidation.minimumSymbols).required(textValidation.enterLogin),
        // password: Yup.string().min(2, textValidation.minimumSymbols).required(textValidation.enterPassword),
      })}
      onSubmit={value => {
        // Данное дейстие записывает полученне данные для доставки в глобальное состояние;
        dispatch(addDeliveryDetails(value));
        // Данное действие переключае на следующий компонент;
        setDisplayCartPageComponent('BlockPaymentOrder');
      }}
    >
      <Form className={classeForm.form}>
        {/* Name */}
        <label htmlFor="name" className={classesCartPage.label}>
          Name
        </label>
        <Field name="name" className={classeForm.formInput} type="text" placeholder="Bob" />
        <BlockErrorMessages name="name" />

        {/* Surname */}
        <label htmlFor="surname" className={classesCartPage.label}>
          Sername
        </label>
        <Field name="surname" className={classeForm.formInput} type="text" placeholder="Tompsan" />
        <BlockErrorMessages name="surname" />

        {/* Phone */}
        <label htmlFor="phone" className={classesCartPage.label}>
          Phone
        </label>
        <Field name="phone" className={classeForm.formInput} type="number" placeholder="201-997-9458" />
        <BlockErrorMessages name="phone" />

        {/* Address*/}
        <label htmlFor="address" className={classesCartPage.label}>
          Address
        </label>
        <Field name="address" className={classeForm.formInput} type="text" placeholder="155-135 Morgan Pl, North Arlington" />
        <BlockErrorMessages name="address" />

        {/* Submit BTN */}
        <button className={`${classesGlobal.btn} `} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormDeliveryDetails;
