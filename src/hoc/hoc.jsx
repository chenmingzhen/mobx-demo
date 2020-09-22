import React from "react";

export default (WrappedComponent) => {
  class HocComponent extends WrappedComponent {
    OutPut(str) {
      console.log(this.state.age, str); //18
      //虽然可以显示18 但是无法修改子的state
      //通过ref修改
      this.child.handleState(30);
    }

    render() {
      return (
        <WrappedComponent
          outPut={this.OutPut.bind(this)}
          onRef={(ref) => (this.child = ref)}
        ></WrappedComponent>
      );
    }
  }

  return HocComponent;
};
