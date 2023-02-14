import React from "react";
import { Form, Field } from "react-final-form";
// import { Field } from "redux-form";
import styles from "./RequestForm.module.scss";
import { reduxForm } from "redux-form";

// {
//   requestNumber,
//   requestStatus,
//   clientName,
//   clientPhonenumber,
//   managerName,
//   date,
//   requestDescription
// }

const requestForm = (props: any) => {
    const onSubmit = (e: any) => {
        debugger;

    }

    const validate = (e: any) => {
        debugger;

    }
    debugger;
    return (
        <Form
        initialValues={{
            firstName: "Dan",
        }}
        // @ts-ignore
        onSubmit={onSubmit}
        // @ts-ignore
        validate={validate}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                <tr>
                    <td className={styles.fieldName}>Номер заявки</td>
                    <td>
                    <Field
                        component="input"
                        type="text"
                        name="requestNumber"
                        placeholder="asfasdgsda"
                    />
                    </td>
                </tr>
                <tr>
                    <td className={styles.fieldName}>Статус заявки</td>
                    <td>
                    <Field component="input" type="text" name="requestStatus" />
                    </td>
                </tr>
                <tr>
                    <td className={styles.fieldName}>Имя клиента</td>
                    <td>
                    <Field component="input" type="text" name="clientName" />
                    </td>
                </tr>
                <tr>
                    <td className={styles.fieldName}>Телефон клиента</td>
                    <td>
                    <Field
                        component="input"
                        type="text"
                        name="clientPhonenumber"
                    />
                    </td>
                </tr>
                <tr>
                    <td className={styles.fieldName}>Имя менеджера</td>
                    <td>
                    <Field component="input" type="text" name="managerName" />
                    </td>
                </tr>
                <tr>
                    <td className={styles.fieldName}>
                    Дата и время создания/изменения статуса
                    </td>
                    <td>
                    <Field component="input" type="text" name="date" />
                    </td>
                </tr>
                <tr>
                    <td className={styles.fieldName}>Описание заявки</td>
                    <td>
                    <Field
                        component="input"
                        type="text"
                        name="requestDescription"
                    />
                    </td>
                </tr>
                </tbody>
            </table>
            <button className={styles.createButton} type={"submit"}>
                Создать
            </button>
            </form>
        )}
        />
    )
}

const RequestReduxForm = reduxForm({
  form: "request",
  enableReinitialize: true,
})(requestForm);

export default RequestReduxForm;
