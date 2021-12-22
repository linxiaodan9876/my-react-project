import React from "react";
import AppForm from "./AppForm.js";
import AppList from "./AppList.js";
import "../../css/semantic.scss";
class App extends React.Component {
  state = {
    choosevalue: 1,
    data: [
      { id: 0, text: "天气不错哦!!!", complete: false, isDelete: false },
      { id: 1, text: "天气不错哦!!!", complete: false, isDelete: false },
      { id: 2, text: "出去玩啊!!!", complete: true, isDelete: false },
    ],
  };

  add = (item) => {
    this.state.data.push(item);
    this.setState({ data: this.state.data });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="ui comments">
        <h1>My Todo with React - {data.length}</h1>
        <hr />
        <div className="ui divider"></div>
        <AppForm data={data} add={this.add} />
        <AppList data={data} />
      </div>
    );
  }
}

export default App;
