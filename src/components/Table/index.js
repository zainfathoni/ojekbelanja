import React from 'react';
import { PropTypes as T } from 'prop-types';
import classnames from 'classnames';

import './Table.css';

export default function Table(props) {
  const {
    type,
    body,
    footerColSpan,
    footerClassName,
    footer,
  } = props;

  return (
    <table className="Table">
      <thead>
        <tr>
          {Object.keys(type)
            .map(column =>
              <th key={column}
                className={`Table-header-${type[column]} Table-${type[column]}`}>
                {column}
              </th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {body
          .map(row =>
            <tr key={row["No"]}>
              {Object.keys(row)
                .map(data =>
                  <td key={data}
                    className={`Table-${type[data]}`}>
                    {row[data]}
                  </td>
                )
              }
            </tr>
          )
        }
      </tbody>
      <tfoot>
        {footer
          .map((row, rowId) =>
            <tr key={row["Nama"]}>
              {Object.keys(row)
                .map(data =>
                  <td key={data}
                    className={classnames(
                      `Table-${type[data]}`,
                      { 'Table-reverse': footerClassName[rowId] === 'reverse' },
                      { 'Table-italic': footerClassName[rowId] === 'italic' },
                      { 'Table-total': footerClassName[rowId] === 'total' },
                    )}
                    colSpan={footerColSpan[data]}>
                    {row[data]}
                  </td>
                )
              }
            </tr>
          )
        }
      </tfoot>
    </table>
  )
}

Table.propTypes = {
  type: T.objectOf(T.string).isRequired,
  body: T.array.isRequired,
  footerColSpan: T.objectOf(T.number),
  footerClassName: T.objectOf(T.string),
  footer: T.array,
}
