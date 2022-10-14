let initialState = {
  navbar: false,
  login: false,
  adminNavbar: true,
  adminLogin: true,
};

export const AnimationReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'Navbar Clicked':
      return {
        ...state,
        navbar: payload ? payload : state.navbar === true ? false : true,
      };
    case 'Admin Navbar Clicked':
      return {
        ...state,
        adminNavbar: state.adminNavbar === true ? false : true,
      };
    case 'User Login':
      return {
        ...state,
        login: payload,
      };
    case 'Admin Login':
      return {
        ...state,
        adminLogin: payload,
      };
    default:
      return state;
  }
};
