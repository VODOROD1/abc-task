export function addRequest(data: any) {
    debugger;
    return {
        type: "ADD_REQUEST",
        data
    }
}

export function editRequest(requestNumber: number) {
    return {
        type: "EDIT_REQUEST",
        data: requestNumber
    }
}

export function changeRequest(requestNumber: number) {
    return {
        type: "CHANGE_REQUEST",
        requestNumber
    }
}
