import React, { Component } from 'react';

import tokoProfPic from './css/images/placeholder-300x300.png'
import './css/TokoList.css';

export default class TokoList extends Component {
  render() {
    const { tokos, keyword } = this.props
    const tokoIds = Object.keys(tokos);

    // Render Loading Bars
    if (tokoIds.length === 0) {
      return (
        <div className="loading-bars">
          Loading...
        </div>
      )
    }
    
    const filteredTokos = tokoIds
      .filter(key => 
        tokos[key].name.toLowerCase()
        .indexOf(keyword.toLowerCase()) !== -1)
      .reduce((res, key) =>
        Object.assign(res,
        { [key]: tokos[key].name }), {});

    return (
      <div className="l-filter-result">
        <ul className="l-grid">
          {Object.keys(filteredTokos)
            .map(key =>
              <li key={key}>
                <div className="card">
                  <div className="card-image">
                    <img src={tokoProfPic} alt="Toko Profile Picture" />
                  </div>
                  <button onClick={(e) => this.props.goToToko(key)}>
                    {filteredTokos[key]} →
                  </button>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

TokoList.propTypes = {
  tokos: React.PropTypes.object.isRequired,
  keyword: React.PropTypes.string.isRequired,
  goToToko: React.PropTypes.func.isRequired
}
