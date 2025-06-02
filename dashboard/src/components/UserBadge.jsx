import React, { use } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "antd"; // Assuming you're using Ant Design for UI components
import '../styles/UserBadge.css'; // Assuming you have a CSS file for styling


const UserBadge = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

return (
  isAuthenticated && (
    <div className="user-badge">
      <Avatar src={user.picture} alt={user.name} size={50} shape="square" />
      <div className="user-info">
        <p style={{ fontWeight: 500, color: "white", marginBottom: 0 }}>{user.name}</p>
        <p>
          <a
          href="#logout"
          style={{ color: "#1890ff" }}
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Logout
        </a>
        </p>
      </div>
    </div>
  )
);
};

export default UserBadge;