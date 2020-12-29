import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    num: 0,
  };
  plus = () => {
    this.setState({ num: 1 });
  };
  minus = () => {
    this.setState({ num: -1 });
  };
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h1>number_counter : {this.state.num}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
