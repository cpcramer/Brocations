import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from './NavBar';
import Headline from './Headline';

class App extends Component {
  render() {
    return (
      <div>
        < NavBar />
        < Headline />
      </div>
    )
  }
}

export default App;

const wrapper = document.getElementById("App");
wrapper ? ReactDOM.render(<App />, wrapper) : false;