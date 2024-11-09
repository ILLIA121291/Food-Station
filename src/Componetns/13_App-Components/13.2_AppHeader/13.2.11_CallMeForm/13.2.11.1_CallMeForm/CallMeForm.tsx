import './CallMeForm.scss';
import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormHttpInformMassege from '../../../../14_General-Pages-Components/14.4_FormHttpInformMassege/FormHttpInformMassege';
import useHttp from '../../../../11_Server-Components/11.1_useHttp/useHttp';

import { useDispatch } from 'react-redux';
import { noCloseModalWindow } from '../../../../14_General-Pages-Components/14.3_ModalWindow/sliceModalWindow';
import english from '../../../../../language/english';
import BlockErrorMessages from '../../../../14_General-Pages-Components/14.5_FormsComponents/BlockErrorMessages';

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
  const text = langugeApp.textForms.textGeneral;
  const textValidation = langugeApp.textForms.textValidation;

  const [btnInputsState, setBtnInputsState] = useState<boolean>(false);

  const { request, process, setProcess } = useHttp();

  const postUserData = async (userGetData: IUserGetData) => {
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
          .matches(/^[aA-zZ]+$/, textValidation.onlyletters)
          .min(2, textValidation.minimumSymbols)
          .required(textValidation.enterName),
        phone: Yup.string()
          .matches(/^[0-9]+$/, textValidation.onlynumbers)
          .min(2, textValidation.minimumSymbols)
          .required(textValidation.enterPhone),
      })}
      onSubmit={(values, actions) => {
        postUserData(values);

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
        <h4 className="ftit">{text.callMebackForm}</h4>

        <Field name="name" className="mt30 finput" id="name" type="text" disabled={btnInputsState} placeholder={text.yourName} />
        <BlockErrorMessages name="name" />

        <Field name="phone" className="finput" id="phone" type="text" disabled={btnInputsState} placeholder={text.yourPhone} />
        <BlockErrorMessages name="phone" />

        <button className="fbtn fbtn__active wt250 " type="submit" disabled={btnInputsState}>
          {text.send}
        </button>
        <FormHttpInformMassege componentName="CallMeForm" process={process} langugeApp={langugeApp} />
      </Form>
    </Formik>
  );
};

export default CallMeForm;
