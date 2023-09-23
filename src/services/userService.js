import { loginFailure, loginStart, loginSuccess } from "../features/userSlice";
import APIClient, { axiosInstance } from "../services/ApiClient";

const apiClient = new APIClient("/users");

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("/users/login", user);
    localStorage.setItem("user", JSON.stringify(res.data));
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.isAdmin) {
      dispatch(loginSuccess(storedUser));
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};

const currentUser = JSON.parse(localStorage.getItem("user"));






