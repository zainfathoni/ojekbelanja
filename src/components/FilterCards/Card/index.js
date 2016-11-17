import React, { PropTypes as T } from 'react';

import Button from '../../Button';
import { quantify } from '../../../services/product';
import { markHelper } from '../../../services/matches.js'
import './Card.css';

export default function Card(props) {
  const {
    keyword,
    title,
    description,
    count,
    unit,
    step,
  } = props;

  return (
    <li>
      <div className={"Card" + (count ? " Card-is-selected" : "")}>
        <div className="Card-image">
          <img src={props.image} alt={props.title} />
          {count &&
            <div className="Card-image-overlay">
              <div className="Card-image-overlay-qty">
                {quantify(count, step, unit)}
              </div>
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
              {`Rp ${props.price.toLocaleString('id')}`}
            </span>
            <span className="Card-action-unit">
              {` / ${props.unit}`}
            </span>
          </div>
          {!props.actionReverse ?
            <Button
              display="fullwidth"
              action={(e) => props.action(props.id)}
              icon="shopping-cart"
              text="Mulai Belanja"
              />
            :
            <div>
              {count ?
                <div>
                  <Button
                    className="Card-action-minus"
                    display="icon"
                    action={(e) => props.actionReverse(props.id)}
                    icon="minus"
                    text="Kurangi"
                    isSecondary
                    />
                  <Button
                    className="Card-action-plus"
                    display="icon"
                    action={(e) => props.action(props.id)}
                    icon="plus"
                    text="Tambahkan"
                    />
                </div>
                :
                <Button
                  display="fullwidth"
                  action={(e) => props.action(props.id)}
                  icon="cart-plus"
                  text="Beli"
                  />
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
  unit: T.string,
  step: T.number,
  price: T.number,
  action: T.func.isRequired,
  actionReverse: T.func,
  count: T.number,
}
