import React, { PropTypes as T } from 'react';

import Card from '../Card';
import './Section.css';

export default function Section(props) {
  const {
    id,
    label,
    items,
    keyword,
    fields,
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
                title={items[key][fields.title]}
                description={items[key][fields.description]}
                image={require(`../../../css/images/${items[key][fields.image]}`)}
                ribbon={items[key][fields.ribbon]}
                modal={items[key][fields.modal]}
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
  fields: T.shape({
    title: T.string.isRequired,
    description: T.string.isRequired,
    image: T.string.isRequired,
    ribbon: T.string,
    modal: T.string,
  }).isRequired,
  action: T.func.isRequired,
  actionReverse: T.func,
  collection: T.objectOf(T.number),
}
