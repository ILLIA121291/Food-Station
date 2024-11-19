import classeForm from '../../../css/globalForm.module.css';
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
        addressOne: '',
        addressTwo: '',
      }}
      validationSchema={Yup.object({
        // login: Yup.string().min(2, textValidation.minimumSymbols).required(textValidation.enterLogin),
        // password: Yup.string().min(2, textValidation.minimumSymbols).required(textValidation.enterPassword),
      })}
      onSubmit={value => {
        const delivery: IDelivery = {
          name: value.name,
          surname: value.surname,
          phone: +value.phone,
          address: value.addressOne + ' ' + value.addressTwo,
        };

        // Данное дейстие записывает полученне данные для доставки в глобальное состояние;
        dispatch(addDeliveryDetails(delivery));

        setDisplayCartPageComponent('BlockPayment');
      }}
    >
      <Form className={classeForm.form}>
        {/* Name */}
        <Field name="name" className={classeForm.formInput} type="text" placeholder="Name" />
        <BlockErrorMessages name="name" />

        {/* Surname */}
        <Field name="surname" className={classeForm.formInput} type="text" placeholder="Surname" />
        <BlockErrorMessages name="surname" />

        {/* Phone */}
        <Field name="phone" className={classeForm.formInput} type="number" placeholder="Phone" />
        <BlockErrorMessages name="phone" />

        {/* Address line - 1 */}
        <Field name="addressOne" className={classeForm.formInput} type="text" placeholder="Address Line - 1" />
        <BlockErrorMessages name="addressOne" />

        {/* Address line - 2 */}
        <Field name="addressTwo" className={classeForm.formInput} type="text" placeholder="Address Line - 2" />
        <BlockErrorMessages name="addressTwo" />

        <button className={`${classeForm.formBtn} ${classeForm.formBtnActive}`} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormDeliveryDetails;
