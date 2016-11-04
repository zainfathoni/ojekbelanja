import React from 'react';

import './css/Card.css';

export default function Card(props) {
  return (
    <li>
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="Toko Profile" />
        </div>
        <div className="card-content">
          <div className="card-content-title">
            {props.title}
          </div>
          <div className="card-content-description">
            {props.description}
          </div>
        </div>
        <div className="card-action">
        </div>
        <button onClick={(e) => props.action(props.id)}>
          {props.title} →
        </button>
      </div>
    </li>
  )
}

Card.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired
}
