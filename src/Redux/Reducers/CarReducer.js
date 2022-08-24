let initialState = {
    Details: localStorage.getItem('id') ? localStorage.getItem('id') : 0,
    Search: localStorage.getItem('state') ? localStorage.getItem('state').split(",") : [],
    CarList: [],
    Customer: "",
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
            return{
                ...state,
                Details: payload
            }
        case "Get Car":
            return {
                ...state,
                CarList: payload
            }
        case "Login Success":
            return{
                ...state,
                Customer: payload
            }
        default:
            return state;
    }
}