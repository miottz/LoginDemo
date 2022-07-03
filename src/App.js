import React, { Component } from "react";
import "./styles.css";
import WrappedNormalLoginForm from "./components/LoginFrom/index";
import UserInfo from "./components/UserInfo/index";
import Register from "./components/Register/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./mock/user.js";
import ResizableTextArea from "antd/lib/input/ResizableTextArea";

export default class App extends Component {
  componentDidMount() {
    // axios
    //   .post("/delete", {
    //     data: {
    //       username: "admin"
    //     }
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    // sessionStorage.clear();
  }
  componentWillUnmount() {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/user">
            <UserInfo />
          </Route>
          <Route exact path={"/"}>
            <WrappedNormalLoginForm />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
