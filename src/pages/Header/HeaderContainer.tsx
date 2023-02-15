import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { addRequestFromHeadAC } from "../../store/action";

function HeaderContainer(props: any) {
  debugger;
  let [amountOfStatuses, setAmountOfStatuses] = React.useState({
    new: 0,
    inDevelop: 0,
    inWorking: 0,
    closed: 0,
  });
  React.useEffect(() => {
    let localAmountOfStatuses = { ...amountOfStatuses };
    props.requestsList.forEach((request: any) => {
      switch (request.requestStatus) {
        case "новая":
          localAmountOfStatuses.new += 1;
          break;
        case "в обработке":
          localAmountOfStatuses.inDevelop += 1;
          break;
        case "в работе":
          localAmountOfStatuses.inWorking += 1;
          break;
        case "закрыто":
          localAmountOfStatuses.closed += 1;
          break;
        default:
          break;
      }
    });
  }, [props.requestsList]);

  return (
    <Header
      managerName={props.managerName}
      amountOfStatuses={amountOfStatuses}
    />
  );
}

const mapStateToProps = (state: any): {} => {
  debugger;
  return {
    requestsList: state.common.requestsList,
    managerName: state.common.managerName,
  };
};

const mapDispatchToProps = (dispatch: any): {} => {
  return {
    handleAddRequest: (data: any) => {
      dispatch(addRequestFromHeadAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
