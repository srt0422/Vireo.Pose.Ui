import Store from "../Store";

//use variable declaration to make rewire work in unit tests
let store = Store;

export function StartLoading() {
    store.Loading = true;
}

export interface ILoadingActions {
    StartLoading();
}