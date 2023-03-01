import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  render() {
    console.log("props", this.props);
    let classes = this.getBadgeClasses();
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 30 }} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const x = <h1>Zero</h1>;
    return this.state.value === 0 ? x : this.state.value;
  }
}
export default Counter;
