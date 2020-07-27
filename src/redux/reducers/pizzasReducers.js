const initialState = {
    items: [],
    isLoaded: true
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload
            };
        case 'SET_IS_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export default pizzas;
