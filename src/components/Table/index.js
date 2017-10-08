import React from "react";
import { PropTypes as T } from "prop-types";
import classnames from "classnames";

import "./Table.css";

export default function Table(props) {
  const { columns, rows, footerColSpan, footerClassName, footer } = props;

  return (
    <table className="Table">
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.id}
              className={`Table-header-${column.id} Table-${column.id}`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.number}>
            {Object.keys(row).map((key, id) => (
              <td key={key} className={`Table-${columns[id].id}`}>
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {footer.map((row, rowId) => (
          <tr key={row.name}>
            {Object.keys(row).map(key => (
              <td
                key={key}
                className={classnames(
                  `Table-${key}`,
                  { "Table-reverse": footerClassName[rowId] === "reverse" },
                  { "Table-italic": footerClassName[rowId] === "italic" },
                  { "Table-total": footerClassName[rowId] === "total" }
                )}
                colSpan={footerColSpan[key]}
              >
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

Table.propTypes = {
  columns: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired
    })
  ),
  rows: T.arrayOf(T.object.isRequired).isRequired,
  footerColSpan: T.objectOf(T.number),
  footerClassName: T.objectOf(T.string),
  footer: T.array
};
