let initialState = {
    navbar: false,
    login: false,
    adminNavbar: true
}

export const AnimationReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case "Navbar Clicked": 
            return {
                ...state,
                navbar: (state.navbar===true ? false : true)
            }
        case "Admin Navbar Clicked":
            return {
                ...state,
                adminNavbar: state.adminNavbar===true ? false : true
            }
        case "User Login":
            return{
                ...state,
                login: payload
            }
        default:
            return state;
    }
}