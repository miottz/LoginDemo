import React, { Component } from "react";
import { Descriptions } from "antd";
import store from "../../store";
import LoginForm from "../EditForm";
export default class UserDescriptions extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    const user = this.state.user;
    return (
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">{user.username}</Descriptions.Item>
        <Descriptions.Item label="E-mail">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Residence">
          {user.residence.join(" ")}
        </Descriptions.Item>
        <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
        <Descriptions.Item label="Website">{user.website}</Descriptions.Item>
      </Descriptions>
    );
  }
}
