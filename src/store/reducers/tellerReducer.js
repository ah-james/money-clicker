const tellerReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_TELLERS':
            return action.payload
        default:
            return state
    }
}

export default tellerReducer