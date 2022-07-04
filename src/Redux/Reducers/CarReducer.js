let initialState = {
    item: []
}

export const CarReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        default:
            return state;
    }
}