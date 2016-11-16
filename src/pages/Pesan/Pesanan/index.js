import React, { PropTypes as T } from 'react';

import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import { quantify, escapeFloatingPoint } from '../../../services/product';
import { tokos, products } from '../../../models';
import '../../pages.css';
import './Pesanan.css';

export default function Pesanan(props) {
  const {
    tokoId,
    order,
    goBack,
    update,
    remove,
    cleanUp,
  } = props;

  // Calculate Price
  const totalPrice =
    Object.keys(order)
      .reduce(
      (sum, key) =>
        sum + (products[key].price * products[key].step * order[key])
      ,
      0
      );

  return (
    <div className="Pesanan">
      <div className="Pesanan-heading">
        <div className="Pesanan-heading-title">
          <i className="fa fa-lg fa-shopping-cart" aria-hidden="true"></i>
          {" Pesanan Anda"}
        </div>
        <Button
          className="Pesanan-heading-action"
          display="content"
          action={(e) => goBack(tokoId)}
          icon="arrow-left"
          text="Kembali"
          isSecondary
          isSmall
          />
      </div>
      <div className="Pesanan-body">
        {Object.keys(order)
          .map(key => {
            const item = products[key];
            return (
              <table key={key} className="Pesanan-item">
                <tbody>
                  <tr>
                    <td width="10%" className="Pesanan-item-image-wrapper">
                      <img
                        className="Pesanan-item-image"
                        src={require(`../../../css/images/${item.image}`)}
                        alt={item.name}
                        />
                    </td>
                    <td width="72%" className="Pesanan-item-detail">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="100%">
                              <div className="Pesanan-item-name">
                                {item.name}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="Pesanan-item-price-per-unit">
                              <span className="Pesanan-item-price">
                                {`Rp ${(item.price).toLocaleString('id')}/`}
                              </span>
                              <span className="Pesanan-item-unit">
                                {`${item.unit}`}
                              </span>
                              <div className="Pesanan-item-order-quantified">
                                {quantify(order[key], item.step, item.unit)}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="Pesanan-item-total-price">
                                {`Rp ${(item.price * item.step * order[key]).toLocaleString('id')}`}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width="10%" className="Pesanan-item-order-qty">
                      <TextField
                        className="Pesanan-item-order-qty-input"
                        name={key}
                        type="number"
                        display="fixed"
                        value={escapeFloatingPoint(order[key] * item.step)}
                        onChange={(name, value) => update(key, value / item.step)}
                        onBlur={(name, value) => cleanUp(key)}
                        noValidation
                        min={0}
                        step={item.step}
                        />
                      <span className="Pesanan-item-order-qty-unit">
                        {item.unit}
                      </span>
                    </td>
                    <td width="8%" className="Pesanan-item-order-qty-action">
                      <Button
                        display="icon"
                        action={(e) => remove(key)}
                        icon="trash"
                        text="Hapus"
                        isSecondary
                        isSmall
                        />
                    </td>
                  </tr>
                </tbody>
              </table>
            )
          })
        }
      </div>
      <div className="Pesanan-footer">
        <div className="Pesanan-footer-delivery-fee">
          <div className="Pesanan-footer-delivery-fee-label">
            Ongkos Kirim
          </div>
          <div className="Pesanan-footer-delivery-fee-amount">
            {`Rp ${(tokos[tokoId].cost).toLocaleString('id')}`}
          </div>
        </div>
        <hr />
        <div className="Pesanan-footer-total-price">
          <div className="Pesanan-footer-total-price-label">
            Harga Total
          </div>
          <div className="Pesanan-footer-total-price-amount">
            {`Rp ${(tokos[tokoId].cost + totalPrice).toLocaleString('id')}`}
          </div>
        </div>
      </div>
    </div>
  )
}

Pesanan.propTypes = {
  tokoId: T.string.isRequired,
  order: T.object.isRequired,
  goBack: T.func.isRequired,
  update: T.func.isRequired,
  remove: T.func.isRequired,
  cleanUp: T.func.isRequired,
}
