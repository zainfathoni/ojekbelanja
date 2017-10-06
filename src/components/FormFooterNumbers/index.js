import React from "react";
import { PropTypes as T } from "prop-types";

import "./FormFooterNumbers.css";

export default function FormFooterNumbers({
  labelSmall,
  numberSmall,
  labelBig,
  numberBig
}) {
  return (
    <div className="FormFooterNumbers">
      <div className="FormFooterNumbers-delivery-fee">
        <div className="FormFooterNumbers-delivery-fee-label">{labelSmall}</div>
        <div className="FormFooterNumbers-delivery-fee-amount">
          {numberSmall}
        </div>
      </div>
      <hr />
      <div className="FormFooterNumbers-total-price">
        <div className="FormFooterNumbers-total-price-label">{labelBig}</div>
        <div className="FormFooterNumbers-total-price-amount">{numberBig}</div>
      </div>
    </div>
  );
}

FormFooterNumbers.propTypes = {
  labelSmall: T.string.isRequired,
  numberSmall: T.string.isRequired,
  labelBig: T.string.isRequired,
  numberBig: T.string.isRequired
};
