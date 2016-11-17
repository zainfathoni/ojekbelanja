import React, { PropTypes as T } from 'react';
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
                    {type[data] === "price" ?
                      `Rp ${row[data].toLocaleString('id')}`
                      :
                      row[data]
                    }
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
                      { 'Table-total': footerClassName[rowId] }
                    )}
                    colSpan={footerColSpan[data]}>
                    {type[data] === "price" ?
                      `Rp ${row[data].toLocaleString('id')}`
                      :
                      row[data]
                    }
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
  type: T.object.isRequired,
  body: T.array.isRequired,
  footerColSpan: T.object,
  footerClassName: T.object,
  footer: T.array,
}
