import React from 'react';

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
    step
  } = props;

  return (
    <li>
      <div className={"card" + (count ? " card-is-selected" : "")}>
        <div className="card-image">
          <img src={props.image} alt={props.title} />
          {count &&
            <div className="card-image-overlay">
              <div className="card-image-overlay-qty">
                {quantify(count, step, unit)}
              </div>
            </div>
          }
        </div>
        <div className="card-content">
          <div className="card-content-title">
            {markHelper(title, keyword)}
          </div>
          <div className="card-content-description">
            {markHelper(description, keyword)}
          </div>
        </div>
        <div className="card-action">
          {!props.actionReverse ?
            <Button
              type="fullwidth"
              action={(e) => props.action(props.id)}
              icon="shopping-cart"
              text="Mulai Belanja"
              />
            :
            <div>
              <div className="card-action-price-parent">
                <span className="card-action-price">
                  {`Rp ${props.price.toLocaleString('id')}`}
                </span>
                <span className="card-action-unit">
                  {` / ${props.unit}`}
                </span>
              </div>
              {count ?
                <div>
                  <Button
                    className="minus"
                    display="icon"
                    action={(e) => props.actionReverse(props.id)}
                    icon="minus"
                    text="Kurangi"
                    isSecondary
                    />
                  <Button
                    className="plus"
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
  keyword: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  unit: React.PropTypes.string,
  step: React.PropTypes.number,
  price: React.PropTypes.number,
  action: React.PropTypes.func.isRequired,
  actionReverse: React.PropTypes.func,
  count: React.PropTypes.number
}
