import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import { quantify } from '../../services/product';
import { tokos, products } from '../../models';
import '../pages.css';

export default class Pesan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {}
    }
  }

  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.tokoId}`);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // Save 'order' to Local Storage
    localStorage.setItem(
      `order-${this.props.params.tokoId}`,
      JSON.stringify(nextState.order));
  }

  /*** Render ***/

  render() {
    const { tokoId } = this.props.params;
    const { order } = this.state;
    
    return(
      <div className="l-fullwidth">
        <div className="l-wrapper-mainnav">
          <MainNav />
        </div>
        <Header heading={"Toko " + tokos[tokoId].name} />
        <main className="l-wrapper-filter">
          <p>
            Berikut daftar pesanan Anda di toko <code>{tokoId}</code>.
          </p>
          <ul>
            {Object.keys(order)
              .map(key =>
                <li key={key}>
                  {`${products[key].name} : ${quantify(order[key], products[key].step, products[key].unit)}`}
                </li>
              )
            }
          </ul>
        </main>
      </div>
    )
  }
}