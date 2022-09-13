let initialState = {
    Details: 0,
    Search: [],
    CarList: [],
    AdminSearch: "",
    AdminEdit: {},
    listMessage: false,
    RentCar: localStorage.getItem("Rent Details") ? JSON.parse(localStorage.getItem("Rent Details")) : {}
}

export const CarReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case "Search Car":
            let newState = {
                ...state,
                Search: payload
            }
            return newState;
        case "Detail Car":
            return{
                ...state,
                Details: payload
            }
        case "Get Car":
            return {
                ...state,
                CarList: payload
            }
        case "Admin Search Car":
            return{
                ...state,
                AdminSearch: payload
            }
        case "Admin Edit Car":
            return {
                ...state,
                AdminEdit: payload
            }
        case "Manipulate Car List":
            return{
                ...state,
                listMessage: payload
            }
        case "Car Rent Day":
            return{
                ...state,
                RentCar: payload
            }
        case "Add Payment":
            return {
                ...state,
                RentCar: {
                    ...state.RentCar,
                    payment: payload
                }
            }
        default:
            return state;
    }
}