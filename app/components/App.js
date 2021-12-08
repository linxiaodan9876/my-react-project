import React from "react";
import AppForm from "./AppForm";

class App extends React.Component {
  state = {
    choosevalue: 1,
    data: this.props.data,
  };

  render() {
    const { data } = this.state;
    return (
      <div className="ui comments">
        <h1>My Todo with React</h1>
        <div className="ui divider"></div>
        <AppForm />
      </div>
    );
  }
}

export default App;
