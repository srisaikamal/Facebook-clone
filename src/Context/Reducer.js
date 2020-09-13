export const initialState = {
  user: null,
  isAuth: false,
};
export const actionType = {
  SET_USER: "SET_USER",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default Reducer;
