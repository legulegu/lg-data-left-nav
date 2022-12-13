import React from "react";
import classNames from "classnames";
import "./link-group.scss";

const LinkGroupVertical = props => {
    return (
        <div className={classNames("lg-side-nav-link-group-vertical")}>
            <h4 className={classNames("lg-side-nav-link-group-vertical-title")}>
                {props.title}
            </h4>
            <div className={classNames("lg-side-nav-link-group-vertical-links")}>
                {props.children}
            </div>
        </div>
    );
};

export default LinkGroupVertical;
