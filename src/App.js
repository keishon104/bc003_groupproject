import React from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import {Container} from 'react-bootstrap';
import './App.css';
import Piechart from './components/piechart/piechart';

function App() {
  return (
    <div className="App">
      <Container className="ContainerWrap">
      <Header/>
        <Body/>
        <Piechart/>
      </Container>
    </div>
  );
}

export default App;
