import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    // React.createElement("div");

    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
