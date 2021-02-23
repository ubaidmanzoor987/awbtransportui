import React from 'react';
import { Redirect, Link as RouterLink } from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { user_data } from './User';

interface SidebarProps {
    activeEmployment?: Boolean
}

interface SidebarStates {
    logout: Boolean
}

export default class SideBar extends React.Component<SidebarProps, SidebarStates> {

  constructor(props:any) {
      super(props);
      this.state = {
          logout: false
      }
  }
  
  render () {
    if (!this.context.data.user_name ) {
        return <Redirect to="/login" />
    }
    return (
        <>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem >Dashboard</MenuItem>
                    <SubMenu title="Forms" open={true} >
                    <MenuItem >
                        { 
                            this.props.activeEmployment === true ? 
                                <RouterLink to="/AwbTransportEmploymentApplication">
                                Employment Application
                                </RouterLink>
                            : <span>Employment Application</span> 
                         }
                    </MenuItem>
                   
                    <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </>
        )
  }
}

SideBar.contextType = user_data;