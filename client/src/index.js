import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";

ReactDOM.render(
  <AuthState>
    <ContactState>
      <Router>
        <App />
      </Router>
    </ContactState>
  </AuthState>,
  document.getElementById("root")
);
