import React from "react";
import { PropTypes as T } from "prop-types";

import TokoCard from "../../containers/TokoCard";
import ProductCard from "../../containers/ProductCard";
import Section from "./Section";
import "./FilterCards.css";

export default function FilterCards(props) {
  const {
    keyword,
    items,
    sections,
    titleField,
    descriptionField,
    sectionField,
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
        items[key][titleField].toLowerCase().indexOf(keyword.toLowerCase()) !==
          -1 ||
        items[key][descriptionField]
          .toLowerCase()
          .indexOf(keyword.toLowerCase()) !== -1
    )
    .reduce(
      (res, key) => ({
        ...res,
        [key]: items[key]
      }),
      {}
    );

  const sectionedItems = Object.keys(filteredItems).reduce((res, key) => {
    const section = items[key][sectionField];
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
      {sectionField ? (
        <div>
          {Object.keys(sectionedItems).map(section => (
            <Section
              className="l-FilterCards-grid"
              key={section}
              id={section}
              label={sections[section]}
            >
              <ul id={section} className="l-FilterCards-grid">
                {Object.keys(sectionedItems[section]).map(key => {
                  const item = sectionedItems[section][key];
                  return <ProductCard key={key} id={key} product={item} />;
                })}
              </ul>
            </Section>
          ))}
        </div>
      ) : (
        <ul className="l-FilterCards-grid">
          {Object.keys(filteredItems).map(key => {
            const item = filteredItems[key];
            return (
              <TokoCard key={key} id={key} toko={item} keyword={keyword} />
            );
          })}
        </ul>
      )}
    </div>
  );
}

FilterCards.propTypes = {
  keyword: T.string.isRequired,
  items: T.object.isRequired,
  sections: T.objectOf(T.string),
  titleField: T.string.isRequired,
  descriptionField: T.string.isRequired,
  sectionField: T.string,
  isFetching: T.bool,
  error: T.string
};
