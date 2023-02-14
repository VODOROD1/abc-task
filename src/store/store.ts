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

let initialState: any = data.requests;
debugger;

let initialStateForm: any = {
  requestNumber: 99,
  requestStatus: "новая99",
  clientName: "Clien99",
  clientPhonenumber: "9-999-999-99-99",
  managerName: "Manager9",
  date: "2023-09-09",
  requestDescription: "This is some request description 9",
};

const initialFormReducer = (state = initialStateForm, action: any) => {
  switch (action.type) {
    case "":
      return { ...state };
    default:
      return state;
  }
};

function commonReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case "ADD_REQUEST":
      debugger;
      let newRequest = {};
      // action.data.currentTarget.

      // return { ...state,
      //   common: [...state].push(action.data)
      // }
      return { ...state };
    default:
      return state;
  }
  debugger;
}

let reducers = combineReducers({
  common: commonReducer,
  form: formReducer,
  initialDataForm: initialFormReducer,
});

const store = createStore(reducers);
debugger;

export default store;
