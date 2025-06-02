import React from 'react';
import { Menu } from 'antd';
import UserBadge from './UserBadge';
import { User } from '@auth0/auth0-react';
import '../styles/Navbar.css'; // Assuming you have a CSS file for styling
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="navbar">
      <Menu mode="horizontal" theme="dark" style={{ width: '40%'}}>
        <Menu.Item key="home">
          Home
        </Menu.Item>
        <Menu.Item key="dashboard">
          Dashboard
        </Menu.Item>
        <Menu.Item key="profile">
          Profile
        </Menu.Item>
      </Menu>

      <div className="user-info" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        { isAuthenticated && !isLoading ? (
          <UserBadge user={user} />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}
export default Navbar;