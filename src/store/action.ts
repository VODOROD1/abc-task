export function addRequestAC(data: any) {
  debugger;
  return {
    type: "ADD_REQUEST",
    data,
  };
}

export function addRequestFromHeadAC() {
  debugger;
  return {
    type: "ADD_REQUEST_FROM_HEAD",
    data: {
      requestNumber: null,
      requestStatus: null,
      clientName: null,
      clientPhonenumber: null,
      managerName: null,
      date: null,
      requestDescription: null,
    },
  };
}

export function editRequestAC(requestNumber: number) {
  return {
    type: "EDIT_REQUEST",
    data: requestNumber,
  };
}

export function changeRequestAC(changedRequest: any) {
  return {
    type: "CHANGE_REQUEST",
    data: changedRequest,
  };
}
