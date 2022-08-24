export const navbar = () => {
    return {
        type: "Navbar Clicked"
    }
}

export const login = (payload) => {
    return {
        type: "Login Success",
        payload: payload
    }
}

export const adminNavbar = () => {
    return{
        type: "Admin Navbar Clicked"
    }
}