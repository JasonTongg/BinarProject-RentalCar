let url = "https://bootcamp-rent-car.herokuapp.com/admin/car"

export const searchCar = (payload) => {
    return {
        type: "Search Car",
        payload: payload
    }
}

export const searchCarDetail = (payload) => {
    return {
        type: "Detail Car",
        payload: payload
    }
}

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

export const AdminSearch = (payload) => {
    return {
        type: "Admin Search Car",
        payload
    }
}

export const AdminEditCar = (payload) => {
    return {
        type: "Admin Edit Car",
        payload
    }
}

export const carManipulation = (payload) => {
    return {
        type: "Manipulate Car List",
        payload
    }
}