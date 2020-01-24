import React from 'react';
import {Link} from 'react-router-dom'
import Hero from './shared/Hero'
import Container from './components/Container'

function App() {
  return (
    <div className="App">
      <Link to="/" component={Hero}></Link>
      <Container />
  
    </div>
  );
}

export default App
