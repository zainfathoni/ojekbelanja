import React from 'react';

import './Card.css';

export default function Card(props) {
  const { keyword, title } = props;
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
          <button className="card-action-btn" onClick={(e) => props.action(props.id)}>
            Mulai Belanja <i className="material-icons">shopping_cart</i>
          </button>
        </div>
      </div>
    </li>
  )
}

Card.propTypes = {
  id: React.PropTypes.string.isRequired,
  keyword: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired
}
