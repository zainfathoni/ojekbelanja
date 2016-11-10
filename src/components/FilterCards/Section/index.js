import React from 'react';

import Card from '../Card';
import './Section.css';

export default function Section(props) {
  const {
    id,
    label,
    items,
    keyword,
    titleField,
    descriptionField,
    imageField,
    action,
    actionReverse,
    collection
  } = props;

  return (
    <section className="filter-cards-section">
      <label htmlFor={id} className="filter-cards-section-label">{label}</label>
      <hr className="filter-cards-section-separator" />
      <ul id={id} className="l-grid">
        {
          Object.keys(items)
            .map(key =>
              <Card
                key={key}
                id={key}
                keyword={keyword}
                title={items[key][titleField]}
                description={items[key][descriptionField]}
                image={require(`../../../css/images/${items[key][imageField]}`)}
                unit={items[key].unit}
                step={items[key].step}
                price={items[key].price}
                action={action}
                actionReverse={actionReverse}
                count={collection[key]}
                />
            )
        }
      </ul>
    </section>
  )
}

Section.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  items: React.PropTypes.object.isRequired,
  keyword: React.PropTypes.string.isRequired,
  titleField: React.PropTypes.string.isRequired,
  descriptionField: React.PropTypes.string.isRequired,
  imageField: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  actionReverse: React.PropTypes.func,
  collection: React.PropTypes.object
}
