import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import ContactState from "./context/contact/ContactState";

ReactDOM.render(
  <ContactState>
    <Router>
      <App />
    </Router>
  </ContactState>,
  document.getElementById("root")
);
