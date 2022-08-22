let initialState = {
    navbar: false,
    login: false
}

export const AnimationReducer = (state = initialState, action) => {
    const {type} = action;

    switch (type) {
        case "Navbar Clicked": 
            return {
                ...state,
                navbar: (state.navbar===true ? false : true)
            }
        
        case "Login Success":
            return {
                ...state,
                login: true
            }
        default:
            return state;
    }
}