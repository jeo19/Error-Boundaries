import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
// hoc functionary insert
const BoundaryHoc = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    };
    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };
    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <Errorfallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

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
const PErrorMaker = BoundaryHoc(ErrorMaker);
class Portal extends Component {
  render() {
    return createPortal(<Message />, document.getElementById('touch'));
  }
}
const PPortal = BoundaryHoc(Portal);
const Message = () => 'Just touched it!';

class ReturnType extends Component {
  render() {
    return 'Hello';
  }
}
const Errorfallback = () => 'Sorry something went wrong';
class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnType />
        <PPortal />
        <PErrorMaker />
      </Fragment>
    );
  }
}

export default BoundaryHoc(App);
