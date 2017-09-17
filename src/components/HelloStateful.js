import React, { Component } from 'react';
class HelloStateful extends Component {
  render() {
    const { name } = this.props;
    return <div>Hello {this.props.name}</div>
  }
}

export default HelloStateful;