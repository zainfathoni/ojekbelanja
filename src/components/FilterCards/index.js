import React from "react";
import { PropTypes as T } from "prop-types";

import Section from "./Section";
import Card from "./Card";
import "./FilterCards.css";

export default function FilterCards(props) {
  const {
    keyword,
    items,
    sections,
    action,
    actionReverse,
    isFetching,
    error
  } = props;
  const ids = Object.keys(items);

  // Render Loading Bars
  if (isFetching && !ids.length) {
    return (
      <div className="l-FilterCards">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  if (error && !ids.length) {
    return (
      <div className="l-FilterCards">
        <main className="l-main">
          <p>
            Error: <code>{error}</code>
          </p>
        </main>
      </div>
    );
  }

  const filteredItems = ids
    .filter(
      key =>
        items[key].title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
        items[key].description.toLowerCase().indexOf(keyword.toLowerCase()) !==
          -1
    )
    .reduce(
      (res, key) => ({
        ...res,
        [key]: items[key]
      }),
      {}
    );

  const sectionedItems = Object.keys(filteredItems).reduce((res, key) => {
    const section = items[key].section;
    return {
      ...res,
      [section]: {
        ...res[section],
        [key]: items[key]
      }
    };
  }, {});

  return (
    <div className="l-FilterCards">
      {Object.keys(sections).length ? (
        Object.keys(sectionedItems).map(section => (
          <Section
            className="l-FilterCards-grid"
            key={section}
            id={section}
            label={sections[section]}
          >
            <ul id={section} className="l-FilterCards-grid">
              {Object.keys(sectionedItems[section]).map(key => {
                const item = sectionedItems[section][key];
                return (
                  <Card
                    key={key}
                    id={key}
                    keyword={keyword}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    unit={item.unit}
                    overlay={item.overlay}
                    ribbon={item.ribbon}
                    tooltip={item.tooltip}
                    disabled={item.disabled}
                    // FIXME: make it testable
                    action={() => action(key)}
                    actionReverse={() => actionReverse(key)}
                  />
                );
              })}
            </ul>
          </Section>
        ))
      ) : (
        <ul className="l-FilterCards-grid">
          {Object.keys(filteredItems).map(key => {
            const item = filteredItems[key];
            return (
              <Card
                key={key}
                id={key}
                keyword={keyword}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                unit={item.unit}
                overlay={item.overlay}
                ribbon={item.ribbon}
                tooltip={item.tooltip}
                disabled={item.disabled}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

FilterCards.propTypes = {
  keyword: T.string.isRequired,
  sections: T.objectOf(T.string).isRequired,
  items: T.objectOf(
    T.shape({
      section: T.string,
      title: T.string.isRequired,
      description: T.string.isRequired,
      image: T.string.isRequired,
      price: T.number.isRequired,
      unit: T.string.isRequired,
      overlay: T.string,
      disabled: T.bool,
      ribbon: T.string,
      tooltip: T.string
    })
  ).isRequired,
  action: T.func,
  actionReverse: T.func,
  isFetching: T.bool,
  error: T.string
};
