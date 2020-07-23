import React from 'react';
import Body from './components/body/body';
import {Container} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="ContainerWrap">
        <Body/>
      </Container>
    </div>
  );
}

export default App;
