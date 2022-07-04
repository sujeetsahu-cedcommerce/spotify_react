import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default class ComponentTask41 extends Component {
  render() {
    return (
      <div className="flex_item" id="flex_item0">
        <div className="manage_margin" id="manage_negative_margin">
         
          <Badge bg="white" text="primary" className="One_time_plans_available">
            One-time plans available
          </Badge>
          <h4 >Mini</h4>
          <p>₹119/month after offer period</p>
          <p>1 account</p>
          <h5 id="month_free">
            <Badge bg="primary" >1 month free</Badge>
          </h5>
          <hr id="hr"></hr>
          <div>
            <p className="Group_Session_para"><i class="fa-solid fa-check"></i>Ad-free music listening</p>
            <p className="Group_Session_para"><i class="fa-solid fa-check"></i>Group Session</p>
            <p className="Group_Session_para"><i class="fa-solid fa-check"></i>Download 10k songs/device on 5 devices</p>
          </div>
          <Button variant="dark" className="view_plans">VIEW PLANS</Button>
          <a href="abc" className="Terms-and-conditions-apply">Terms and conditions apply:</a>
          <span className="Terms-and-conditions-apply">
            1 month free not available for users who have already tried Premium.
          </span>
        </div>
      </div>
    );
  }
}
