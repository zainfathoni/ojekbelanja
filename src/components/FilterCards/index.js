import React, { Component } from 'react';

import Card from './Card';
import Section from './Section';
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
      action,
      actionReverse,
      collection
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
        items[key][titleField].toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        items[key][descriptionField].toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
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

    return (
      <div className="l-filter-cards">
        {sectionField ?
          <div>
            {Object.keys(sectionedItems)
              .map(section =>
                <Section
                  key={section}
                  id={section}
                  label={sections[section]}
                  items={sectionedItems[section]}
                  keyword={keyword}
                  titleField={titleField}
                  descriptionField={descriptionField}
                  imageField={imageField}
                  action={action}
                  actionReverse={actionReverse}
                  collection={collection}
                  />
              )
            }
          </div>
          :
          <ul className="l-grid">
            {Object.keys(filteredItems)
              .map(key =>
                <Card
                  key={key}
                  id={key}
                  keyword={keyword}
                  title={filteredItems[key][titleField]}
                  description={filteredItems[key][descriptionField]}
                  image={require(`../../css/images/${filteredItems[key][imageField]}`)}
                  unit="pengiriman"
                  step={1}
                  price={filteredItems[key].cost}
                  action={action}
                  actionReverse={actionReverse}
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
  actionReverse: React.PropTypes.func,
  collection: React.PropTypes.object
}
