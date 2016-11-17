import React from 'react';

import './InfoPesanan.css';

export default function InfoPesanan(props) {
  return (
    <table className="InfoPesanan">
      <thead>
        <tr>
          <th className="InfoPesanan-header-number InfoPesanan-number">No</th>
          <th className="InfoPesanan-header-name InfoPesanan-name">Name</th>
          <th className="InfoPesanan-header-price InfoPesanan-price">Price</th>
          <th className="InfoPesanan-header-number InfoPesanan-qty">Qty</th>
          <th className="InfoPesanan-header-price InfoPesanan-price">Sub Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="InfoPesanan-number">1</td>
          <td><div className="InfoPesanan-name">Cassava</div></td>
          <td><div className="InfoPesanan-price">Rp 5.000</div></td>
          <td className="InfoPesanan-qty"><div>3</div></td>
          <td><div className="InfoPesanan-price">Rp 15.000</div></td>
        </tr>
        <tr>
          <td className="InfoPesanan-number">2</td>
          <td><div className="InfoPesanan-name">Cassava</div></td>
          <td><div className="InfoPesanan-price">Rp 5.000</div></td>
          <td className="InfoPesanan-qty"><div>3</div></td>
          <td><div className="InfoPesanan-price">Rp 15.000</div></td>
        </tr>
        <tr>
          <td className="InfoPesanan-number">3</td>
          <td><div className="InfoPesanan-name">Cassava</div></td>
          <td><div className="InfoPesanan-price">Rp 5.000</div></td>
          <td className="InfoPesanan-qty"><div>3</div></td>
          <td><div className="InfoPesanan-price">Rp 15.000</div></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="InfoPesanan-name" colSpan="2">Discount</td>
          <td className="InfoPesanan-price" colSpan="3">- Rp 0 </td>
        </tr>
        <tr>
          <td className="InfoPesanan-name" colSpan="2">Delivery Fee</td>
          <td className="InfoPesanan-price" colSpan="3"><span>+ Rp 20.000</span></td>
        </tr>
        <tr>
          <td className="InfoPesanan-total InfoPesanan-name" colSpan="2">Total</td>
          <td className="InfoPesanan-total InfoPesanan-price" colSpan="3">Rp 35.000</td>
        </tr>
      </tfoot>
    </table>
  )
}
