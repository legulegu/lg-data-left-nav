import React from "react";
import classNames from "classnames";
import GoogleAd from "./GoogleAd";
import "./panel.scss";

const Panel = props => {
  return (
    <div className={classNames('lg-side-nav-panel', { "show": props.show })}>
      {props.children}
      <div className={classNames('lg-side-nav-panel-ad')}>
        {
          document.body.clientWidth < 1200 ?
            <GoogleAd
              client='ca-pub-4841635508396044'
              slot='1482026572'
              style={{ display: 'inline-block', width: '120px', height: '400px' }}
              format=''
            /> :
            <GoogleAd
              client='ca-pub-4841635508396044'
              slot='7158176468'
              style={{ display: 'inline-block', width: '200px', height: '400px' }}
              format=''
            />
        }

      </div>
    </div>
  );
}

export default Panel;