import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { addRequestFromHeadAC } from '../../store/action'

function HeaderContainer(props: any) {
  debugger;

  return <Header managerName={props.managerName}/>;
}

const mapStateToProps = (state: any): {} => {
  debugger;
  return {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
