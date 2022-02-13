import React from "react";
import AppForm from "./AppForm.js";
import AppList from "./AppList.js";
import "../../css/semantic.scss";
import "../../css/App.scss";
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
  deleteItem = (id) => {
    this.state.data[id].isDelete = true;
    this.setState({ data: this.state.data });
  };
  // 可移动浮球实现，法一(感觉这个实现效果好一点)
  suspensionBall = function (dragId, dragLink) {
    var startEvt, moveEvt, endEvt;
    // 判断是否支持触摸事件
    if ("ontouchstart" in window) {
      startEvt = "touchstart";
      moveEvt = "touchmove";
      endEvt = "touchend";
    } else {
      startEvt = "mousedown";
      moveEvt = "mousemove";
      endEvt = "mouseup";
    }
    // 获取元素
    var drag = document.getElementById(dragId);
    drag.style.position = "absolute";
    drag.style.cursor = "move";
    // 标记是拖曳还是点击
    var isClick = true;
    var disX, disY, left, top, starX, starY;
    const moveFun = function (e) {
      // 兼容IE浏览器
      var e = e || window.event;
      isClick = false;
      left = (e.touches ? e.touches[0].clientX : e.clientX) - disX;
      top = (e.touches ? e.touches[0].clientY : e.clientY) - disY;
      // 限制拖拽的X范围，不能拖出屏幕
      if (left < 0) {
        left = 0;
      } else if (
        left >
        document.documentElement.clientWidth - drag.offsetWidth
      ) {
        left = document.documentElement.clientWidth - drag.offsetWidth;
      }
      // 限制拖拽的Y范围，不能拖出屏幕
      if (top < 0) {
        top = 0;
      } else if (
        top >
        document.documentElement.clientHeight - drag.offsetHeight
      ) {
        top = document.documentElement.clientHeight - drag.offsetHeight;
      }
      drag.style.left = left + "px";
      drag.style.top = top + "px";
    };

    const endFun = function (e) {
      document.removeEventListener(moveEvt, moveFun);
      document.removeEventListener(endEvt, endFun);
      if (isClick) {
        // 点击
        window.location.href = dragLink;
      }
    };

    drag.addEventListener(startEvt, function (e) {
      // 阻止页面的滚动，缩放
      e.preventDefault();
      // 兼容IE浏览器
      var e = e || window.event;
      isClick = true;
      // 手指按下时的坐标
      starX = e.touches ? e.touches[0].clientX : e.clientX;
      starY = e.touches ? e.touches[0].clientY : e.clientY;
      // 手指相对于拖动元素左上角的位置
      disX = starX - drag.offsetLeft;
      disY = starY - drag.offsetTop;
      // 按下按钮之后才监听后续事件
      document.addEventListener(moveEvt, moveFun); // 监听对象变成document，好像对mousemove的流畅性有帮助
      document.addEventListener(endEvt, endFun); // 每次划动结束都要移除事件
    });
  };
  componentDidMount() {
    this.suspensionBall("ballId", "https://www.baidu.com");
  }
  // 可移动浮球（主要移动端）实现，法二
  moveBtn = (e) => {
    if (e.targetTouches.length === 1) {
      const touch = e.targetTouches[0];
      // 控制左右移动
      const rEdges =
        document.documentElement.clientWidth - e.currentTarget.clientWidth; // 浮标右边缘
      let eLeft = touch.clientX - e.currentTarget.clientWidth / 2;
      if (eLeft < 0) {
        eLeft = 0;
      } else if (eLeft > rEdges) {
        eLeft = rEdges;
      }
      e.currentTarget.style.left = eLeft + "px";
      // 控制上下移动
      const bottomEdges =
        document.documentElement.clientHeight - e.currentTarget.clientHeight; // 浮标底边缘
      let eTop = touch.clientY - e.currentTarget.clientHeight / 2;
      if (eTop < 0) {
        eTop = 0;
      } else if (eTop > bottomEdges) {
        eTop = bottomEdges;
      }
      e.currentTarget.style.top = eTop + "px";
    }
  };
  movePrevent = (e) => {
    e.preventDefault();
  };
  render() {
    const { data } = this.state;
    return (
      <div className="ui comments app">
        <div id="ballId">
          <h2>浮球1</h2>
        </div>
        {/* 浮球2针对移动端，由touchmove触发 */}
        <div
          id="ballId2"
          onTouchStart={(e) => {
            // 防止浮标移动，后面的页面也跟着移动
            e.stopPropagation();
            document
              .querySelector("#__main")
              .addEventListener("touchmove", this.movePrevent);
            document.querySelector("#__main").style.touchAction = "none";
          }}
          onTouchMove={(e) => {
            e.stopPropagation();
            this.moveBtn(e);
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
            document
              .querySelector("#__main")
              .removeEventListener("touchmove", this.movePrevent);
            document.querySelector("#__main").style.touchAction = "auto";
          }}
        >
          <h2>浮球2</h2>
        </div>
        <h1>My Todo with React - {data.length}</h1>
        <hr />
        <div className="ui divider"></div>
        <AppForm data={data} add={this.add} />
        <AppList data={data} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
