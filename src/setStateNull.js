import React, { Component } from 'react';
class Controlled extends Component {
  state = {
    pizzas: 10
  };
  render() {
    const { pizzas } = this.state;
    return (
      <button>{`I have aten ${pizzas} ${
        pizzas === 1 ? 'pizza' : 'pizzas'
      }`}</button>
    );
  }
}
class App extends Component {
  render() {
    return <Controlled />;
  }
}
export default App;
