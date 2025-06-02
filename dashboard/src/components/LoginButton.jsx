import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      type="default"
      style={{ background: "transparent", border: "1px solid #1890ff", color: "#1890ff" }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};