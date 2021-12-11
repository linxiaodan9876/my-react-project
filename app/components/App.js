import React from "react";

class App extends React.Component {
  state = {
    choosevalue: 1,
    data: this.props.data,
  };

  render() {
    const { data } = this.state;
    return (
      <div className="ui comments">
        <h1>恭喜你 运行成功！</h1>
      </div>
    );
  }
}

export default App;
