let initialState = {
    navbar: false
}

export const AnimationReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case "Navbar Clicked": 
            return {
                ...state,
                navbar: (state.navbar===true ? false : true)
            }
        default:
            return state;
    }
}