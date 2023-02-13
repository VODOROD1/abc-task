import React from 'react';
import RequestForm from './RequestForm';
import { connect } from "react-redux";

function RequestFormContainer() {

  return (
      <RequestForm />
  )
}

const mapStateToProps = (state: any): {} => {
    debugger;
    return {
      
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
)(RequestFormContainer);
