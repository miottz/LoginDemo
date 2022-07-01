import React from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "./index.css";
import store from "../../store";
import { createBrowserHistory } from "history";
import { withRouter } from "react-router";
import { loginAction } from "../../store/actionCreators";

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    // e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // 获取并验证data中用户信息

        new Promise((resolve, reject) => {
          const userList = store.getState().data;
          const user = userList.find(
            (item) => item.username === values.username
          );
          if (user === undefined) {
            alert("用户不存在");
            reject();
          } else {
            resolve(user);
          }
        }).then((user) => {
          if (user.password === values.password) {
            //  页面跳转
            const action = loginAction(user);
            store.dispatch(action);
            let history = createBrowserHistory();
            history.push({
              pathname: "/user",
              state: {}
            });
            history.go();
          } else {
            alert("密码错误");
          }
        });
      }
    });
  };
  // 注册
  register = (e) => {
    let history = createBrowserHistory();
    history.push({
      pathname: "/register",
      state: {}
    });
    history.go();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div key={this.props.location.key}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or{" "}
            <a href="" onClick={this.register}>
              register now!
            </a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default withRouter(WrappedNormalLoginForm);
