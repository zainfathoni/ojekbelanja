import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import { getStore, getOrderListItems, getTotal } from "../reducers";
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
      const item = order[key];
      return (
        <ListItem
          key={key}
          id={item.id}
          name={item.name}
          desc={item.desc}
          image={item.image}
          unit={item.unit}
          step={item.step}
          price={item.price}
          category={item.category}
          count={item.count}
          quantity={item.quantity}
          subtotal={item.subtotal}
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
  order: T.objectOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired,
      desc: T.string.isRequired,
      image: T.string.isRequired,
      unit: T.string.isRequired,
      step: T.number.isRequired,
      price: T.number.isRequired,
      quantity: T.string,
      subtotal: T.string
    })
  ),
  total: T.number.isRequired,
  setOrder: T.func.isRequired,
  removeOrder: T.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  toko: getStore(state, ownProps.id),
  order: getOrderListItems(state),
  total: getTotal(state)
});

PesananForm = connect(mapStateToProps, actions)(PesananForm);

export default PesananForm;
