import React from 'react';

import './Card.css';
import {markHelper} from '../../helpers/matches.js'

export default function Card(props) {
  const { keyword, title, description } = props;
  const titleMarked = markHelper(title, keyword)
  const descMarked = markHelper(description, keyword)
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
            {titleMarked}
          </div>
          <div className="card-content-description">
            {descMarked}
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
