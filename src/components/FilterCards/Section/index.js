import React, { PropTypes as T } from 'react';

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
    collection,
  } = props;

  return (
    <section className="Section">
      <label htmlFor={id} className="Section-label">{label}</label>
      <hr className="Section-separator" />
      <ul id={id} className="l-FilterCards-grid">
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
  id: T.string.isRequired,
  label: T.string.isRequired,
  items: T.object.isRequired,
  keyword: T.string.isRequired,
  titleField: T.string.isRequired,
  descriptionField: T.string.isRequired,
  imageField: T.string.isRequired,
  action: T.func.isRequired,
  actionReverse: T.func,
  collection: T.object,
}
