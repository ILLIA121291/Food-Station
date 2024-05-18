import './CallMeForm.scss';
import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InformMassegeCallMeForm from '../13.2.11.2_InformMassegeCallMeForm/InformMassegeCallMeForm';
import useHttp from '../../../../11_Server-Components/11.1_useHttp/useHttp';

import { useDispatch } from 'react-redux';
import { noCloseModalWindow } from '../../../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';


interface IUserGetData {
  name: string;
  phone: string;
}

interface IUserSendData {
  role: 'Customer';
  action: string;
  name: string;
  phone: string;
  time: string;
  language: string | null;
  currency: string | null;
}

interface IProps {
  langugeApp: typeof english
}

const CallMeForm: FC <IProps>= () => {
  const dispatch = useDispatch();

  const [btnInputsState, setBtnInputsState] = useState<boolean>(false);

  const { request, process, setProcess } = useHttp();

  const postCustomerData = async (userGetData: IUserGetData) => {
    const userSendData: IUserSendData = {
      ...userGetData,
      role: 'Customer',
      action: 'Customer call required',
      time: new Date().toLocaleString(),
      language: localStorage.getItem('language'),
      currency: localStorage.getItem('currency'),
    };

    const getResponse = await request('https://jsonplaceholder.typicode.com/posts', 'POST', JSON.stringify(userSendData), { 'Content-type': 'application/json' });

    return console.log(getResponse), setProcess('success');
  };

  useEffect(() => {
    if (process != 'waiting') {
      setBtnInputsState(true);
    }

    if (process == 'error' || process == 'success') {
      setTimeout(() => {
        dispatch(noCloseModalWindow());
      }, 5000);
    }
  }, [process]);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(/^[aA-zZ]+$/, 'ТОЛЬКО БУКВЫ!!!')
          .min(2, 'Имя должно содержать минемум 2 симавола!')
          .required('Обязательное поле'),
        phone: Yup.number().min(3, 'Немение 3').required('Обязательное поле'),
      })}
      onSubmit={(values, actions) => {
        postCustomerData(values);

        setTimeout(() => {
          actions.resetForm({
            values: {
              name: '',
              phone: '',
            },
          });
        }, 4000);
      }}
    >
      <Form className="callmefrom__form fc">
        <label className="callmefrom__label" htmlFor="#name">
          Name
        </label>
        <Field className="callmefrom__input" id="name" name="name" type="text" disabled={btnInputsState} />
        <div className="callmefrom__error-contaner">
          <ErrorMessage className="callmefrom__error-message rc" name="name" component="p" />
        </div>

        <label className="callmefrom__label" htmlFor="#phone">
          Phone
        </label>
        <Field className="callmefrom__input" id="phone" name="phone" type="number" disabled={btnInputsState} />
        <div className="callmefrom__error-contaner">
          <ErrorMessage className="callmefrom__error-message rc" name="phone" component="p" />
        </div>

        <button className="callmefrom__btn " type="submit" disabled={btnInputsState}>
          Send
        </button>
        <InformMassegeCallMeForm process={process} />
      </Form>
    </Formik>
  );
};

export default CallMeForm;
