import React from "react";
import classNames from "classnames";
import "./vertical-group.scss";

const VerticalGroup = props => {
    return (
        <div className={classNames("lg-side-nav-vertical-group")}>
            {props.children}
        </div>
    );
};

export default VerticalGroup;
