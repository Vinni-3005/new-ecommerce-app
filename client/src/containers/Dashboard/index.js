/**
 *
 * Dashboard
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';
import { API_URL, ROLES } from '../../constants';
import { isDisabledMerchantAccount, isProviderAllowed } from '../../utils/app';
import Admin from '../../components/Manager/Dashboard/Admin';
import Distributor from '../../components/Manager/Dashboard/Merchant';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import AccountMenu from '../../components/Manager/AccountMenu';
import { fetchRolesData } from '../CreateRole/actions';
//import AccountSecurity from '../AccountSecurity';

import Customer from '../../components/Manager/Dashboard/Customer';
import DisabledMerchantAccount from '../../components/Manager/DisabledAccount/Merchant';
//import dashboardLinks from './links.json';
//import { API_URL } from '../../constants';

class Dashboard extends React.PureComponent {
  state = {
    rolePermissions: null,
  };
  async componentDidMount() {
    await this.props.fetchProfile();
    this.fetchRolePermissions();
  }

  fetchRolePermissions = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/roles', {
        headers: {
          Authorization : `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        if(response.status === 401){
            console.error("Unauthorized");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({rolePermissions: data});
      console.log('Fetched Role Permissions:', data);
    } catch (error) {
      console.log("Error fetching role permissions", error);
    }
  };

  render() {
    const { user, isLoading} = this.props;
    const {rolePermissions} = this.state;

    if (!rolePermissions || isLoading) {
      return <LoadingIndicator inline/>;
    }

    const normalizedRole = user?.role ? user.role.trim().toUpperCase() : null;
    console.log('Normalized User Role:', normalizedRole);

    const roleData = rolePermissions.find(role=> role.roleName.toUpperCase() === normalizedRole);
    console.log('Role Data Found:', roleData);

    if (!roleData) {
      console.error('Role not found in fetched role permissions.');
      return <LoadingIndicator inline/>;
    }

    return (
      <>
        {normalizedRole===ROLES.Admin ? (
          <Admin user={user} permissions={roleData.permissions}/>
        ): normalizedRole === ROLES. Distributor ? (
          <Distributor user={user} permissions={roleData.permissions}/>
        ): ( <Customer user={user} permissions={roleData.permissions}/>
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => ({ 
  user:state.account.user,
  isLoading:state.account.isLoading,
});

export default connect(mapStateToProps, actions)(Dashboard);

    //const menuItems = this.generateMenuItems(roleData.permissions);
    
    /*return (
      <>
        {isDisabledMerchantAccount(user) ? (
          <DisabledMerchantAccount user={user} />
        ) : normalizedRole === ROLES.Admin ? (
          <Admin
            user={user}
            isMenuOpen={isMenuOpen}
            menuItems = {menuItems}
            toggleMenu = {toggleDashboardMenu}
          />
        ) : normalizedRole === ROLES.Distributor ? (
          <Distributor
            user={user}
            isMenuOpen = {isMenuOpen}
            menuItems= {menuItems}
            toggleMenu={toggleDashboardMenu}
          />
        ) : (
          //<Customer
           // user={user}
            //isMenuOpen={isMenuOpen}
            //menuItems= {menuItems}
            //toggleMenu={toggleDashboardMenu}
          ///>
          null
        )}
      </>
    );
  }

  generateMenuItems = (permissions) => {
    const menuItems = [];
    const permissionMap = {
      address:"Address",
      
      products:"Products",
      category:"Category",
      brand:"Brand",
      users:"Users",
      distributor:"Distributor",
      orders:"Orders",
      reviews:"Reviews",
      wishlist:"Wishlist",
      createroles:"Create Roles",
      assignroles: "Assign Roles",
      support:"Support",

      //AccountSecurity:"AccountSecurity",
    };

    permissions.forEach((permission) => {
      if (permissionMap[permission]) {
        menuItems.push({
          to:`/dashboard/${permission}`,
          name:permissionMap[permission],
          prefix:'/dashboard',
        });
      }
    });
    return menuItems;
  }
}

const mapStateToProps = (state) => ({
  user: state.account.user,
  isLoading: state.account.isLoading,
  isMenuOpen: state.dashboard.isMenuOpen,
});

export default connect(mapStateToProps,actions)(Dashboard);*/


  