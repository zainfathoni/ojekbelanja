import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import { getOrderTable, getTotal, getCost } from "../reducers";
import Table from "../components/Table";

let OrderTable = ({ rows, total, deliveryFee }) => (
  <Table
    columns={[
      { id: "number", label: "No" },
      { id: "name", label: "Nama" },
      { id: "price", label: "Harga" },
      { id: "qty", label: "Jumlah" },
      { id: "subtotal", label: "Subtotal" }
    ]}
    rows={rows}
    footerColSpan={{
      name: 2,
      price: 3
    }}
    footerClassName={{
      1: "italic",
      2: "total"
    }}
    footer={[
      {
        name: "Total Belanja",
        price: `Rp ${total.toLocaleString("id")}`
      },
      {
        name: "Ongkos Kirim",
        price: `Rp ${deliveryFee.toLocaleString("id")}`
      },
      {
        name: "Total Pembayaran",
        price: `Rp ${(total + deliveryFee).toLocaleString("id")}`
      }
    ]}
  />
);

OrderTable.propTypes = {
  id: T.string.isRequired,
  rows: T.arrayOf(
    T.shape({
      number: T.number.isRequired,
      name: T.string.isRequired,
      price: T.node.isRequired,
      qty: T.string.isRequired,
      subtotal: T.string.isRequired
    }).isRequired
  ).isRequired,
  total: T.number.isRequired,
  deliveryFee: T.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  rows: getOrderTable(state),
  total: getTotal(state),
  deliveryFee: getCost(state, ownProps.id)
});

OrderTable = connect(mapStateToProps, actions)(OrderTable);

export default OrderTable;
