import React, { Component } from "react";
import { Descriptions } from "antd";
import store from "../../store";
export default class UserDescriptions extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState().loginUser;
  }
  render() {
    return (
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">
          {this.state.username}
        </Descriptions.Item>
        <Descriptions.Item label="E-mail">{this.state.email}</Descriptions.Item>
        <Descriptions.Item label="Residence">
          {this.state.residence.join(" ")}
        </Descriptions.Item>
        <Descriptions.Item label="Phone">{this.state.phone}</Descriptions.Item>
        <Descriptions.Item label="Website">
          {this.state.website}
        </Descriptions.Item>
      </Descriptions>
    );
  }
}
