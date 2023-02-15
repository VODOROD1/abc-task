import React from "react";
import RequestReduxForm from "./RequestForm";
import { connect } from "react-redux";
import { addRequest } from "../../store/action"

function RequestFormContainer(props: any) {
  return (
    <RequestReduxForm 
      handleSubmit={props.handleSubmit}
      {...props}
    />
  );
}

const mapStateToProps = (state: any): {} => {
  debugger;
  return {
    initialValues: {
      requestNumber: state.common.choicenRequest.requestNumber,
      requestStatus: state.common.choicenRequest.requestStatus,
      clientName: state.common.choicenRequest.clientName,
      clientPhonenumber: state.common.choicenRequest.clientPhonenumber,
      managerName: state.common.managerName,
      date: state.common.choicenRequest.date,
      requestDescription: state.common.choicenRequest.requestDescription,
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
