import React, { PropTypes as T } from 'react';

import './DescriptionList.css';

export default function DescriptionList(props) {
  const { list } = props;

  return (
    <dl className="DescriptionList">
      {list
        .map(item =>
          <div key={item.term}>
            <dt>{item.term}</dt>
            <dd>{item.definition || "-"}</dd>
          </div>
        )
      }
    </dl>
  )
}

DescriptionList.propTypes = {
  list: T.arrayOf(T.shape({
    term: T.string.isRequired,
    definition: T.string,
  })).isRequired,
}
