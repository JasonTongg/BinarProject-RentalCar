import CarList from '../Database/CarList';
import Details from '../Database/Details'

let initialState = {
    list: CarList,
    Details: Details,
}

export const CarReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        default:
            return state;
    }
}