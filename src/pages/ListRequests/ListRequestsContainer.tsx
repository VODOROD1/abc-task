import React from "react";
// @ts-ignore
import ListRequests from "./ListRequests.tsx";
import { connect } from "react-redux";
// @ts-ignore
import { editRequest } from "../../store/action.ts";

// type RequestType = {
//   requestNumber: number;
//   date: string;
//   clientName: string;
//   clientPhonenumber: string;
//   managerName: string;
//   requestDescription: string;
//   requestStatus: string;
// };

function ListRequestsContainer(props: any) {
  debugger;
  const [requestsList, setRequestsList] = React.useState<any>([]);
  React.useEffect(() => {
    // let temp = [...Object.values(props.requestsList)];
    debugger;
    let changedRequestsList = props.requestsList.map((elem: any) => {
      return (
        <ListRequests
          requestNumber={elem.requestNumber}
          date={elem.date}
          clientName={elem.clientName}
          key={elem.requestNumber}
          editRequest={props.editRequest}
        />
      );
    });
    debugger;
    setRequestsList(changedRequestsList);
  }, [props.requestsList]);

  return <>{requestsList}</>;
}

const mapStateToProps = (state: any): {} => {
  debugger;
  return {
    requestsList: state.common.requestsList,
    managerName: state.common.managerName
  };
};

const mapDispatchToProps = (dispatch: any): {} => {
  return {
    editRequest: (requestNumber: number) => {
      debugger;
      dispatch(editRequest(requestNumber))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRequestsContainer);
