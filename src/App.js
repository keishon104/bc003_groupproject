import React from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import {Container, Button} from 'react-bootstrap';
import './App.css';
import Piechart from './components/piechart/piechart';
import Drop from './components/dropdown/drop';

function App() {
  return (
    <div className="App">
      <Container className="ContainerWrap">
        <Header/>
        <Drop/>
        <Body/>
        <Piechart/>
        <Button className="submitButon">Submit</Button>
      </Container>
    </div>
  );
}

export default App;
