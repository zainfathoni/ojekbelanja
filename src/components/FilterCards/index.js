import React, { Component } from 'react';

import Card from './Card';
import './FilterCards.css';

export default class FilterCards extends Component {
  render() {
    const {
      keyword,
      items,
      titleField,
      descriptionField,
      sectionField,
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
        // TODO: @rekysenjaya Expand search to description field
        // TODO: @rekysenjaya Modularize Search
        items[key][titleField].toLowerCase()
          .indexOf(keyword.toLowerCase()) !== -1)
      .reduce((res, key) =>
        Object.assign(res, { [key]: items[key] }),
      {}
      );

    // TODO: Separate cards into sections, e.g.: separate products based on their categories
    return (
      <div className="l-filter-cards">
        {sectionField ?
          <section>
            <label htmlFor="category" className="section-label">Category</label>
            <ul id="category" className="l-grid">
              {Object.keys(filteredItems)
                .map(key =>
                  <Card
                    key={key}
                    id={key}
                    keyword={keyword}
                    title={filteredItems[key][titleField]}
                    description={filteredItems[key][descriptionField]}
                    image={require(`../../css/images/${filteredItems[key][imageField]}`)}
                    action={action}
                    />
                )
              }
            </ul>
          </section>
          :
          <ul id="category" className="l-grid">
            {Object.keys(filteredItems)
              .map(key =>
                <Card
                  key={key}
                  id={key}
                  keyword={keyword}
                  title={filteredItems[key][titleField]}
                  description={filteredItems[key][descriptionField]}
                  image={require(`../../css/images/${filteredItems[key][imageField]}`)}
                  action={action}
                  />
              )
            }
          </ul>
        }

      </div>
    )
  }
}

FilterCards.propTypes = {
  keyword: React.PropTypes.string.isRequired,
  items: React.PropTypes.object.isRequired,
  titleField: React.PropTypes.string.isRequired,
  descriptionField: React.PropTypes.string.isRequired,
  sectionField: React.PropTypes.string,
  imageField: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
}
