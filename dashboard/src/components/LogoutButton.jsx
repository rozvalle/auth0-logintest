import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd"; // Assuming you're using Ant Design for UI components

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;