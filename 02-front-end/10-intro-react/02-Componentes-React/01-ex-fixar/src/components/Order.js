// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price:{ value, currency} } = this.props.order;
    console.log(this.props);
    return (
      <div className="order">
        <p> {user} bought {product} for {value} {currency} </p>
      </div>
    );
  }
}

export default Order;