let initialState = {
    Details: localStorage.getItem('id') ? localStorage.getItem('id') : 0,
    Search: localStorage.getItem('state') ? localStorage.getItem('state').split(",") : []
}

export const CarReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case "Search Car":
            let newState = {
                ...state,
                Search: payload
            }
            localStorage.setItem('state', payload);
            return newState;
        
        case "Detail Car":
            localStorage.setItem('id', payload);
            let newStateData = { ...state, modalOpen: true }
            return{
                ...newStateData,
                Details: payload
            }

        default:
            return state;
    }
}