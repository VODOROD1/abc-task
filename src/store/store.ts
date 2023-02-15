import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import data from "../assets/data.json";

// type InitialStateType = {
//     requestNumber: number,
// }

// type actionType = {
//     type: string,
//     value: any
// }

let initialState: any = {
  requestsList: data.requests,
  choicenRequest: {
      requestNumber: null,
      requestStatus: null,
      clientName: null,
      clientPhonenumber: null,
      managerName: null,
      date: null,
      requestDescription: null,
    },
  managerName: "John Smith"
};
debugger;

// let initialStateForm: any = {
//   requestNumber: 99,
//   requestStatus: "новая",
//   clientName: "Clien99",
//   clientPhonenumber: "9-999-999-99-99",
//   managerName: "Manager9",
//   date: "2023-09-09",
//   requestDescription: "This is some request description 9",
// };

// const initialFormReducer = (state = initialState.requestsList[0], action: any) => {
//   switch (action.type) {
    
//     default:
//       return state;
//   }
// };

function commonReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case "ADD_REQUEST":
      debugger;
      return {
        ...state,
        requestsList: [...state.requestsList, action.data],
      };
    case "ADD_REQUEST_FROM_HEAD":
      debugger;
      return {
        ...state,
        choicenRequest: action.data
      }
    case "EDIT_REQUEST":
      debugger;
      let request = state.requestsList.filter((request: any) => request.requestNumber === action.data)[0];
      return {
        ...state, choicenRequest: request
      };
    default:
      return state;
  }
}

let reducers = combineReducers({
  common: commonReducer,
  form: formReducer,
  // initialDataForm: initialFormReducer,
});

const store = createStore(reducers);
debugger;

export default store;
