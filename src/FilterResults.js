import React, { Component } from 'react';

import Card from './Card';
import './css/FilterResults.css';

export default class FilterResults extends Component {
  render() {
    const { keyword, items } = this.props
    const ids = Object.keys(items);

    // Render Loading Bars
    if (ids.length === 0) {
      return (
        <div className="loading-bars">
          Loading...
        </div>
      )
    }
    
    const filteredItems = ids
      .filter(key => 
        items[key][this.props.titleField].toLowerCase()
        .indexOf(keyword.toLowerCase()) !== -1)
      .reduce((res, key) =>
        Object.assign(res,
        { [key]: items[key] }), {});

    return (
      <div className="l-filter-result">
        <ul className="l-grid">
          {Object.keys(filteredItems)
            .map(key =>
              <Card
                key={key}
                id={key}
                title={filteredItems[key][this.props.titleField]}
                description={filteredItems[key][this.props.descriptionField]}
                image={require(`./css/images/${filteredItems[key][this.props.imageField]}`)}
                action={this.props.action}
                />
            )
          }
        </ul>
      </div>
    )
  }
}

FilterResults.propTypes = {
  keyword: React.PropTypes.string.isRequired,
  items: React.PropTypes.object.isRequired,
  titleField: React.PropTypes.string.isRequired,
  descriptionField: React.PropTypes.string.isRequired,
  imageField: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired
}
