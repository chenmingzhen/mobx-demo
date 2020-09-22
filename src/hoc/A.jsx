import React from "react";
import store from "../store";
class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //store的数据改变不会触发render 手动触发
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    const { result } = store.getState();

    return (
      <div>
        result:{result.toString()}
        <div
          onClick={() => {
            store.dispatch({ type: "async" });
          }}
        >
          async
        </div>
        <div
          onClick={() => {
            store.dispatch((dispatch) => {
              console.log("我还在请求数据，等待3S");
              setTimeout(() => {
                console.log("数据请求成功 发给reducer处理啦");
                dispatch({ type: "unAsync" });
              }, 3000);
            });
          }}
        >
          unAsync
        </div>
      </div>
    );
  }
}

export default A;
