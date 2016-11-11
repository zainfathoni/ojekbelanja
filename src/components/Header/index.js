import React from 'react';

import './Header.css';

export default function Header(props) {
  const ojekIcon = <i className="material-icons">&#xE91B;</i>;
  const belanjaIcon = <i className="material-icons">&#xE8CB;</i>;
  const nyasarIcon = <i className="material-icons">loop</i>;

  return (
    <div className="l-wrapper-header">
      {!props.is404 ?
        <header>
          <h1>Ojek {ojekIcon}{belanjaIcon} Belanja</h1>
          <h3>{props.heading ? props.heading : "Asisten Belanja Anda"}</h3>
        </header>
      :
        <header>
          <h1>Ojek {ojekIcon}{nyasarIcon} Nyasar</h1>
          <h3 className="header-is-error">404 | Page Not Found</h3>
        </header>
      }
    </div>
  )
}

Header.propTypes = {
  heading: React.PropTypes.string,
  is404: React.PropTypes.bool
}
