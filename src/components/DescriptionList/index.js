import React, { PropTypes as T } from 'react';

import './DescriptionList.css';

export default function DescriptionList(props) {
  const { list } = props;

  function formatDefinition(def) {
    var arrayDef = def.split('\n');
    return (
      arrayDef.length === 1 ?
        def
      :
        <div>
          {arrayDef
            .map(defElement =>
              <div key={defElement}>
                {defElement}
              </div>
            )  
          }
        </div>
    )
  }

  return (
    <dl className="DescriptionList">
      {list
        .map(item =>
          <div key={item.term}>
            <dt>{item.term}</dt>
            <dd>{formatDefinition(item.definition)}</dd>
          </div>
        )
      }
    </dl>
  )
}

DescriptionList.propTypes = {
  list: T.arrayOf(T.shape({
    term: T.string.isRequired,
    definition: T.string.isRequired,
  })).isRequired,
}
