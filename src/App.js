import React, {useState} from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import {Container, Button} from 'react-bootstrap';
import './App.css';
import Piechart from './components/piechart/piechart';
import Drop from './components/dropdown/drop';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


function App() {
  const [value,setValue]=useState();
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (
    <div className="App">
      <Container className="ContainerWrap">
        <Header/>
        <DropdownButton
      alignRight
      title="Select the Amount"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey={0}>$0.00</Dropdown.Item>
              <Dropdown.Item eventKey= {5} >$5.00</Dropdown.Item>
              <Dropdown.Item eventKey={10}>$10.00</Dropdown.Item>
              <Dropdown.Item eventKey={15}>$15.00</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey={2.75}>$2.75</Dropdown.Item>
              <Dropdown.Item eventKey={7.35}>$7.35</Dropdown.Item>
              <Dropdown.Item eventKey={12.15}>$12.15</Dropdown.Item>
              <Dropdown.Item eventKey={18.45}>$18.45</Dropdown.Item>
      </DropdownButton>
      <div>You Selected: ${(value * 1).toFixed(2)}</div>
      <div>Total Amount for Toys: ${(value * 0.30).toFixed(2)}</div>
      <div>Total Amount for Candy: ${(value * 0.20).toFixed(2)}</div>
      <div>Total Amount Saved: ${(value * 0.50).toFixed(2)}</div>
        <Body/>
        <Piechart/>
        <Button className="submitButon">Submit</Button>
      </Container>
    </div>
  );
}

export default App;
