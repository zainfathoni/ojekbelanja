import React, { PropTypes as T } from 'react';

import './Header.css';

export default function Header(props) {
  const ojekIcon = <i className="fa fa-motorcycle" aria-hidden="true"></i>;
  const belanjaIcon = <i className="fa fa-shopping-cart" aria-hidden="true"></i>;
  const nyasarIcon = <i className="fa fa-question" aria-hidden="true"></i>;

  return (
    <div className="l-wrapper-header">
      {!props.is404 ?
        <header className="Header">
          <h1>Ojek {ojekIcon}{belanjaIcon} Belanja</h1>
          <h3>{props.heading ? props.heading : "Asisten Belanja Anda"}</h3>
        </header>
      :
        <header className="Header">
          <h1>Ojek {ojekIcon}{nyasarIcon} Nyasar</h1>
          <h3 className="Header-is-error">404 | Page Not Found</h3>
        </header>
      }
    </div>
  )
}

Header.propTypes = {
  heading: T.string,
  is404: T.bool,
}
