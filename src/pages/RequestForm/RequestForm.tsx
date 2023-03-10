import React from "react";
import { Form, Field } from "react-final-form";
import styles from "./RequestForm.module.scss";
import { reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

const RequestForm = (props: any) => {
  let [initialData, setInitialData] = React.useState({
    requestNumber: props.initialValues.requestNumber,
    requestStatus: props.initialValues.requestStatus,
    clientName: props.initialValues.clientName,
    clientPhonenumber: props.initialValues.clientPhonenumber,
    managerName: props.initialValues.managerName,
    date: new Date().toString(),
    requestDescription: props.initialValues.requestDescription,
  });
  let [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    setInitialData({
      requestNumber: props.initialValues.requestNumber,
      requestStatus: props.initialValues.requestStatus,
      clientName: props.initialValues.clientName,
      clientPhonenumber: props.initialValues.clientPhonenumber,
      managerName: props.initialValues.managerName,
      date: new Date().toString(),
      requestDescription: props.initialValues.requestDescription,
    });
    setPhoneNumber(props.initialValues.clientPhonenumber);
  }, [props]);

  let navigate = useNavigate();

  const goListRequests = () => {
    navigate("/list-requests");
  };

  const onSubmit = (formData: any) => {
    props.handleSubmit({
      ...formData,
      clientPhonenumber: phoneNumber
    });
    goListRequests();
  };

  const handleCancelButton = () => {
    props.clearForm();
    navigate("/list-requests");
  };

  const validate = (e: any) => {
    const errors: any = {};

    // Валидация имени клиента
    if (e.clientName?.length > 100) {
      e.clientName = "Введены неверные символы!";
    }

    // Валидация телефона
    // if (e.clientPhonenumber?.match(/\d/g)?.length !== 11) {
    //   errors.clientPhonenumber = "Введены неверные символы!";
    // }

    // Валидация поля для описанияа
    if (e.requestDescription?.length > 500) {
      errors.requestDescription = "Слишком длинное описание!";
    }

    return errors;
  };

  return (
    <Form
      initialValues={initialData}
      // @ts-ignore
      onSubmit={onSubmit}
      // @ts-ignore
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <table align="center">
            <tbody>
              <tr>
                <td className={styles.fieldName}>
                  <label>Номер заявки</label>
                </td>
                <td className={styles.fieldValue}>
                  <Field name="requestNumber">
                    {({ input, meta }) => (
                      <div>
                        <input type="text" readOnly {...input} />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </td>
              </tr>
              <tr>
                <td className={styles.fieldName}>
                  <label>Статус заявки</label>
                </td>
                <td className={styles.fieldValue}>
                  <Field name="requestStatus" component="select">
                    <option></option>
                    <option value="новая">новая</option>
                    <option value="в обработке">в обработке</option>
                    <option value="в работе">в работе</option>
                    <option value="закрыта">закрыта</option>
                  </Field>
                </td>
              </tr>
              <tr>
                <td className={styles.fieldName}>
                  <label>Имя клиента</label>
                </td>
                <td className={styles.fieldValue}>
                  <Field name="clientName">
                    {({ input, meta }) => (
                      <div>
                        <input type="text" {...input} />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </td>
              </tr>
              <tr>
                <td className={styles.fieldName}>
                  <label>Телефон клиента</label>
                </td>
                <td className={styles.fieldValue}>
                  {/* <Field name="clientPhonenumber">
                    {({ input, meta }) => (
                      <div>
                        <input
                          type="text"
                          {...input}
                          placeholder="+7 (888)-888-88-88"
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field> */}
                  <PhoneInput
                    country={'ru'}
                    value={phoneNumber}
                    onChange={phone => setPhoneNumber(phone)}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.fieldName}>
                  <label>Имя менеджера</label>
                </td>
                <td className={styles.fieldValue}>
                  <Field name="managerName">
                    {({ input, meta }) => (
                      <div>
                        <input type="text" {...input} />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </td>
              </tr>
              <tr>
                <td className={styles.fieldName}>
                  <label>Дата и время создания/изменения статуса</label>
                </td>
                <td className={styles.fieldValue}>
                  <Field name="date">
                    {({ input, meta }) => (
                      <div>
                        <input type="text" {...input} />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </td>
              </tr>
              <tr>
                <td className={styles.fieldName}>
                  <label>Описание заявки</label>
                </td>
                <td className={styles.fieldValue}>
                  <Field name="requestDescription">
                    {({ input, meta }) => (
                      <div>
                        <textarea {...input} />
                        {meta.touched && meta.error && (
                          <span className={styles.error}>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </td>
              </tr>
            </tbody>
          </table>
          <button className={styles.button} type={"submit"}>
            {props.isEdit ? "Изменить" : "Создать"}
          </button>
          <button className={styles.button} onClick={handleCancelButton}>
              {"Отмена"}
          </button>
        </form>
      )}
    />
  );
};

const RequestReduxForm = reduxForm({
  form: "request",
  enableReinitialize: true,
})(RequestForm);

export default React.memo(RequestReduxForm);