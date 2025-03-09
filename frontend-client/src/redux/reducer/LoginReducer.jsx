import { actiontype} from "./actionType";


const defaultUser = {
  userId: "0",
  username: "",
  mobileNo: "0",
  balance: "0",
};


let user = defaultUser;
try {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    user = JSON.parse(storedUser);
  } else {
    localStorage.setItem("user", JSON.stringify(defaultUser));
  }
} catch (error) {
  console.error("Error reading from localStorage:", error);
  localStorage.setItem("user", JSON.stringify(defaultUser));
}

const initialState = {
  user: user,
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
   case actiontype.ALERT_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };

    case actiontype.LOGOUT:
      localStorage.setItem("user", JSON.stringify(defaultUser));
      return { ...state, user: defaultUser };

    default:
      return state;
  }
};
