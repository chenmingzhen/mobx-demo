import React from "react";
import {observer,inject} from "mobx-react";

/*const appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});*/


@observer
class MobxDemo extends React.Component {
    render() {
        const {appState:{number,total}} = this.props;
        console.log(this.props)
        return (
            <button onClick={this.onReset.bind(this)}>
                number:{number}
                total:{total}
            </button>
        );
    }

    onReset() {
        this.props.appState.setNumber();
        this.props.appState.doubleNumber();
    }
}

export default MobxDemo;


