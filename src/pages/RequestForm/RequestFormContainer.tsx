import React from "react";
import RequestReduxForm from "./RequestForm";
import { connect } from "react-redux";
import { addRequestAC, changeRequestAC, clearFormAC } from "../../store/action";

function RequestFormContainer(props: any) {
  // флаг для того чтобы можно было отличить:
  // идет ли процесс создания нового запроса
  // или же редактирование уже существующего
  let [isEdit, setFlag] = React.useState(false);

  React.useEffect(() => {
    if (props.initialValues.requestStatus) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [props]);

  const handleSubmit = (data: any) => {
    if (isEdit) {
      props.changeRequest(data);
    } else {
      props.addRequest(data);
    }
  };

  return (
    <RequestReduxForm handleSubmit={handleSubmit} {...props} isEdit={isEdit} />
  );
}

const mapStateToProps = (state: any): {} => {
  return {
    initialValues: {
      // Добавляем номер запроса
      requestNumber: state.common.choicenRequest.requestNumber
        ? state.common.choicenRequest.requestNumber
        : state.common.requestsList[state.common.requestsList.length - 1]
            .requestNumber + 1,
      requestStatus: state.common.choicenRequest?.requestStatus,
      clientName: state.common.choicenRequest?.clientName,
      clientPhonenumber: state.common.choicenRequest?.clientPhonenumber,
      managerName: state.common.managerName,
      date: state.common.choicenRequest?.date,
      requestDescription: state.common.choicenRequest?.requestDescription,
    },
  };
};

const mapDispatchToProps = (dispatch: any): {} => {
  return {
    addRequest: (data: any) => {
      dispatch(addRequestAC(data));
    },
    changeRequest: (data: any) => {
      dispatch(changeRequestAC(data));
    },
    clearForm: () => {
      dispatch(clearFormAC());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestFormContainer);
