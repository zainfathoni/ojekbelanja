import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import {
  getStore,
  getProducts,
  getOrder,
  getQuantities,
  getSubtotals,
  getTotal
} from "../reducers";
import Form from "../components/Form";
import Button from "../components/Button";
import FormFooterNumbers from "../components/FormFooterNumbers";
import ListItem from "../components/ListItem";

let PesananForm = ({
  id,
  toko,
  products,
  order,
  quantities,
  subtotals,
  total,
  setOrder,
  removeOrder
}) => (
  <Form
    name={name}
    title="Pesanan Anda"
    icon="shopping-cart"
    header={
      <Button
        display="content"
        link={`/toko/${id}`}
        icon="arrow-left"
        text="Kembali"
        isSecondary
        isSmall
      />
    }
    footer={
      <FormFooterNumbers
        labelSmall="Ongkos Kirim"
        numberSmall={`Rp ${toko.cost.toLocaleString("id")}`}
        labelBig="Harga Total"
        numberBig={`Rp ${(toko.cost + total).toLocaleString("id")}`}
      />
    }
  >
    {Object.keys(order).map(key => {
      const item = products[key];
      return (
        <ListItem
          key={key}
          id={key}
          item={item}
          count={order[key]}
          quantity={quantities[key]}
          subtotal={subtotals[key]}
          setOrder={setOrder}
          removeOrder={removeOrder}
        />
      );
    })}
  </Form>
);

PesananForm.propTypes = {
  id: T.string.isRequired,
  toko: T.shape({
    name: T.string.isRequired,
    area: T.string.isRequired,
    image: T.string.isRequired,
    cost: T.number.isRequired
  }),
  products: T.objectOf(
    T.shape({
      name: T.string.isRequired,
      desc: T.string.isRequired,
      image: T.string.isRequired,
      unit: T.string.isRequired,
      step: T.number.isRequired,
      price: T.number.isRequired,
      category: T.string.isRequired
    })
  ),
  order: T.objectOf(T.number).isRequired,
  quantities: T.objectOf(T.string).isRequired,
  subtotals: T.objectOf(T.string).isRequired,
  total: T.number.isRequired,
  setOrder: T.func.isRequired,
  removeOrder: T.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  toko: getStore(state, ownProps.id),
  products: getProducts(state),
  order: getOrder(state),
  quantities: getQuantities(state),
  subtotals: getSubtotals(state),
  total: getTotal(state)
});

PesananForm = connect(mapStateToProps, actions)(PesananForm);

export default PesananForm;
