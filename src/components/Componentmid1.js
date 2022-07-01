import React, { Component } from "react";
import Button from "react-bootstrap/Button";
export default class Componentmid1 extends Component {
  render() {
    return (
      <div className="text">
        <p className="get_premium_para">Get Premium free for 1 month</p>
        <p>
          Just ₹199/month after. Debit and Credit card accepted. Cancel anytime
        </p>
        <Button id="get_started">
          GET STARTED
        </Button>{' '}
        <Button  id="See_Other_Plans">
          See Other Plans
        </Button>
        <p className="terms_and_condition_para">
          Terms and Conditions 1 month free not available for users who have
          already tried premium
        </p>
      </div>
    );
  }
}
