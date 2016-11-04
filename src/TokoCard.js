import React from 'react';

export default function TokoCard(props) {
  return (
    <li>
      <div className="card">
        <div className="card-image">
          <img src={props.tokoProfile} alt="Toko Profile" />
        </div>
        <div className="card-content">
          <div className="card-content-title">
            {props.tokoName}
          </div>
          <div className="card-content-description">
            {props.tokoPhone + ' - ' + props.tokoArea}
          </div>
        </div>
        <div className="card-action">
        </div>
        <button onClick={(e) => props.goToToko(props.tokoId)}>
          {props.tokoName} →
        </button>
      </div>
    </li>
  )
}

TokoCard.propTypes = {
  tokoId: React.PropTypes.string.isRequired,
  tokoName: React.PropTypes.string.isRequired,
  tokoPhone: React.PropTypes.string.isRequired,
  tokoArea: React.PropTypes.string.isRequired,
  tokoProfile: React.PropTypes.string.isRequired,
  goToToko: React.PropTypes.func.isRequired
}
