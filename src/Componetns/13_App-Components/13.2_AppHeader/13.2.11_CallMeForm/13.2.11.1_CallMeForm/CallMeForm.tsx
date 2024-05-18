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
  langugeApp: typeof english;
}

const CallMeForm: FC<IProps> = ({ langugeApp }) => {
  const dispatch = useDispatch();
  const text = langugeApp.textAppHeader.textCallMeForm;

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
          .matches(/^[aA-zZ]+$/, text.onlyletters)
          .min(2, text.nameLength)
          .required(text.requiredFields),
        phone: Yup.string()
          .matches(/^[0-9]+$/, text.onlynumbers)
          .min(3, text.phonelength)
          .required(text.requiredFields),
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
      <Form className="fc f_ac fwt pt30 ht400">
        <h4 className="ftit">{text.titel}</h4>
        <label className="flab wt250 mt20" htmlFor="#name">
          {text.name}*
        </label>
        <Field className="finput" id="name" name="name" type="text" disabled={btnInputsState} />
        <div className="wt250 ferror-contaner">
          <ErrorMessage className=" rc ferror-message" name="name" component="p" />
        </div>

        <label className="flab wt250" htmlFor="#phone">
          {text.phone}*
        </label>
        <Field className="finput" id="phone" name="phone" type="text" disabled={btnInputsState} />
        <div className="wt250 ferror-contaner">
          <ErrorMessage className="rc ferror-message" name="phone" component="p" />
        </div>

        <button className="fbtn fbtn__active wt250 " type="submit" disabled={btnInputsState}>
          {text.send}
        </button>
        <InformMassegeCallMeForm process={process} langugeApp={langugeApp} />
      </Form>
    </Formik>
  );
};

export default CallMeForm;
