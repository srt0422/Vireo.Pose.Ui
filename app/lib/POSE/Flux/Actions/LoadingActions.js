import Store from "../Store";
let store = Store;
export function StartLoading() {
    store.Loading = true;
}
export function StopLoading() {
    store.Loading = false;
}
//# sourceMappingURL=LoadingActions.js.map