import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor () {
        super();

        this.state = {
            name: "Chad"
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState( () => {
            return {
                value
            };
        });
    }

    render() {
        return (
            <h1>Hello, {this.state.name} !</h1>
        );
    }
}

export default App;

const wrapper = document.getElementById("App");
wrapper ? ReactDOM.render(<App />, wrapper) : false;