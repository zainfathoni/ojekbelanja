import React, { Component } from 'react';

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
      <ul className="l-filter-result">
        {Object.keys(filteredTokos)
          .map(key =>
            <li>
              <button key={key} onClick={(e) => this.props.goToToko(key)}>
                {filteredTokos[key]} →
              </button>
            </li>
          )
        }
      </ul>
    )
  }
}

TokoList.propTypes = {
  tokos: React.PropTypes.object.isRequired,
  keyword: React.PropTypes.string.isRequired,
  goToToko: React.PropTypes.func.isRequired
}
