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
const Errorfallback = () => 'Sorry something went wrong';
class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info I have is ${JSON.stringify(info)}`);
    this.setState({
      hasError: true
    });
  };
  render() {
    const { hasError } = this.state;
    return (
      <Fragment>
        <ReturnType />
        <Portal />
        {hasError ? <Errorfallback /> : <ErrorMaker />}
      </Fragment>
    );
  }
}

export default App;
