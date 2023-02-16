import React from "react";
// @ts-ignore
import ListRequests from "./ListRequests.tsx";
import { connect } from "react-redux";
// @ts-ignore
import { changeStatusAC, editRequestAC } from "../../store/action.ts";

function ListRequestsContainer(props: any) {
  return (
    <div>
      {[
        ...props.requestsList.map((elem: any) => {
          return (
            <ListRequests
              key={elem.requestNumber}
              requestNumber={elem.requestNumber}
              date={elem.date}
              clientName={elem.clientName}
              editRequest={props.editRequest}
              status={elem.requestStatus}
              changeStatus={props.changeStatus}
            />
          );
        }),
      ]}
    </div>
  );
}

const mapStateToProps = (state: any): {} => {
  return {
    requestsList: state.common.requestsList,
    managerName: state.common.managerName,
  };
};

const mapDispatchToProps = (dispatch: any): {} => {
  return {
    editRequest: (requestNumber: number) => {
      dispatch(editRequestAC(requestNumber));
    },
    changeStatus: (newStatusObj: any) => {
      dispatch(changeStatusAC(newStatusObj));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRequestsContainer);
