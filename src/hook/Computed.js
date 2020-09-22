/*import React, { useState, useMemo } from 'react';

function Example() {
    const [firstName, setFirstName] = useState(0);
    const [lastName, setLastName] = useState(1);
    // 使用 useMemo 函数缓存计算过程
    const renderFullName = useMemo(() => `${firstName} ${lastName}`, [
        firstName,
        lastName,
    ]);

    function changeFullName(){
        let num=Math.random()
        setFirstName(num);
    }
    return <>
        <div>{renderFullName}</div>
        <div onClick={changeFullName}>1</div>
    </>;
}*/

import memoize from 'memoize-one';
import React, {Component, Fragment} from 'react';

let num1=1;
let num2=2;
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        };
    }

    // 如果和上次参数一样，`memoize-one` 会重复使用上一次的值。
    getFullName = memoize(
        (firstName, lastName) => `${firstName} ${lastName}`
    );

    get fullName() {
        console.log(this.state.firstName,this.state.lastName);
        return this.getFullName(this.state.firstName, this.state.lastName);
    }

    render() {
        return <Fragment>{this.fullName}
            <div onClick={this.changeFullName.bind(this)}>click</div>
        </Fragment>;
    }

    changeFullName() {
        this.setState({firstName: num1, lastName: num2});
    }
}

export default Example;