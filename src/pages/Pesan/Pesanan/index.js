import React, { PropTypes } from 'react';

import { quantify, escapeFloatingPoint } from '../../../services/product';
import { tokos, products } from '../../../models';
import '../../pages.css';
import '../Pesan.css';

export default function Pesanan(props) {
  const {
    tokoId,
    order,
    kembali,
    update,
    remove
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
    <div className="pesanan">
      <div className="pesanan-heading">
        <div className="pesanan-heading-title">
          <i className="material-icons">&#xE8CC;</i>
          Pesanan Anda
        </div>
        <button
          className="pesanan-heading-action order-action order-action-clear"
          onClick={(e) => kembali(tokoId)}>
          <i className="material-icons">&#xE5C4;</i>
          Kembali
        </button>
      </div>
      <div className="pesanan-body">
        {Object.keys(order)
          .map(key => {
            const item = products[key];
            return (
              <table key={key} className="pesanan-item">
                <tbody>
                  <tr>
                    <td width="10%" className="pesanan-item-image-wrapper">
                      <img
                        className="pesanan-item-image"
                        src={require(`../../../css/images/${item.image}`)}
                        alt={item.name}
                        />
                    </td>
                    <td width="70%" className="pesanan-item-detail">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="100%">
                              <div className="pesanan-item-name">
                                {item.name}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="pesanan-item-price-per-unit">
                              <span className="pesanan-item-price">
                                {`Rp ${(item.price).toLocaleString('id')}/`}
                              </span>
                              <span className="pesanan-item-unit">
                                {`${item.unit}`}
                              </span>
                              <div className="pesanan-item-order-quantified">
                                {quantify(order[key], item.step, item.unit)}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="pesanan-item-total-price">
                                {`Rp ${(item.price * item.step * order[key]).toLocaleString('id')}`}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width="10%" className="pesanan-item-order-qty">
                      <input
                        className="pesanan-item-order-qty-input"
                        type="number"
                        step={item.step}
                        value={escapeFloatingPoint(order[key] * item.step)}
                        onChange={(e) => update(key, e.target.value / item.step)}
                        />
                      <span className="pesanan-item-order-qty-unit">
                        {item.unit}
                      </span>
                    </td>
                    <td width="10%" className="pesanan-item-order-qty-action">
                      <button
                        className="order-action order-action-clear"
                        onClick={(e) => remove(key)}>
                        <i className="material-icons">&#xE872;</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            )
          })
        }
      </div>
      <div className="pesanan-footer">
        <div className="pesanan-footer-delivery-fee">
          <div className="pesanan-footer-delivery-fee-label">
            Ongkos Kirim
                  </div>
          <div className="pesanan-footer-delivery-fee-amount">
            {`Rp ${(tokos[tokoId].cost).toLocaleString('id')}`}
          </div>
        </div>
        <hr />
        <div className="pesanan-footer-total-price">
          <div className="pesanan-footer-total-price-label">
            Harga Total
                  </div>
          <div className="pesanan-footer-total-price-amount">
            {`Rp ${(tokos[tokoId].cost + totalPrice).toLocaleString('id')}`}
          </div>
        </div>
      </div>
    </div>
  )
}

Pesanan.propTypes = {
  tokoId: PropTypes.string.isRequired,
  order: PropTypes.object.isRequired,
  kembali: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}