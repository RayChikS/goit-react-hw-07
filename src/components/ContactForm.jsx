import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/operations';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  username: '',
  phone: '',
};

export default function ContactForm() {
  const userNameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      text: values.username,
      phone: values.phone,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={userNameId}>Name</label>
        <ErrorMessage name="username" component="span" className={css.error} />
        <Field
          className={css.field}
          type="text"
          name="username"
          id={userNameId}
        />

        <label htmlFor={numberId}>Number</label>
        <ErrorMessage name="phone" component="span" className={css.error} />
        <Field className={css.field} type="phone" name="phone" id={numberId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
