let defaultState = {
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'setList':
            return { ...state, list: action.list }
        default:
            return state
    }
}
