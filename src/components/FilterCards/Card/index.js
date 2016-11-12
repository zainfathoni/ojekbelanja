import React from 'react';

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
            <button className="card-action-btn" onClick={(e) => props.action(props.id)}>
              <i className="fa fa-lg fa-shopping-cart" aria-hidden="true"></i>
              {" Mulai Belanja"}
            </button>
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
                  <button className="card-action-btn minus" onClick={(e) => props.actionReverse(props.id)}>
                    <i className="fa fa-lg fa-minus" aria-hidden="true"></i>
                  </button>
                  <button className="card-action-btn plus" onClick={(e) => props.action(props.id)}>
                    <i className="fa fa-lg fa-plus" aria-hidden="true"></i>
                  </button>
                </div>
                :
                <button className="card-action-btn" onClick={(e) => props.action(props.id)}>
                  <i className="fa fa-lg fa-cart-plus" aria-hidden="true"></i>
                  {" Beli"}
                </button>
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
