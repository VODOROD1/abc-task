import React from "react";
import { Form, Field } from 'react-final-form';
import styles from './RequestForm.module.scss';

const RequestReduxForm = reduxForm({ form: "request" })((props) => {
  return (
    <Form
      initialValues={{
        firstName: 'Dan'
      }}
      onSubmit={values => {
        // send values to the cloud
      }}
      // validate={values => {
      //   // do validation here, and return errors object
      // }}
    >
      {() => (
        <form onSubmit={props.handleSubmit}>
          <Field component="input" type="text" name="request-number" />
          <Field component="input" type="text" name="request-status" />
          <Field component="input" type="text" name="client-name" />
          <Field component="input" type="text" name="client-phonenumber" />
          <Field component="input" type="text" name="manager-name" />
          <Field component="input" type="text" name="date" />
          <Field component="input" type="text" name="request-description" />
          <button>Создать</button>
        </form>
      )}
    </Form>
  );
});

export default RequestForm;