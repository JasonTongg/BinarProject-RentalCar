export const navbar = (payload) => {
    return {
        type: "Navbar Clicked",
        payload
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