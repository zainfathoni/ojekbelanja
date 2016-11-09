import React from 'react';

import './Card.css';

export default function Card(props) {
  const {
    keyword,
    title,
  } = props;
  const index = title.toLowerCase().indexOf(keyword.toLowerCase());
  // TODO: @rekysenjaya Find multiple matches in a single string
  // TODO: @rekysenjaya Display multiple matches
  // TODO: @rekysenjaya Modularize display matches
  return (
    <li>
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="Toko Profile" />
        </div>
        <div className="card-content">
          <div className="card-content-title">
            {title.slice(0, index)}
            <mark>{title.slice(index, index + keyword.length)}</mark>
            {title.slice(index + keyword.length)}
          </div>
          <div className="card-content-description">
            {props.description}
          </div>
        </div>
        <div className="card-action">
          {!props.actionReverse ?
            <button className="card-action-btn" onClick={(e) => props.action(props.id)}>
              Mulai Belanja <i className="material-icons">shopping_cart</i>
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
                <span className="card-action-step">
                  {(props.step < 1 && props.unit === "kg") ?
                    `(${props.step * 1000} gram)`
                    :
                    `(${props.step})`
                  }
                </span>
              </div>
              {props.isInCollection ?
                <div>
                  <button className="card-action-btn minus" onClick={(e) => props.actionReverse(props.id)}>
                    <i className="material-icons">remove</i>
                  </button>
                  <button className="card-action-btn plus" onClick={(e) => props.action(props.id)}>
                    <i className="material-icons">add</i>
                  </button>
                </div>
                :
                <button className="card-action-btn" onClick={(e) => props.action(props.id)}>
                  Beli <i className="material-icons">add_shopping_cart</i>
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
  isInCollection: React.PropTypes.bool
}
