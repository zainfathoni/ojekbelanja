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
                    .map(key => {
                      const item = sectionedItems[section][key];
                      return <Card
                        key={key}
                        id={key}
                        keyword={keyword}
                        title={item[fields.title]}
                        description={item[fields.description]}
                        image={require(`../../css/images/${item[fields.image]}`)}
                        ribbon={item[fields.ribbon]}
                        tooltip={item[fields.tooltip]}
                        disabled={item[fields.disabled]}
                        unit={item.unit}
                        step={item.step}
                        price={item.price}
                        action={action}
                        actionReverse={actionReverse}
                        count={collection[key]}
                        />
                    })
                  }
                </ul>
              </Section>
            )
          }
        </div>
        :
        <ul className="l-FilterCards-grid">
          {Object.keys(filteredItems)
            .map(key => {
              const item = filteredItems[key];
              return <Card
                key={key}
                id={key}
                keyword={keyword}
                title={item[fields.title]}
                description={item[fields.description]}
                image={require(`../../css/images/${item[fields.image]}`)}
                ribbon={item[fields.ribbon]}
                tooltip={item[fields.tooltip]}
                disabled={item[fields.disabled]}
                unit="pengiriman"
                step={1}
                price={item.cost}
                action={action}
                actionReverse={actionReverse}
                />
            })
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
