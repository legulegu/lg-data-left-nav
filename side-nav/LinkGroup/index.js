import React from "react";
import classNames from "classnames";
import "./link-group.scss";

const LinkGroup = props => {
    return (
        <div className={classNames("lg-side-nav-link-group")}>
            <h4 className={classNames("lg-side-nav-link-group-title")}>
                {props.title}
            </h4>
            <div className={classNames("lg-side-nav-link-group-links")}>
                {props.children}
            </div>
        </div>
    );
};

export default LinkGroup;
