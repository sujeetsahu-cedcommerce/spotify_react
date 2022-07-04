import React, { Component } from 'react'
import Button from "react-bootstrap/Button";

export default class ComponentTask43 extends Component {
  render() {
    return (
      <div className='Special_discounts'>
        {/* <span id='manage-padding'> */}
          <span className='Special_discounts_para'>
              Special discount for eligible students in university
          </span>
          <Button id="Learn_more">Learn More</Button>
          {/* </span> */}
      </div>
    )
  }
}
