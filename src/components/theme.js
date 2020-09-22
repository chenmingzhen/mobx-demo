import React from "react";
import "./style.scss"

class Theme extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"wrapper"}>
            <button onClick={() => {
                window.document.documentElement.setAttribute("data-theme", "theme1")
            }}>Theme1
            </button>
            <button onClick={() => {
                window.document.documentElement.setAttribute("data-theme", "theme2")
            }}>Theme2
            </button>
            <p className={"text"}>Theme</p>
        </div>;
    }
}
export default Theme;