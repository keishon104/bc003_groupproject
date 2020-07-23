import React, {Component} from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import './body.css';



class Body extends Component {




  render() {
    return (
      <div className="InputFields">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">T</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="How much should you budget for Toys?"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">S</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="How much should you budget for Savings?"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">C</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="How much should you budget for Candy?"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

      </div>


  )}


}

export default Body;
