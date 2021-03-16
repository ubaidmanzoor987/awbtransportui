import React from "react";
import { Redirect, Link as RouterLink } from "react-router-dom";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { user_data } from "./User";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

interface SidebarProps {
  activeEmployment?: Boolean;
}

interface SidebarStates {
  logout: Boolean;
}

export default class SideBar extends React.Component<
  SidebarProps,
  SidebarStates
> {
  constructor(props: any) {
    super(props);
    this.state = {
      logout: false,
    };
  }

  render() {
    if (!this.context.data.user_name) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <ProSidebar style={{ marginTop: "15%" }}>
          <Menu>
            <MenuItem></MenuItem>
            <SubMenu title="Employment Application" open={true}>
              <MenuItem>
                <button>className="mt-12"</button>
              </MenuItem>
              <MenuItem>Form 2</MenuItem>
              <MenuItem>Form 3</MenuItem>
              <MenuItem>Form 4</MenuItem>
              <MenuItem>Form 5</MenuItem>
              <MenuItem>Form 6</MenuItem>
              <MenuItem>Form 7</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
        ;
      </>
    );
  }
}

SideBar.contextType = user_data;
