import React from 'react';

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 18
        };
    }

    render() {

        return <div className={"wrapper"}>
            <div onClick={() => {
                this.setState((one, two) => {
                    console.log(one, two)
                    return {age:one.age+1};
                })
            }}>{this.state.age}</div>
        </div>
    }
}

export default State;
