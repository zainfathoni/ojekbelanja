import React, { PropTypes as T } from 'react';

import Button from '../../Button';
import { quantify } from '../../../services/product';
import { markHelper } from '../../../services/matches.js'
import './Card.css';

export default function Card(props) {
  const {
    keyword,
    id,
    title,
    description,
    image,
    ribbon,
    tooltip,
    disabled,
    unit,
    step,
    price,
    action,
    actionReverse,
    count,
  } = props;

  return (
    <li>
      <div className={"Card" + (count ? " Card-is-selected" : "")}>
        <div className="Card-image">
          <img src={image} alt={title} />
          {count &&
            <div className="Card-image-overlay">
              <div className="Card-image-overlay-qty">
                {quantify(count, step, unit)}
              </div>
            </div>
          }
          {ribbon &&
            <div className="Card-ribbon-wrapper">
              <div className="Card-ribbon">
                {ribbon}
              </div>
            </div>
          }
          {ribbon && tooltip &&
            <div className="Card-tooltip">
              {tooltip}
            </div>
          }
        </div>
        <div className="Card-content">
          <div className="Card-content-title">
            {markHelper(title, keyword)}
          </div>
          <div className="Card-content-description">
            {markHelper(description, keyword)}
          </div>
        </div>
        <div className="Card-action">
          <div className="Card-action-price-parent">
            <span className="Card-action-price">
              {`Rp ${price.toLocaleString('id')}`}
            </span>
            <span className="Card-action-unit">
              {` / ${unit}`}
            </span>
          </div>
          {!actionReverse ?
            <Button
              display="fullwidth"
              action={(e) => action(id)}
              icon="shopping-cart"
              text="Mulai Belanja"
              />
            :
            <div>
              {disabled ?
                <Button
                  display="fullwidth"
                  action={(e) => action(id)}
                  icon="ban"
                  text="Stok Habis"
                  disabled
                  />
                :
                <div>
                  {count ?
                    <div>
                      <Button
                        className="Card-action-minus"
                        display="icon"
                        action={(e) => actionReverse(id)}
                        icon="minus"
                        text="Kurangi"
                        isSecondary
                        />
                      <Button
                        className="Card-action-plus"
                        display="icon"
                        action={(e) => action(id)}
                        icon="plus"
                        text="Tambahkan"
                        />
                    </div>
                    :
                    <Button
                      display="fullwidth"
                      action={(e) => action(id)}
                      icon="cart-plus"
                      text="Beli"
                      />
                  }
                </div>
              }
            </div>
          }
        </div>
      </div>
    </li>
  )
}

Card.propTypes = {
  keyword: T.string.isRequired,
  id: T.string.isRequired,
  title: T.string.isRequired,
  description: T.string.isRequired,
  image: T.string.isRequired,
  ribbon: T.string,
  tooltip: T.string,
  isDisabled: T.bool,
  unit: T.string,
  step: T.number,
  price: T.number,
  action: T.func.isRequired,
  actionReverse: T.func,
  count: T.number,
}
