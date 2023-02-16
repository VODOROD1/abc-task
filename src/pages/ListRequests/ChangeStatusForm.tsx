import React from "react";
import { reduxForm } from "redux-form";
import { Form, Field } from "react-final-form";

// @ts-ignore
function ChangeStatusForm(props) {
    const onSubmit = (e: any) => {
        debugger;
        props.onChangeStatus(e.target.value);
    }

    return (
        <Form
            initialValues={{statusList: props.status}}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field className="statusList" name="statusList" 
                        component="select"
                        value={props.status}
                        onChange={onSubmit}>
                        <option value="новая">новая</option>
                        <option value="в обработке">в обработке</option>
                        <option value="в работе">в работе</option>
                        <option value="закрыта">закрыта</option>
                  </Field>
                </form>
            )}
        />
    )
}

export default reduxForm({
    form: "statusChange",
    enableReinitialize: true,
})(ChangeStatusForm);