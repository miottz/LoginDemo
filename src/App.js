import "./styles.css";
import WrappedNormalLoginForm from "./components/LoginFrom/index";
import UserInfo from "./components/UserInfo/index";
import Register from "./components/Register/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App(props) {
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
