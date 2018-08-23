import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

class ErrorMaker extends Component {
  state = {
    friends: ['jisu', 'deal', 'flyam', 'dangerous']
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}
class Portal extends Component {
  render() {
    return createPortal(<Message />, document.getElementById('touch'));
  }
}
const Message = () => 'Just touched it!';

class ReturnType extends Component {
  render() {
    return 'Hello';
  }
}

class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info I have is ${JSON.stringify(info)}`);
  };
  render() {
    return (
      <Fragment>
        <ReturnType />
        <Portal />
        <ErrorMaker />
      </Fragment>
    );
  }
}

export default App;
