import Store from "../Store";
import ActionNames from "../ActionNames";
let store = Store;
export function StartLoading() {
    store.dispatch({ type: ActionNames.START_LOADING });
}
export function StopLoading() {
    store.dispatch({ type: ActionNames.STOP_LOADING });
}
