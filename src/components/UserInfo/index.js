import React, { Component } from "react";
import "antd/dist/antd.css";
import { Switch, Route, Link } from "react-router-dom";
import EditForm from "../EditForm/index";
import { Menu, Icon } from "antd";
import "./index.css";
import UserDescriptions from "../UserDescritions";
const { SubMenu } = Menu;

export default class UserInfo extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["sub1"]
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <div className="userInfo">
        <div className="myMenu">
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: 150, marginRight: 10, height: 900 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>
                    <Link to="/user">个人中心</Link>
                  </span>
                </span>
              }
            >
              <Menu.Item key="1">
                <Link to="/user/edit">编辑资料</Link>
              </Menu.Item>
              <Menu.Item key="2">账户安全</Menu.Item>
              <Menu.Item key="4">升级VIP</Menu.Item>
              <Menu.Item key="3">注销</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>动态</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="setting" />
                  <span>设置</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </div>

        <Switch>
          <Route path="/user/edit">
            <EditForm className="myEditForm" />
          </Route>
          <Route path="/user">
            <UserDescriptions className="myEditForm" />
          </Route>
        </Switch>
      </div>
    );
  }
}
