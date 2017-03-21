import { observable } from "mobx";

export class Store {
    @observable
    Loading = false;
};

export default Store;