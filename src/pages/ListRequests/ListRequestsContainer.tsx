import React from "react";
// @ts-ignore
import ListRequests from "./ListRequests.tsx";
import { connect } from "react-redux";
// @ts-ignore
import { editRequestAC } from "../../store/action.ts";

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
  return (
    <div>
      {
        [...props.requestsList.map((elem: any) => {
              return <ListRequests
                  requestNumber={elem.requestNumber}
                  date={elem.date}
                  clientName={elem.clientName}
                  key={elem.requestNumber}
                  editRequest={props.editRequest}
                />
            })
          ]
      }
    </div>
  )
}

const mapStateToProps = (state: any): {} => {
  return {
    requestsList: state.common.requestsList,
    managerName: state.common.managerName
  };
};

const mapDispatchToProps = (dispatch: any): {} => {
  return {
    editRequest: (requestNumber: number) => {
      dispatch(editRequestAC(requestNumber))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRequestsContainer);
