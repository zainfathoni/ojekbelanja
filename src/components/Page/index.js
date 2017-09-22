import React from "react";
import { PropTypes as T } from "prop-types";

import MainNav from "../MainNav";
import Header from "../Header";
import "./Page.css";

const Page = ({ header, children, twoColumns, left, right, footer }) =>
  <div className="l-fullwidth">
    <div className="l-wrapper-MainNav">
      <MainNav />
    </div>
    <div className="l-wrapper-header">
      {header}
    </div>
    {twoColumns
      ? <main className="l-main">
          <div className="l-main-2">
            {left}
          </div>
          <div className="l-main-2">
            {right}
          </div>
        </main>
      : <main className="l-main">
          {children}
        </main>}
    {footer &&
      <footer className="l-wrapper-footer">
        {footer}
      </footer>}
  </div>;

Page.defaultProps = {
  header: <Header />
};

Page.propTypes = {
  header: T.element.isRequired,
  children: T.element,
  twoColumns: T.bool,
  left: T.element,
  right: T.element,
  footer: T.element
};

export default Page;
