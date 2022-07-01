import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Componentmid2 extends Component {
  render() {
    return (
      <div className="text1">
        <h1 className="introducing_premium_mini_para">
          Introducing Premium Mini
        </h1>
        <p className="rs1_para">₹7 for 1 day.</p>
        <p className="rs25_para">₹25 for 1 week.</p>
        <Button variant="outline-dark" id="get_mini_btn">
          GET MINI
        </Button>
        <a href="abc" className="termsandconditions">Terms and Conditions apply.
        </a>
      </div>
    );
  }
}
