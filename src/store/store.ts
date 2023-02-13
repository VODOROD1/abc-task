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

function commonReducer(state: any = initialState, action: any) {
  switch ("") {
    case "":
      return { ...state };
    default:
      return state;
  }
}

let reducers = combineReducers({
  common: commonReducer,
  form: formReducer,
});

const store = createStore(reducers);
debugger;

export default store;