import React from "react";
import { PropTypes as T } from "prop-types";

import Button from "../Button";
import TextField from "../TextField";
import { escapeFloatingPoint } from "../../services/product";
import "./ListItem.css";

export default function ListItem({
  id,
  name,
  desc,
  image,
  unit,
  step,
  price,
  count,
  quantity,
  subtotal,
  setOrder,
  removeOrder
}) {
  const onChange = (field, value) => {
    setOrder(field, escapeFloatingPoint(value));
  };

  const onBlur = (productId, count) => {
    if (count <= 0) {
      removeOrder(productId);
    }
  };

  const remove = productId => {
    removeOrder(productId);
  };

  return (
    <table className="ListItem">
      <tbody>
        <tr>
          <td className="ListItem-image-wrapper">
            <img className="ListItem-image" src={image} alt={name} />
          </td>
          <td className="ListItem-detail">
            <table width="100%">
              <tbody>
                <tr>
                  <td width="100%">
                    <div className="ListItem-name">{name}</div>
                  </td>
                </tr>
                <tr>
                  <td className="ListItem-price-per-unit">
                    <span className="ListItem-price">
                      {`Rp ${price.toLocaleString("id")}`}
                    </span>
                    <span className="ListItem-unit">{`/${unit}`}</span>
                    <div className="ListItem-order-quantified">{quantity}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="ListItem-total-price">{subtotal}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="ListItem-order-qty">
            <TextField
              className="ListItem-order-qty-input"
              name={id}
              type="number"
              display="fixed"
              value={escapeFloatingPoint(count * step)}
              onChange={(name, value) => onChange(name, value / step)}
              onBlur={() => onBlur(id, count)}
              min={0}
              step={step}
            />
            <span className="ListItem-order-qty-unit">{unit}</span>
          </td>
          <td className="ListItem-order-qty-action">
            <Button
              display="icon"
              action={() => remove(id)}
              icon="trash"
              text="Hapus"
              isSecondary
              isSmall
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

ListItem.propTypes = {
  id: T.string.isRequired,
  name: T.string.isRequired,
  desc: T.string.isRequired,
  image: T.string.isRequired,
  unit: T.string.isRequired,
  step: T.number.isRequired,
  price: T.number.isRequired,
  count: T.number.isRequired,
  quantity: T.string,
  subtotal: T.string,
  setOrder: T.func.isRequired,
  removeOrder: T.func.isRequired
};
