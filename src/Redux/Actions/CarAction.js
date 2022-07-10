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