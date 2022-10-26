function counterReducer(state, action) {
    switch (action.type) {
        case 'increment': {
            return {...state, count: action.payload }
        }
        case 'decrement': {
            return {...state, count: action.payload }
        }
        case 'reset': {
            return {...state, count: action.payload }
        }
        case 'set': {
            return {...state, count: action.payload }
        }
        case 'count': {
            return {...state, value: action.payload }
        }
        default: {
            return state
        }
    }
}

export default counterReducer