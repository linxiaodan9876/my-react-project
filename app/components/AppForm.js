import React from "react";

var styles = {
  title: {
    width: 200,
    display: "inline-block",
    marginRight: 10,
    verticalAlign: "top",
  },
};

class AppForm extends React.Component {
  addRecord() {
    if (this.input.value == "" || this.input.value.match(/^\s+$/)) {
      // todo内容为空，不添加。后续把提示给加上
      return;
    }
    const data = this.props.data;
    // 把新建item传给父组件，让它加上
    this.props.add({
      id: data.length,
      text: this.input.value,
      complete: false,
      isDelete: false,
    });
  }
  // 箭头函数可以让this继承AppForm的
  // addRecord = () => {
  //   console.log(this);
  // };
  render() {
    return (
      <div className="ui reply form">
        <div className="field" style={styles.title}>
          <input
            type="text"
            placeholder="TODO"
            ref={(input) => {
              this.input = input;
            }}
          />
        </div>
        <button
          onClick={this.addRecord.bind(this)}
          // onClick={this.addRecord}  // 这种写法对应箭头函数
          className="ui blue button"
        >
          添加
        </button>
      </div>
    );
  }
}

export default AppForm;
