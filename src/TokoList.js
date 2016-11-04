import React, { Component } from 'react';

import TokoCard from './TokoCard';
import tokoProfile from './css/images/placeholder-224x224.png';
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
              <TokoCard
                key={key}
                tokoId={key}
                tokoName={filteredTokos[key]}
                tokoProfile={tokoProfile}
                goToToko={this.props.goToToko}
                />
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
