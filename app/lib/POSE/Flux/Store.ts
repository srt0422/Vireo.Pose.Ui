import { createStore, Store as ReduxStore } from "redux";

import uiReducer from "./Reducers/UIReducer";

export type Store = {
    Loading: boolean;
}

export default createStore(uiReducer) as ReduxStore<Store>;