import React from "react";
import ReactDOM from "react-dom";
import Nav from "../side-nav/Nav";

import "./index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Nav className="customized-nav-container">
        </Nav>
      </React.Fragment>
    );
  }
}

App.defaultProps = {};

ReactDOM.render(<App />, document.querySelector("#data-center"));
