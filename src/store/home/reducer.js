let defaultState = {
    homeList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'setHomeList':
            return { ...state, homeList: action.list }
        default:
            return state
    }
}
