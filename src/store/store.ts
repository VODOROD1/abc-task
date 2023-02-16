import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import data from "../assets/data.json";

// Заглушка для обнуления полей формы
const plug = {
  requestNumber: null,
  requestStatus: null,
  clientName: null,
  clientPhonenumber: null,
  managerName: null,
  date: null,
  requestDescription: null,
}

let initialState: any = {
  requestsList: data.requests,
  choicenRequest: plug,
  managerName: "John Smith",
};

function commonReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case "ADD_REQUEST":
      return {
        ...state,
        requestsList: [...state.requestsList, action.data],
      };
    case "ADD_REQUEST_FROM_HEAD":
      return {
        ...state,
        choicenRequest: action.data,
      };
    case "EDIT_REQUEST":
      let request = state.requestsList.filter(
        (request: any) => request.requestNumber === action.data
      )[0];
      return {
        ...state,
        choicenRequest: request,
      };
    case "CHANGE_REQUEST":
      let changedRequestsList = state.requestsList.map((request: any) => {
        if (request.requestNumber === action.data.requestNumber) {
          return { ...action.data };
        } else {
          return { ...request };
        }
      });
      return {
        ...state,
        requestsList: [...changedRequestsList],
        choicenRequest: plug
      }
    case "CLEAR_FORM":
      return {
        ...state,
        choicenRequest: plug
      }
    default:
      return state;
  }
}

let reducers = combineReducers({
  common: commonReducer,
  form: formReducer,
});

const store = createStore(reducers);

export default store;
