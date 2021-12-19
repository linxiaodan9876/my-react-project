import React from "react";
import AppForm from "./AppForm.js";
import AppList from "./AppList.js";
import "../../css/semantic.scss";
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
        <hr />
        <div className="ui divider"></div>
        <AppForm />
        <AppList data={data} />
      </div>
    );
  }
}

export default App;
