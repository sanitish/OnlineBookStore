import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { Button} from
'react-bootstrap';
class Payments extends Component {
  render(props) {
    return (
      <StripeCheckout
        name="Nitish"
        description="pay for your selected books"
        amount={this.props.money}
        token={token => console.log(token)}
        stripeKey='pk_test_okJ7PRP7tp6Ho3BOzYIUwVQ3'
      >
      <button className="btn">
        Purchase
      </button>
      </StripeCheckout>
    );
  }
}

export default Payments;
