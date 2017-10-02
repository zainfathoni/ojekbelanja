import React from "react";
import { PropTypes as T } from "prop-types";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

import Button from "../../Button";
import "./Card.css";

export default function Card(props) {
  const {
    keyword,
    id,
    title,
    description,
    image,
    overlay,
    ribbon,
    tooltip,
    disabled,
    unit,
    price,
    action,
    actionReverse
  } = props;

  return (
    <li>
      <div className={"Card" + (overlay ? " Card-is-selected" : "")}>
        <div className="Card-image">
          <img src={image} alt={title} />
          {overlay && (
            <div className="Card-image-overlay">
              <div className="Card-image-overlay-qty">{overlay}</div>
            </div>
          )}
          {ribbon && (
            <div className="Card-ribbon-wrapper">
              <div className="Card-ribbon">{ribbon}</div>
            </div>
          )}
          {ribbon && tooltip && <div className="Card-tooltip">{tooltip}</div>}
        </div>
        <div className="Card-content">
          <div className="Card-content-title">
            <Highlighter searchWords={[keyword]} textToHighlight={title} />
          </div>
          <div className="Card-content-description">
            <Highlighter
              searchWords={[keyword]}
              textToHighlight={description}
            />
          </div>
        </div>
        <div className="Card-action">
          <div className="Card-action-price-parent">
            <span className="Card-action-price">
              {`Rp ${price.toLocaleString("id")}`}
            </span>
            <span className="Card-action-unit">{` / ${unit}`}</span>
          </div>
          {!actionReverse ? (
            <Link to={`/toko/${id}`}>
              <Button
                display="fullwidth"
                icon="shopping-cart"
                text="Mulai Belanja"
              />
            </Link>
          ) : (
            <div>
              {disabled ? (
                <Button
                  display="fullwidth"
                  action={action}
                  icon="ban"
                  text="Stok Habis"
                  disabled
                />
              ) : (
                <div>
                  {overlay ? (
                    <div>
                      <Button
                        className="Card-action-minus"
                        display="icon"
                        action={action}
                        icon="minus"
                        text="Kurangi"
                        isSecondary
                      />
                      <Button
                        className="Card-action-plus"
                        display="icon"
                        action={action}
                        icon="plus"
                        text="Tambahkan"
                      />
                    </div>
                  ) : (
                    <Button
                      display="fullwidth"
                      action={action}
                      icon="cart-plus"
                      text="Beli"
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

Card.propTypes = {
  keyword: T.string.isRequired,
  id: T.string.isRequired,
  title: T.string.isRequired,
  description: T.string.isRequired,
  image: T.string.isRequired,
  overlay: T.string,
  ribbon: T.string,
  tooltip: T.string,
  disabled: T.bool,
  unit: T.string,
  price: T.number.isRequired,
  action: T.func,
  actionReverse: T.func
};
