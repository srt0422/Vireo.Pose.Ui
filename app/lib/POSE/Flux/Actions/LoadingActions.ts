import Store from "../Store";
import ActionNames from "../ActionNames";

//use variable declaration to make rewire work in unit tests
let store = Store; 

export function StartLoading() {
    store.dispatch({ type: ActionNames.START_LOADING });
}

export function StopLoading() {
    store.dispatch({ type: ActionNames.STOP_LOADING });
}

export interface ILoadingActions {
    StartLoading();
    StopLoading();
}