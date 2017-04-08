import actionNames from "../ActionNames";
export default (state = { Loading: false }, action) => {
    switch (action.type) {
        case actionNames.START_LOADING:
            return Object.assign({}, state, { Loading: true });
        case actionNames.STOP_LOADING:
            return Object.assign({}, state, { Loading: false });
    }
};
