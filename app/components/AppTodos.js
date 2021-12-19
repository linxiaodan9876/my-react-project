import React from "react";
import "../../css/AppTodos.scss";

var styles = {
  title: {
    paddingLeft: "0px",
    paddingRight: "50px",
    position: "relative",
  },
  delete: {
    marginLeft: "20px",
    marginRight: "50px",
  },
};

class AppTodos extends React.Component {
  render() {
    return (
      <div className="comment">
        <div className="content">
          <span
            className={`author ${this.props.complete ? "line" : ""}`}
            style={styles.title}
          >
            {this.props.text}
          </span>
          <span className="author" style={styles.title}>
            {this.props.complete ? "已完成" : "未完成"}
          </span>
          <span className="author">{this.props.id}</span>
          <button className="ui blue button" style={styles.delete}>
            删除
          </button>
        </div>
      </div>
    );
  }
}

export default AppTodos;
