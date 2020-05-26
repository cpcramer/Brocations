import React, { Component } from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import Headline from './Headline';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#fff'}}>
        < NavBar />
        < Headline />
        < Cards />
      </div>
    )
  }
}

export default App;

const wrapper = document.getElementById("App");
wrapper ? ReactDOM.render(<App />, wrapper) : false;