import React from 'react';
import { PropTypes as T } from 'prop-types';

import MainNav from '../MainNav';
import Header from '../Header';
import './Page.css';

const Page = ({
  header,
  children,
  footer,
}) => (
  <div className="l-fullwidth">
    <div className="l-wrapper-MainNav">
      <MainNav />
    </div>
    <div className="l-wrapper-header">
      {header}
    </div>
    <main className="l-main">
      {children}
    </main>
    {footer &&
      <footer className="l-wrapper-footer">
        {footer}
      </footer>
    }
  </div>
)

Page.defaultProps = {
  header: <Header />
}

Page.propTypes = {
  header: T.element.isRequired,
  children: T.element.isRequired,
  footer: T.element,
}

export default Page;
