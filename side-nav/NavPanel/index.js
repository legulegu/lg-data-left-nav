import React from "react";
import classNames from "classnames";
import "./panel.scss";

const Panel = props => {
  return (
    <div className={classNames('lg-side-nav-panel', { "show": props.show })}>
      {props.children}
      <div className={classNames('lg-side-nav-panel-ad')}>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <ins className="adsbygoogle"
          style={{ display: 'inline-block', width: '200px', height: '400px' }}
          data-ad-client="ca-pub-4841635508396044"
          data-ad-slot="7158176468"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </div>
  );
}

export default Panel;