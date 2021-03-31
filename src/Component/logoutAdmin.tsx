import React, { Component, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { users_data, user_data } from "./User";

type Props = {
  chk_admin_logout?: Boolean
};
class LogoutAdmin extends Component<Props, {}> {
  componentDidMount() {
    this.context.setUserListData({});
    //console.log("context", this.context);
  }
  render() {
    return <Redirect to="/hrportal/login" />;
  }
}
LogoutAdmin.contextType = users_data;
export default LogoutAdmin;
