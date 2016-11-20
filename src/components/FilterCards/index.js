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
      <div className="l-FilterCards">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
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
                className="l-FilterCards-grid"
                key={section}
                id={section}
                label={sections[section]}
                >
                <ul id={section} className="l-FilterCards-grid">
                {Object.keys(sectionedItems[section])
                  .map(key =>
                    <Card
                      key={key}
                      id={key}
                      keyword={keyword}
                      title={sectionedItems[section][key][fields.title]}
                      description={sectionedItems[section][key][fields.description]}
                      image={require(`../../css/images/${sectionedItems[section][key][fields.image]}`)}
                      ribbon={sectionedItems[section][key][fields.ribbon]}
                      tooltip={sectionedItems[section][key][fields.tooltip]}
                      disabled={sectionedItems[section][key][fields.disabled]}
                      unit={sectionedItems[section][key].unit}
                      step={sectionedItems[section][key].step}
                      price={sectionedItems[section][key].price}
                      action={action}
                      actionReverse={actionReverse}
                      count={collection[key]}
                      />)
                }
                </ul>
              </Section>
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
