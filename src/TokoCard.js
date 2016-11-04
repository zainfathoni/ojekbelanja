import React from 'react';

export default function TokoCard(props) {
  const { tokoId, tokoName, tokoProfile, goToToko } = props
  
  return (
    <li>
      <div className="card">
        <div className="card-image">
          <img src={tokoProfile} alt="Toko Profile" />
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
  tokoProfile: React.PropTypes.string.isRequired,
  goToToko: React.PropTypes.func.isRequired
}
