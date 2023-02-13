import React from 'react';
import RequestForm from './RequestForm';
import { connect } from "react-redux";

function RequestFormContainer() {

    return (
        <RequestForm />
    )
}

const mapStateToProps = (state): {} => {
    debugger;
    return {
      
    };
  };
  
  const mapDispatchToProps = (dispatch): {} => {
    return {
      handleSubmit: (dispatch) => {
        debugger;
      },
    };
  };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestFormContainer);
