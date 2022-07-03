import { EDIT_USER, LOGIN_USER, REGISTER } from "./actionType";
let user = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : {};

const defaultState = {
  user: user
  // {
  //   username: "admin",
  //   prefix: "86",
  //   email: "admin@163.com",
  //   password: "123456",
  //   confirm: "123456",
  //   residence: ["zhejiang", "hangzhou", "xihu"],
  //   phone: "110",
  //   website: "http://admin.com",
  //   agreement: true
  // }

  // username: "admin",
  // prefix: "86",
  // email: "admin@163.com",
  // password: "123456",
  // confirm: "123456",
  // residence: ["zhejiang", "hangzhou", "xihu"],
  // phone: "110",
  // website: "http://admin.com",
  // agreement: true
};

export default (state = defaultState, action) => {
  // if (action.type === REGISTER) {
  //   const newState = JSON.parse(JSON.stringify(state));
  //   newState.data.push(action.value);
  //   return newState;
  // }

  if (action.type === LOGIN_USER) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.data = action.user;
    return newState;
  }

  if (action.type === EDIT_USER) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.user = action.values;
    console.log(action.values, "action");
    // console.log(newState.user);
    // newState.user.map((item, index) => {
    //   if (item.username === newState.user.username) {
    //     newState.data.splice(index, 1, newState.user);
    //   }
    // });
    return newState;
  }

  return state;
};
