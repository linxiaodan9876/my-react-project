import React from "react";
import AppTodos from "./AppTodos";

class AppList extends React.Component {
  render() {
    const a = this.props.data.map(({ id, text, complete, isDelete }, index) => {
      return (
        !isDelete && (
          <AppTodos key={index} id={id} text={text} complete={complete} />
        )
      );
    });
    return <div>{a}</div>;
  }
}

export default AppList;
