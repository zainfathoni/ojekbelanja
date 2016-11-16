import React, { PropTypes as T } from 'react';

import Card from './Card';
import Section from './Section';
import './FilterCards.css';

export default function FilterCards(props) {
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
    collection,
  } = props
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
    <div className="l-FilterCards">
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
        <ul className="l-FilterCards-grid">
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

FilterCards.propTypes = {
  keyword: T.string.isRequired,
  items: T.object.isRequired,
  sections: T.object,
  titleField: T.string.isRequired,
  descriptionField: T.string.isRequired,
  sectionField: T.string,
  imageField: T.string.isRequired,
  action: T.func.isRequired,
  actionReverse: T.func,
  collection: T.object,
}
