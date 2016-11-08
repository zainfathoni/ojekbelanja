import React, { Component } from 'react';

import Card from './Card';
import './FilterCards.css';

export default class FilterCards extends Component {
  render() {
    const {
      keyword,
      items,
      sections,
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
      .reduce(
      (res, key) =>
        Object.assign(
          {},
          res,
          { [key]: items[key] }),
      {}
      );

    const sectionedItems = Object.keys(filteredItems)
      .reduce(
      (res, key) => {
        const section = items[key][sectionField];
        return Object.assign(
          {},
          res,
          {
            [section]: Object.assign(
              {},
              res[section],
              { [key]: items[key] }
            )
          }
        )
      },
      {}
      );

    console.log(sectionedItems);

    return (
      <div className="l-filter-cards">
        {sectionField ?
          <div>
            {Object.keys(sectionedItems)
              .map(section =>
                <section key={section} className="filter-cards-section">
                  <label htmlFor={section} className="filter-cards-section-label">{sections[section]}</label>
                  <hr className="filter-cards-section-separator" />
                  <ul id={section} className="l-grid">
                    {
                      Object.keys(sectionedItems[section])
                        .map(key =>
                          <Card
                            key={key}
                            id={key}
                            keyword={keyword}
                            title={sectionedItems[section][key][titleField]}
                            description={sectionedItems[section][key][descriptionField]}
                            image={require(`../../css/images/${sectionedItems[section][key][imageField]}`)}
                            action={action}
                            />
                        )
                    }
                  </ul>
                </section>
              )
            }
          </div>
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
  sections: React.PropTypes.object,
  titleField: React.PropTypes.string.isRequired,
  descriptionField: React.PropTypes.string.isRequired,
  sectionField: React.PropTypes.string,
  imageField: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
}
