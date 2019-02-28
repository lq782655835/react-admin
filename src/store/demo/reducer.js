let defaultState = {
    demoList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'setDemoList':
            return { ...state, demoList: action.list }
        default:
            return state
    }
}
