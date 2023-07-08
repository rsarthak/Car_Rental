import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-h1v3yym4xx2aa5cb.us.auth0.com"
    clientId="knXAIg6UNfzlTbGIJ30GEwzAXeyTVKd0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>,
);