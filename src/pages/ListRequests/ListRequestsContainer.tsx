import React from "react";
// @ts-ignore
import ListRequests from "./ListRequests.tsx";
import { connect } from "react-redux";

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
    let temp = [...Object.values(props.requestsList)];
    debugger;
    let changedRequestsList = temp.map((elem: any) => {
      return (
        <ListRequests
          requestNumber={elem.requestNumber}
          date={elem.date}
          clientName={elem.clientName}
          key={elem.requestNumber}
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
    requestsList: state.common,
  };
};

const mapDispatchToProps = (dispatch: any): {} => {
  return {
    handleSubmit: (dispatch: any) => {
      debugger;
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRequestsContainer);
