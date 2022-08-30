export const navbar = () => {
    return {
        type: "Navbar Clicked"
    }
}

export const adminNavbar = () => {
    return{
        type: "Admin Navbar Clicked"
    }
}

export const isLogin = (payload) => {
    return{
        type: "User Login",
        payload
    }
}