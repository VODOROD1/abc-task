import React from "react";
import RequestReduxForm from "./RequestForm1";
import { connect } from "react-redux";
import { addRequest } from "../../store/action"

function RequestFormContainer(props: any) {
  debugger;
  let tempSubmit = (data: any) => {
    debugger;
  }

  return (
    <RequestReduxForm 
      tempSubmit={tempSubmit}
      handleSubmit={props.handleSubmit}
      {...props}
    />
  );
}

const mapStateToProps = (state: any): {} => {
  debugger;
  return {
    initialValues: {
      requestNumber: state.initialDataForm.requestNumber,
      requestStatus: state.initialDataForm.requestStatus,
      clientName: state.initialDataForm.clientName,
      clientPhonenumber: state.initialDataForm.clientPhonenumber,
      managerName: state.initialDataForm.managerName,
      date: state.initialDataForm.date,
      requestDescription: state.initialDataForm.requestDescription,
    },
  };
};

const mapDispatchToProps = (dispatch: any): {} => {
  return {
    handleSubmit: (data: any) => {
      debugger;
      dispatch(addRequest(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestFormContainer);
