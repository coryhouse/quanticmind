import React from "react";

class Home extends React.Component {
  state = {
    switch: "off"
  };

  switchIt = () => {
    // Use functional setState when you need to reference existing state.
    this.setState(prevState => {
      return { switch: prevState.switch === "off" ? "on" : "off" };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.switchIt}>{this.state.switch}</button>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
