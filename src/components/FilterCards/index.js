import React from 'react';
import { PropTypes as T } from 'prop-types';

import TokoCard from '../../containers/TokoCard';
import ProductCard from '../../containers/ProductCard';
import Section from './Section';
import './FilterCards.css';

export default function FilterCards(props) {
  const {
    keyword,
    items,
    sections,
    fields,
  } = props
  const ids = Object.keys(items);

  // Render Loading Bars
  if (!ids.length) {
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
    .reduce((res, key) =>
      ({
        ...res,
        [key]: items[key],
      }),
      {}
    );

  const sectionedItems = Object.keys(filteredItems)
    .reduce(
    (res, key) => {
      const section = items[key][fields.section];
      return ({
        ...res,
        [section]: ({
          ...res[section],
          [key]: items[key],
        })
      });
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
                      return <ProductCard
                        key={key}
                        id={key}
                        product={item}
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
              return <TokoCard
                key={key}
                id={key}
                toko={item}
                keyword={keyword}
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
    section: T.string,
  }).isRequired,
  collection: T.objectOf(T.number),
}
