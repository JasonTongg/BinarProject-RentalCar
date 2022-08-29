let initialState = {
    navbar: false,
    login: false,
    adminNavbar: true
}

export const AnimationReducer = (state = initialState, action) => {
    const {type} = action;

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
        default:
            return state;
    }
}