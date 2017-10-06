import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import { getStore, getProducts, getOrder, getTotal } from "../../../reducers";
import Form from "../../../components/Form";
import Button from "../../../components/Button";
import FormFooterNumbers from "../../../components/FormFooterNumbers";
import ProductListItem from "../../../containers/ProductListItem";

let Pesanan = ({ id, toko, order, products, total }) => (
  <Form
    name={name}
    title="Pesanan Anda"
    icon="shopping-cart"
    header={
      <Button
        className="Pesanan-heading-action"
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
      return <ProductListItem key={key} id={key} item={item} />;
    })}
  </Form>
);

Pesanan.propTypes = {
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
  order: T.object.isRequired,
  total: T.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    toko: getStore(state, ownProps.id),
    products: getProducts(state),
    order: getOrder(state),
    total: getTotal(state)
  };
};

Pesanan = connect(mapStateToProps)(Pesanan);

export default Pesanan;
