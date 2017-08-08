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
  !toko || !products || !order || Object.keys(order).length === 0
    ? // No ordered Item, go back to Toko page
      <Redirect to={`/toko/${storeId}`} />
    : <Page header={<Header heading={"Toko " + toko.name} />}>
        <div className="l-ThankYou">
          <p>
            Terima kasih telah berbelanja di toko {toko.name}, berikut detil
            transaksi Anda:
          </p>
          <DescriptionList
            list={[
              { term: "No. Pesanan", definition: "" },
              { term: "Tanggal Pengiriman", definition: "" },
              { term: "Nama", definition: user.name },
              { term: "Panggilan", definition: user.nickname },
              { term: "Email", definition: user.email },
              { term: "No. HP", definition: user.phone },
              { term: "Kota", definition: user.city },
              { term: "Alamat", definition: user.address },
              { term: "Catatan", definition: user.notes }
            ]}
          />
          <Table
            type={{
              No: "number",
              Nama: "name",
              Harga: "price",
              Jumlah: "qty",
              Subtotal: "price"
            }}
            body={Object.keys(order).map((key, id) => {
              const item = products[key];
              const row = {
                No: id + 1,
                Nama: item.name,
                Harga: (
                  <div>
                    Rp {item.price.toLocaleString("id")}
                    <span className="ThankYou-pesanan-unit"> /{item.unit}</span>
                  </div>
                ),
                Jumlah: quantities[key],
                Subtotal: subtotals[key]
              };
              return row;
            })}
            footerColSpan={{
              Nama: 2,
              Harga: 3
            }}
            footerClassName={{
              1: "italic",
              2: "total"
            }}
            footer={[
              {
                Nama: "Total Belanja",
                Harga: `Rp ${total.toLocaleString("id")}`
              },
              {
                Nama: "Ongkos Kirim",
                Harga: `Rp ${toko.cost.toLocaleString("id")}`
              },
              {
                Nama: "Total Pembayaran",
                Harga: `Rp ${(toko.cost + total).toLocaleString("id")}`
              }
            ]}
          />
          <h4>Cara Pembayaran</h4>
          <ol>
            <li>
              Pastikan Anda telah menerima email konfirmasi pesanan dari{" "}
              <Brand />.
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
      </Page>;

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
  order: T.object.isRequired,
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
