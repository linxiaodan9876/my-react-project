import React from "react";
import AppTodos from "./AppTodos";

class AppList extends React.Component {
  deleteItem = (id) => {
    this.props.deleteItem(id);
  };
  render() {
    const a = this.props.data.map(({ id, text, complete, isDelete }, index) => {
      return (
        !isDelete && (
          <AppTodos
            key={index}
            id={id}
            text={text}
            complete={complete}
            deleteItem={() => {
              this.deleteItem(id);
            }}
          />
        )
      );
    });
    return <div>{a}</div>;
  }
}

export default AppList;
