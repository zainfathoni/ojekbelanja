import React, { PropTypes as T } from 'react';

import Form from '../../../components/Form';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import { total } from '../../../services/product';
import { stores, products } from '../../../models';
import './Pesanan.css';

export default function Pesanan(props) {
  const {
    name,
    context,
    storeId,
    action,
  } = props;

  const order = context.state[name];

  return (
    <Form
      name={name}
      title="Pesanan Anda"
      icon={<i className="fa fa-lg fa-shopping-cart" aria-hidden="true"></i>}
      header={
        <Button
          className="Pesanan-heading-action"
          display="content"
          action={(e) => action(storeId)}
          icon="arrow-left"
          text="Kembali"
          isSecondary
          isSmall
          />
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
            <ListItem
              key={key}
              id={key}
              item={item}
              order={order}
            />
          )
        })
      }
    </Form>
  )
}

Pesanan.propTypes = {
  name: T.string.isRequired,
  context: T.object.isRequired,
  storeId: T.string.isRequired,
  action: T.func.isRequired,
}
