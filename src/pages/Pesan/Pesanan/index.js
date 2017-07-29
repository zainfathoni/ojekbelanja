import React from 'react';
import { PropTypes as T } from 'prop-types';
import { Link } from 'react-router-dom';

import Form from '../../../components/Form';
import Button from '../../../components/Button';
import ProductListItem from '../../../containers/ProductListItem';
import { total } from '../../../services/product';
import { stores, products } from '../../../models';
import './Pesanan.css';

export default function Pesanan(props) {
  const {
    name,
    order,
    storeId,
  } = props;

  return (
    <Form
      name={name}
      title="Pesanan Anda"
      icon={<i className="fa fa-lg fa-shopping-cart" aria-hidden="true"></i>}
      header={
        /**/
        <Link
          to={`/toko/${storeId}`}
        >
          <Button
            className="Pesanan-heading-action"
            display="content"
            icon="arrow-left"
            text="Kembali"
            isSecondary
            isSmall
          />
        </Link>
      }
      footer={
        <div className="Pesanan-footer">
          <div className="Pesanan-footer-delivery-fee">
            <div className="Pesanan-footer-delivery-fee-label">
              Ongkos Kirim
            </div>
            <div className="Pesanan-footer-delivery-fee-amount">
              {`Rp ${(stores[storeId].cost).toLocaleString('id')}`}
            </div>
          </div>
          <hr />
          <div className="Pesanan-footer-total-price">
            <div className="Pesanan-footer-total-price-label">
              Harga Total
            </div>
            <div className="Pesanan-footer-total-price-amount">
              {`Rp ${(stores[storeId].cost + total(order, products)).toLocaleString('id')}`}
            </div>
          </div>
        </div>
      }
      >
      {Object.keys(order)
        .map(key => {
          const item = products[key];
          return (
            <ProductListItem
              key={key}
              id={key}
              item={item}
            />
          )
        })
      }
    </Form>
  )
}

Pesanan.propTypes = {
  name: T.string.isRequired,
  order: T.object.isRequired,
  storeId: T.string.isRequired,
}
