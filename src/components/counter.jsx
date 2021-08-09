import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://i.redd.it/275s9vncpha71.jpg",
  };

  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold",
  //   color: "black",
  // };

  render() {
    // React.createElement("div");

    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="The shelves!!" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-primary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.state.count === 0 ? " bg-danger" : " bg-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count; //this is an if statement where it asks if count is equal to 0, and then the if else options are seperated by the colon
  }
}

export default Counter;
