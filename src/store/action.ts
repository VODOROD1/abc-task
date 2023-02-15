export function addRequest(data: any) {
  debugger;
  return {
    type: "ADD_REQUEST",
    data,
  };
}

export function addRequestFromHead() {
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

export function editRequest(requestNumber: number) {
  return {
    type: "EDIT_REQUEST",
    data: requestNumber,
  };
}

export function changeRequest(requestNumber: number) {
  return {
    type: "CHANGE_REQUEST",
    requestNumber,
  };
}
