const initialState = {
  dark: sessionStorage.getItem("dark_mode") === "false" ? false : true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, dark: action.dark };

    default:
      return state;
  }
}
