const { mock } = require("mockjs");
const Mock = require("mockjs");
const { useRef } = require("react");
const userdata = require("../../public/api/user.json");

// 登录接口，验证输入的用户名和密码并返回相应的用户信息
module.exports = Mock.mock("/user", "get", (options) => {
  const reqUser = JSON.parse(options.body);

  const userList = Array.from(userdata.data);

  const user = userList.find((item) => item.username === reqUser.username);

  if (user === undefined) {
    return {
      status: 400,
      msg: "用户不存在",
      data: ""
    };
  } else if (user.password !== reqUser.password) {
    return {
      status: 400,
      msg: "密码错误",
      data: ""
    };
  } else {
    return {
      status: 200,
      msg: "登录成功",
      data: user
    };
  }
});

// 注册接口，接受用户注册信息，验证用户是否存在并返回注册结果
module.exports = Mock.mock("/add", "post", (options) => {
  const userList = Array.from(userdata.data);
  const reqUser = JSON.parse(options.body).data;
  const user = userList.find((item) => item.username === reqUser.username);
  if (user !== undefined) {
    return {
      status: 400,
      msg: "用户名重复"
    };
  } else {
    userList.push(JSON.parse(options.body));
    return {
      status: 200,
      msg: "注册成功"
    };
  }
});

// 修改用户信息接口，接收用户信息并返回结果
module.exports = Mock.mock("/edit", "post", (options) => {
  const userList = Array.from(userdata.data);
  const reqUser = JSON.parse(options.body).data;
  let newUser = {};
  userList.map((item, index) => {
    if (item.username === reqUser.username) {
      newUser = { ...item, ...reqUser };
      console.log(newUser, "newuser");
      userList.splice(index, 1, newUser);
    }
  });
  return {
    status: 200,
    msg: "修改成功",
    data: newUser
  };
});

// 注销接口
module.exports = Mock.mock("/delete", "post", (options) => {
  const userList = Array.from(userdata.data);
  const reqUser = JSON.parse(options.body).data;
  userList.find((item, index) => {
    if (item.username === reqUser.username) {
      userList.splice(index, 1);
    }
  });
  return {
    status: 200,
    msg: "注销成功"
  };
});
