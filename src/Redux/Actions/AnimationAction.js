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