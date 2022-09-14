let url = "https://bootcamp-rent-car.herokuapp.com/admin/car"

export const getCarList = (payload) => {
    return {
        type: "Get Car",
        payload: payload
    }
}

export const getCarApi = async (dispatch) => {
    let rawData = await fetch(url);
    let data = await rawData.json();
    return dispatch(getCarList(data));
}

export const carManipulation = (payload) => {
    return {
        type: "Manipulate Car List",
        payload
    }
}

export const CarRentDay = (payload) => {
    return{
        type: "Car Rent Day",
        payload
    }
}

export const AddPayment = (payload) => {
    return {
        type: "Add Payment",
        payload
    }
}