import React from 'react';

export default function TokoCard(props) {
  const { tokoId, tokoName, tokoArea, tokoProfile, goToToko } = props
  
  return (
    <li>
      <div className="card">
        <div className="card-image">
          <img src={tokoProfile} alt="Toko Profile" />
        </div>
        <div className="card-content">
          <div className="card-content-title">
            {tokoName}
          </div>
          <div className="card-content-description">
            {tokoArea}
          </div>
        </div>
        <div className="card-action">
        </div>
        <button onClick={(e) => goToToko(tokoId)}>
          {tokoName} →
        </button>
      </div>
    </li>
  )
}

TokoCard.propTypes = {
  tokoId: React.PropTypes.string.isRequired,
  tokoName: React.PropTypes.string.isRequired,
  tokoArea: React.PropTypes.string.isRequired,
  tokoProfile: React.PropTypes.string.isRequired,
  goToToko: React.PropTypes.func.isRequired
}
