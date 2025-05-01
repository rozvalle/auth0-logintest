import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "antd"; // Assuming you're using Ant Design for UI components
import '../styles/UserBadge.css'; // Assuming you have a CSS file for styling

const UserBadge = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

return (
    isAuthenticated && (
        <div className="user-badge">
            <Avatar src={user.picture} alt={user.name} size={50} shape="square" />
            <div className="user-info">
                    <p style={{fontWeight:500, marginBottom:'-10'}}>{user.name}</p>
                    <p style={{color:'gray'}}>{user.email}</p>
            </div>
        </div>
    )
);
};

export default UserBadge;