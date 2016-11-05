import React, { Component } from 'react';

import Card from './Card';
import './css/FilterResults.css';

export default class FilterResults extends Component {
  render() {
    const {
      keyword,
      items,
      titleField,
      descriptionField,
      imageField,
      action
    } = this.props
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
        items[key][titleField].toLowerCase()
          .indexOf(keyword.toLowerCase()) !== -1)
      .reduce((res, key) => {
        const title = items[key][titleField];
        // Mark matching characters
        const index = title.toLowerCase().indexOf(keyword.toLowerCase());
        const markedTitle = title.slice(0, index) + '<mark>' + title.slice(index, index + keyword.length) + '</mark>' + title.slice(index + keyword.length);
        console.log(markedTitle);

        return Object.assign(res, {
          [key]: {
            title: items[key][titleField],
            titleIndex: index,
            description: items[key][descriptionField],
            image: items[key][imageField]
          }
        })
      },
      {}
      );

    return (
      <div className="l-filter-result">
        <ul className="l-grid">
          {Object.keys(filteredItems)
            .map(key =>
              <Card
                key={key}
                id={key}
                keyword={keyword}
                title={filteredItems[key].title}
                titleIndex={filteredItems[key].titleIndex}
                description={filteredItems[key].description}
                image={require(`./css/images/${filteredItems[key].image}`)}
                action={action}
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
