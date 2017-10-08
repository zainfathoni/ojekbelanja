import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  getStore,
  getProducts,
  getOrder,
  getQuantities,
  getSubtotals,
  getTotal
} from "../reducers";
import Page from "../components/Page";
import Header from "../components/Header";
import DescriptionList from "../components/DescriptionList";
import Term from "../components/DescriptionList/Term";
import Description from "../components/DescriptionList/Description";
import Table from "../components/Table";
import Brand from "../components/Brand";
import "./ThankYou.css";

let ThankYou = ({
  storeId,
  toko,
  products,
  order,
  quantities,
  subtotals,
  total,
  user
}) =>
  !toko || !products || !order || Object.keys(order).length === 0 ? (
    // No ordered Item, go back to Toko page
    <Redirect to={`/toko/${storeId}`} />
  ) : (
    <Page header={<Header heading={"Toko " + toko.name} />}>
      <div className="l-ThankYou">
        <p>
          Terima kasih telah berbelanja di toko {toko.name}, berikut detil
          transaksi Anda:
        </p>
        <DescriptionList>
          <Term>No. Pesanan</Term>
          <Description />
          <Term>Tanggal Pengiriman</Term>
          <Description />
          <Term>Nama</Term>
          <Description>{user.name}</Description>
          <Term>Panggilan</Term>
          <Description>{user.nickname}</Description>
          <Term>Email</Term>
          <Description>{user.email}</Description>
          <Term>No. HP</Term>
          <Description>{user.phone}</Description>
          <Term>Kota</Term>
          <Description>{user.city}</Description>
          <Term>Alamat</Term>
          <Description>{user.address}</Description>
          <Term>Catatan</Term>
          <Description>{user.notes}</Description>
        </DescriptionList>
        <Table
          columns={[
            { id: "number", label: "No" },
            { id: "name", label: "Nama" },
            { id: "price", label: "Harga" },
            { id: "qty", label: "Jumlah" },
            { id: "subtotal", label: "Subtotal" }
          ]}
          rows={Object.keys(order).map((key, id) => {
            const item = products[key];
            const row = {
              number: id + 1,
              name: item.name,
              price: (
                <div>
                  Rp {item.price.toLocaleString("id")}
                  <span className="ThankYou-pesanan-unit"> /{item.unit}</span>
                </div>
              ),
              qty: quantities[key],
              subtotal: subtotals[key]
            };
            return row;
          })}
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
              price: `Rp ${toko.cost.toLocaleString("id")}`
            },
            {
              name: "Total Pembayaran",
              price: `Rp ${(toko.cost + total).toLocaleString("id")}`
            }
          ]}
        />
        <h4>Cara Pembayaran</h4>
        <ol>
          <li>
            Pastikan Anda telah menerima email konfirmasi pesanan dari <Brand />.
          </li>
          <li>
            Untuk pertanyaan lebih lanjut, berikut detil informasi toko tempat
            Anda memesan:
            <DescriptionList
              list={[
                { term: "Nama Toko", definition: toko.name },
                { term: "Area Layanan", definition: toko.area },
                { term: "No. HP", definition: toko.phone }
              ]}
            />
          </li>
          <li>
            Pembayaran dilakukan dengan cara <i>COD (Cash On Delivery)</i>.
          </li>
        </ol>
      </div>
    </Page>
  );

ThankYou.propTypes = {
  storeId: T.string.isRequired,
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
  total: T.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { storeId } = ownProps.match.params;
  return {
    storeId,
    toko: getStore(state, storeId),
    products: getProducts(state),
    order: getOrder(state),
    quantities: getQuantities(state),
    subtotals: getSubtotals(state),
    total: getTotal(state),
    user: state.user
  };
};

ThankYou = connect(mapStateToProps)(ThankYou);

export default ThankYou;
