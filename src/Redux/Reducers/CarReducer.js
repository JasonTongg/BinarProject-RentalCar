let initialState = {
    CarList: [],
    listMessage: false,
    RentCar: localStorage.getItem("Rent Details") ? JSON.parse(localStorage.getItem("Rent Details")) : {}
}

export const CarReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case "Get Car":
            return {
                ...state,
                CarList: payload
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