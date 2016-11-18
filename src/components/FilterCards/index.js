import React, { PropTypes as T } from 'react';

import Card from './Card';
import Section from './Section';
import './FilterCards.css';

export default function FilterCards(props) {
  const {
    keyword,
    items,
    sections,
    fields,
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
      items[key][fields.title].toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
      items[key][fields.description].toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
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
      const section = items[key][fields.section];
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
      {fields.section ?
        <div>
          {Object.keys(sectionedItems)
            .map(section =>
              <Section
                key={section}
                id={section}
                label={sections[section]}
                items={sectionedItems[section]}
                keyword={keyword}
                fields={fields}
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
                title={filteredItems[key][fields.title]}
                description={filteredItems[key][fields.description]}
                image={require(`../../css/images/${filteredItems[key][fields.image]}`)}
                ribbon={items[key][fields.ribbon]}
                tooltip={items[key][fields.tooltip]}
                disabled={items[key][fields.disabled]}
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
  sections: T.objectOf(T.string),
  fields: T.shape({
    title: T.string.isRequired,
    description: T.string.isRequired,
    image: T.string.isRequired,
    ribbon: T.string,
    tooltip: T.string,
    section: T.string,
    isDisabled: T.bool,
  }).isRequired,
  action: T.func.isRequired,
  actionReverse: T.func,
  collection: T.objectOf(T.number),
}
