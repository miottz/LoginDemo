import { LOGIN_USER, REGISTER, EDIT_USER } from "./actionType";

export const registerAction = (value) => ({
  type: REGISTER,
  value
});

export const loginAction = (user) => ({
  type: LOGIN_USER,
  user
});

export const editUserAction = (values) => ({
  type: EDIT_USER,
  values
});
