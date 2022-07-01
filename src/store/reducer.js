import { EDIT_USER, LOGIN, REGISTER } from "./actionType";

const defaultState = {
  data: [
    {
      username: "admin",
      prefix: "86",
      email: "admin@163.com",
      password: "123456",
      confirm: "123456",
      residence: ["zhejiang", "hangzhou", "xihu"],
      phone: "110",
      website: "http://admin.com",
      agreement: true
    }
  ],
  loginUser: {
    username: "admin",
    prefix: "86",
    email: "admin@163.com",
    password: "123456",
    confirm: "123456",
    residence: ["zhejiang", "hangzhou", "xihu"],
    phone: "110",
    website: "http://admin.com",
    agreement: true
  }
};

export default (state = defaultState, action) => {
  if (action.type === REGISTER) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.data.push(action.value);
    console.log(newState.data);
    return newState;
  }

  if (action.type === LOGIN) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.loginUser = action.user;
    return newState;
  }

  if (action.type === EDIT_USER) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.loginUser = { ...state.loginUser, ...action.values };
    newState.data.map((item, index) => {
      if (item.username === newState.loginUser.username) {
        newState.data.splice(index, 1, newState.loginUser);
      }
    });
    return newState;
  }

  return state;
};
