import React from "react";
import classNames from "classnames";
import AdSense from 'react-adsense';
import "./panel.scss";

const Panel = props => {
  return (
    <div className={classNames('lg-side-nav-panel', { "show": props.show })}>
      {props.children}
      <div className={classNames('lg-side-nav-panel-ad')}>
        <AdSense.Google
          client='ca-pub-4841635508396044'
          slot='7158176468'
          style={{ display: 'inline-block', width: '200px', height: '400px' }}
          format=''
        />
      </div>
    </div>
  );
}

export default Panel;