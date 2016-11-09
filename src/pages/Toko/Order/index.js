import React from 'react';

import '../../pages.css';

export default function Order(props) {
  return (
    <div>
      {`Total Pembayaran: Rp ${(props.totalPrice + props.deliveryCost).toLocaleString('id')}`}
    </div>
  )
}

Order.propTypes = {
  totalPrice: React.PropTypes.number.isRequired,
  deliveryCost: React.PropTypes.number.isRequired
}
