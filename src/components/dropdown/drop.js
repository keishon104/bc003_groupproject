import React, {Component} from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
// import './body.css';



class Drop extends Component {




  render() {
    return (
      <div className="InputFields">
      <DropdownButton id="dropdown-basic-button" title="Change Amount">
        <Dropdown.Item href="#/action-1">$1.00</Dropdown.Item>
        <Dropdown.Item href="#/action-2">$5.50</Dropdown.Item>
        <Dropdown.Item href="#/action-3">$15.00</Dropdown.Item>
      </DropdownButton>

      </div>


  )}


}

export default Drop;
