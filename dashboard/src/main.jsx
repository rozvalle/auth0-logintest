import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-m5ydqju8ovrq462z.us.auth0.com"
    clientId="AuXGxP8nzG6Fhlwd9QWU3PN33A1fNpow"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
